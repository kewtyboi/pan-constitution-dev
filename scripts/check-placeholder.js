#!/usr/bin/env node

/**
 * check-placeholder.js
 *
 * Scans the entire repository for placeholder patterns to verify that the bootstrap
 * script has been completed successfully.
 *
 * Common placeholders:
 *   - {{PROJECT_NAME}}
 *   - {{PROJECT_SLUG}}
 *   - {{PROJECT_DESCRIPTION}}
 *   - {{PROJECT_REPOSITORY_URL}}
 *   - {{PROJECT_TEAM}}
 *
 * Usage:
 *   node scripts/check-placeholder.js [options]
 *
 * Options:
 *   --help, -h      Show this help message
 *   --verbose, -v   Enable verbose logging
 *   --fix           Attempt to fix placeholders interactively (not implemented)
 *
 * Exit codes:
 *   0 - No placeholders found
 *   1 - Placeholders found
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');

// Placeholder patterns to search for
const PLACEHOLDER_PATTERNS = [
  /\{\{PROJECT_NAME\}\}/g,
  /\{\{PROJECT_SLUG\}\}/g,
  /\{\{PROJECT_DESCRIPTION\}\}/g,
  /\{\{PROJECT_REPOSITORY_URL\}\}/g,
  /\{\{PROJECT_TEAM\}\}/g,
  /\{\{[A-Z_]+\}\}/g, // Generic placeholder pattern
];

// Directories to ignore
const IGNORE_DIRS = [
  'node_modules',
  '.git',
  '.github',
  'dist',
  'build',
  'coverage',
  'scripts',
  '.nyc_output',
];

// Files to ignore
const IGNORE_FILES = [
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
];

// Parse command-line arguments
const args = process.argv.slice(2);
const options = {
  verbose: args.includes('--verbose') || args.includes('-v'),
  fix: args.includes('--fix'),
  help: args.includes('--help') || args.includes('-h'),
};

let placeholderCount = 0;
const findings = [];

/**
 * Display help message
 */
function showHelp() {
  console.log(`
check-placeholder.js - Verify no placeholders remain after bootstrap

Usage:
  node scripts/check-placeholder.js [options]

Options:
  --help, -h      Show this help message
  --verbose, -v   Enable verbose logging
  --fix           Attempt to fix placeholders interactively (not implemented)

Description:
  This script scans the entire repository for placeholder patterns like {{PROJECT_NAME}}
  to verify that the bootstrap script has been completed successfully.

Exit codes:
  0 - No placeholders found
  1 - Placeholders found
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
 * Check if a path should be ignored
 */
function shouldIgnore(relativePath) {
  const parts = relativePath.split(path.sep);

  // Check if any part of the path is in the ignore list
  for (const part of parts) {
    if (IGNORE_DIRS.includes(part)) {
      return true;
    }
  }

  // Check if the file is in the ignore list
  const fileName = path.basename(relativePath);
  if (IGNORE_FILES.includes(fileName)) {
    return true;
  }

  return false;
}

/**
 * Check a file for placeholders
 */
function checkFile(filePath) {
  const relativePath = path.relative(ROOT_DIR, filePath);

  if (shouldIgnore(relativePath)) {
    log(`Skipping ${relativePath} (ignored)`);
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      for (const pattern of PLACEHOLDER_PATTERNS) {
        const matches = line.match(pattern);
        if (matches) {
          for (const match of matches) {
            placeholderCount++;
            findings.push({
              file: relativePath,
              line: i + 1,
              placeholder: match,
              context: line.trim(),
            });
          }
        }
      }
    }

    log(`Checked ${relativePath}`);
  } catch (err) {
    // Ignore binary files or files that can't be read as text
    if (err.code !== 'ENOENT') {
      log(`Error reading ${relativePath}: ${err.message}`);
    }
  }
}

/**
 * Recursively scan a directory
 */
function scanDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(ROOT_DIR, fullPath);

    if (shouldIgnore(relativePath)) {
      log(`Skipping ${relativePath} (ignored)`);
      continue;
    }

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.isFile()) {
      checkFile(fullPath);
    }
  }
}

/**
 * Main entry point
 */
function main() {
  if (options.help) {
    showHelp();
    process.exit(0);
  }

  console.log('=== Placeholder Check ===\n');
  console.log('Scanning repository for placeholders...\n');

  // Scan the entire repository
  scanDirectory(ROOT_DIR);

  console.log('\n=== Results ===\n');

  if (placeholderCount === 0) {
    console.log('✓ No placeholders found! Bootstrap appears to be complete.');
    process.exit(0);
  } else {
    console.log(`✗ Found ${placeholderCount} placeholder(s) in ${findings.length} location(s):\n`);

    // Group findings by file
    const byFile = {};
    for (const finding of findings) {
      if (!byFile[finding.file]) {
        byFile[finding.file] = [];
      }
      byFile[finding.file].push(finding);
    }

    // Display findings
    for (const [file, filefindings] of Object.entries(byFile)) {
      console.log(`${file}:`);
      for (const finding of filefindings) {
        console.log(`  Line ${finding.line}: ${finding.placeholder}`);
        console.log(`    ${finding.context}`);
      }
      console.log('');
    }

    console.log('Please run the bootstrap script or manually replace these placeholders.');
    process.exit(1);
  }
}

// Run the script
main();

