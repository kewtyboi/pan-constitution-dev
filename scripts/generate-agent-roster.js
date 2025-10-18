#!/usr/bin/env node

/**
 * generate-agent-roster.js
 *
 * Scans the `.agent/profiles/` directory and generates a comprehensive agent roster.
 * Outputs both Markdown and JSON formats.
 *
 * Usage:
 *   node scripts/generate-agent-roster.js [options]
 *
 * Options:
 *   --help, -h         Show this help message
 *   --verbose, -v      Enable verbose logging
 *   --output <path>    Output directory for generated files (default: docs/reference)
 *   --json-only        Generate only JSON output
 *   --md-only          Generate only Markdown output
 */

const fs = require('fs');
const path = require('path');
const { parseFrontMatter } = require('./utils/frontmatter');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');
const PROFILES_DIR = path.join(ROOT_DIR, ".agent", "agent-role-profiles");

// Parse command-line arguments
const args = process.argv.slice(2);
const options = {
  verbose: args.includes('--verbose') || args.includes('-v'),
  help: args.includes('--help') || args.includes('-h'),
  jsonOnly: args.includes('--json-only'),
  mdOnly: args.includes('--md-only'),
  output: null,
};

// Parse --output option
const outputIndex = args.indexOf('--output');
if (outputIndex !== -1 && outputIndex + 1 < args.length) {
  options.output = args[outputIndex + 1];
}

// Default output directory
if (!options.output) {
  options.output = path.join(ROOT_DIR, 'docs', 'reference');
}

/**
 * Display help message
 */
function showHelp() {
  console.log(`
generate-agent-roster.js - Create agent directory

Usage:
  node scripts/generate-agent-roster.js [options]

Options:
  --help, -h         Show this help message
  --verbose, -v      Enable verbose logging
  --output <path>    Output directory for generated files (default: docs/reference)
  --json-only        Generate only JSON output
  --md-only          Generate only Markdown output

Description:
  This script scans the .agent/profiles/ directory, extracts agent metadata,
  and generates a comprehensive agent roster in both Markdown and JSON formats.
`);
}

/**
 * Log a message if verbose mode is enabled
 */
function log(message) {
  if (options.verbose) {
    console.log(`[VERBOSE] ${message}`);
  }
}

/**
 * Extract agent information from a profile file
 */
function extractAgentInfo(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { hasFrontMatter, data, body } = parseFrontMatter(content);

    if (!hasFrontMatter) {
      log(`Skipping ${path.basename(filePath)} (no front matter)`);
      return null;
    }

    // Extract description from body (first paragraph after front matter)
    const lines = body.trim().split('\n');
    let description = '';
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        description = trimmed;
        break;
      }
    }

    return {
      name: data.name || path.basename(filePath, '.md'),
      role: data.topic || 'Unknown',
      author: data.author || 'Unknown',
      version: data.version || '1.0.0',
      date: data.date || 'Unknown',
      description: data.description || description || 'No description available',
      status: data.status || 'active',
      tags: data.tags || [],
      filePath: path.relative(ROOT_DIR, filePath),
    };
  } catch (err) {
    console.error(`Error reading ${filePath}: ${err.message}`);
    return null;
  }
}

/**
 * Generate Markdown roster
 */
function generateMarkdown(agents) {
  const lines = [
    '# Agent Roster',
    '',
    'This document provides a comprehensive directory of all available agents in the project.',
    '',
    '## Overview',
    '',
    `Total agents: ${agents.length}`,
    '',
    '## Agent Profiles',
    '',
  ];

  // Group agents by status
  const activeAgents = agents.filter(a => a.status === 'active');
  const inactiveAgents = agents.filter(a => a.status !== 'active');

  if (activeAgents.length > 0) {
    lines.push('### Active Agents', '');
    for (const agent of activeAgents) {
      lines.push(`#### ${agent.name}`, '');
      lines.push(`**Role:** ${agent.role}  `);
      lines.push(`**Description:** ${agent.description}  `);
      lines.push(`**Author:** ${agent.author}  `);
      lines.push(`**Version:** ${agent.version}  `);
      lines.push(`**Last Updated:** ${agent.date}  `);
      if (agent.tags.length > 0) {
        lines.push(`**Tags:** ${agent.tags.join(', ')}  `);
      }
      lines.push(`**Profile:** [\`${agent.filePath}\`](../../${agent.filePath})  `);
      lines.push('');
    }
  }

  if (inactiveAgents.length > 0) {
    lines.push('### Inactive Agents', '');
    for (const agent of inactiveAgents) {
      lines.push(`#### ${agent.name}`, '');
      lines.push(`**Role:** ${agent.role}  `);
      lines.push(`**Status:** ${agent.status}  `);
      lines.push(`**Profile:** [\`${agent.filePath}\`](../../${agent.filePath})  `);
      lines.push('');
    }
  }

  lines.push('## Agent Summary Table', '');
  lines.push('| Name | Role | Status | Version | Last Updated |');
  lines.push('|------|------|--------|---------|--------------|');

  for (const agent of agents) {
    lines.push(
      `| ${agent.name} | ${agent.role} | ${agent.status} | ${agent.version} | ${agent.date} |`
    );
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('*This roster was automatically generated by `generate-agent-roster.js`.*');
  lines.push('');

  return lines.join('\n');
}

/**
 * Main entry point
 */
function main() {
  if (options.help) {
    showHelp();
    process.exit(0);
  }

  console.log('=== Generating Agent Roster ===\n');

  // Check if profiles directory exists
  if (!fs.existsSync(PROFILES_DIR)) {
    console.error(`Error: Profiles directory not found: ${PROFILES_DIR}`);
    process.exit(1);
  }

  // Scan profiles directory
  const files = fs.readdirSync(PROFILES_DIR).filter(f => f.endsWith('.md'));
  log(`Found ${files.length} profile files`);

  // Extract agent information
  const agents = [];
  for (const file of files) {
    const filePath = path.join(PROFILES_DIR, file);
    const info = extractAgentInfo(filePath);
    if (info) {
      agents.push(info);
    }
  }

  if (agents.length === 0) {
    console.warn('No agents found.');
    process.exit(0);
  }

  console.log(`Extracted information for ${agents.length} agent(s)\n`);

  // Sort agents by name
  agents.sort((a, b) => a.name.localeCompare(b.name));

  // Ensure output directory exists
  if (!fs.existsSync(options.output)) {
    fs.mkdirSync(options.output, { recursive: true });
    log(`Created output directory: ${options.output}`);
  }

  // Generate JSON output
  if (!options.mdOnly) {
    const jsonPath = path.join(options.output, 'agent-roster.json');
    const jsonContent = JSON.stringify({ agents, generatedAt: new Date().toISOString() }, null, 2);
    fs.writeFileSync(jsonPath, jsonContent);
    console.log(`✓ Generated JSON roster: ${path.relative(ROOT_DIR, jsonPath)}`);
  }

  // Generate Markdown output
  if (!options.jsonOnly) {
    const mdPath = path.join(options.output, 'agent-roster.md');
    const mdContent = generateMarkdown(agents);
    fs.writeFileSync(mdPath, mdContent);
    console.log(`✓ Generated Markdown roster: ${path.relative(ROOT_DIR, mdPath)}`);
  }

  console.log('\n=== Generation Complete ===');
}

// Run the script
main();

