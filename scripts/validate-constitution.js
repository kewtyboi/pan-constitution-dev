#!/usr/bin/env node

/**
 * validate-constitution.js
 *
 * Checks the project for constitutional compliance by verifying:
 * - Required files and directories exist
 * - Front matter is present and valid in key documents
 * - Project structure matches constitutional requirements
 *
 * Usage:
 *   node scripts/validate-constitution.js [options]
 *
 * Options:
 *   --help, -h      Show this help message
 *   --verbose, -v   Enable verbose logging
 *   --fix           Attempt to fix minor issues automatically
 */

const fs = require('fs');
const path = require('path');
const { parseFrontMatter } = require('./utils/frontmatter');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');

// Required files and directories
const REQUIRED_STRUCTURE = {
  files: [
    'README.md',
    'AGENTS.md',
    'ARCHITECTURE.md',
    'CONTRIBUTING.md',
    'CHANGELOG.md',
    'LICENCE',
    'INDEX.md',
    'bootstrap.sh',
    'package.json',
    '.gitignore',
    '.editorconfig',
    '.markdownlint.yml',
    '.cspell.json',
    '.prettierrc.yml',
  ],
  directories: [
    'docs',
    'docs/explanation',
    'docs/how-to',
    'docs/reference',
    'docs/tutorials',
    '.agent',
    '.agent/profiles',
    '.agent/onboarding',
    '.specify',
    '.specify/memory',
    '.github',
    '.github/workflows',
    'scripts',
    'scripts/utils',
  ],
};

// Documents that must have front matter
const FRONT_MATTER_REQUIRED = [
  '.agent/profiles/*.md',
  '.agent/onboarding/*.md',
  'docs/**/*.md',
];

// Parse command-line arguments
const args = process.argv.slice(2);
const options = {
  verbose: args.includes('--verbose') || args.includes('-v'),
  fix: args.includes('--fix'),
  help: args.includes('--help') || args.includes('-h'),
};

let errorCount = 0;
let warningCount = 0;

/**
 * Display help message
 */
function showHelp() {
  console.log(`
validate-constitution.js - Check constitutional compliance

Usage:
  node scripts/validate-constitution.js [options]

Options:
  --help, -h      Show this help message
  --verbose, -v   Enable verbose logging
  --fix           Attempt to fix minor issues automatically

Description:
  This script verifies that the project structure matches constitutional requirements,
  including the presence of required files and directories, and valid front matter
  in key documents.
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
 * Report an error
 */
function error(message) {
  console.error(`✗ ERROR: ${message}`);
  errorCount++;
}

/**
 * Report a warning
 */
function warn(message) {
  console.warn(`⚠ WARNING: ${message}`);
  warningCount++;
}

/**
 * Report success
 */
function success(message) {
  console.log(`✓ ${message}`);
}

/**
 * Check if a file exists
 */
function checkFile(filePath) {
  const fullPath = path.join(ROOT_DIR, filePath);
  if (fs.existsSync(fullPath)) {
    log(`File exists: ${filePath}`);
    return true;
  } else {
    error(`Required file missing: ${filePath}`);
    return false;
  }
}

/**
 * Check if a directory exists
 */
function checkDirectory(dirPath) {
  const fullPath = path.join(ROOT_DIR, dirPath);
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    log(`Directory exists: ${dirPath}`);
    return true;
  } else {
    error(`Required directory missing: ${dirPath}`);
    return false;
  }
}

/**
 * Check front matter in a file
 */
function checkFrontMatter(filePath) {
  const fullPath = path.join(ROOT_DIR, filePath);

  if (!fs.existsSync(fullPath)) {
    return; // Already reported as missing
  }

  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const { hasFrontMatter, data } = parseFrontMatter(content);

    if (!hasFrontMatter) {
      warn(`Missing front matter: ${filePath}`);
      return false;
    }

    // Check for required front matter fields
    const requiredFields = ['topic', 'name', 'author', 'version', 'date'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      warn(`Incomplete front matter in ${filePath}: missing ${missingFields.join(', ')}`);
      return false;
    }

    log(`Valid front matter: ${filePath}`);
    return true;
  } catch (err) {
    error(`Error reading ${filePath}: ${err.message}`);
    return false;
  }
}

/**
 * Expand glob patterns to file paths
 */
function expandGlob(pattern) {
  const parts = pattern.split('/');
  let currentDir = ROOT_DIR;
  let results = [''];

  for (const part of parts) {
    if (part === '**') {
      // Recursive directory search
      const newResults = [];
      for (const base of results) {
        const fullBase = path.join(currentDir, base);
        if (fs.existsSync(fullBase)) {
          const walk = dir => {
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              const relativePath = path.relative(currentDir, fullPath);
              if (entry.isDirectory()) {
                newResults.push(relativePath);
                walk(fullPath);
              }
            }
          };
          walk(fullBase);
        }
      }
      results = newResults.length > 0 ? newResults : results;
    } else if (part === '*') {
      // Single-level wildcard
      const newResults = [];
      for (const base of results) {
        const fullBase = path.join(currentDir, base);
        if (fs.existsSync(fullBase)) {
          const entries = fs.readdirSync(fullBase, { withFileTypes: true });
          for (const entry of entries) {
            newResults.push(path.join(base, entry.name));
          }
        }
      }
      results = newResults;
    } else if (part.includes('*')) {
      // Pattern matching
      const regex = new RegExp('^' + part.replace(/\*/g, '.*') + '$');
      const newResults = [];
      for (const base of results) {
        const fullBase = path.join(currentDir, base);
        if (fs.existsSync(fullBase)) {
          const entries = fs.readdirSync(fullBase);
          for (const entry of entries) {
            if (regex.test(entry)) {
              newResults.push(path.join(base, entry));
            }
          }
        }
      }
      results = newResults;
    } else {
      // Regular directory or file
      results = results.map(base => path.join(base, part));
    }
  }

  return results.filter(p => {
    const fullPath = path.join(ROOT_DIR, p);
    return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile();
  });
}

/**
 * Main validation logic
 */
function main() {
  if (options.help) {
    showHelp();
    process.exit(0);
  }

  console.log('=== Constitutional Compliance Validation ===\n');

  // Check required files
  console.log('Checking required files...');
  for (const file of REQUIRED_STRUCTURE.files) {
    checkFile(file);
  }
  console.log('');

  // Check required directories
  console.log('Checking required directories...');
  for (const dir of REQUIRED_STRUCTURE.directories) {
    checkDirectory(dir);
  }
  console.log('');

  // Check front matter
  console.log('Checking front matter in key documents...');
  for (const pattern of FRONT_MATTER_REQUIRED) {
    const files = expandGlob(pattern);
    if (files.length === 0) {
      warn(`No files found matching pattern: ${pattern}`);
    } else {
      for (const file of files) {
        checkFrontMatter(file);
      }
    }
  }
  console.log('');

  // Summary
  console.log('=== Validation Summary ===');
  console.log(`Errors: ${errorCount}`);
  console.log(`Warnings: ${warningCount}`);

  if (errorCount === 0 && warningCount === 0) {
    success('Project is fully compliant with the Pan Constitution!');
    process.exit(0);
  } else if (errorCount === 0) {
    console.log('\n✓ No critical errors found, but there are warnings to address.');
    process.exit(0);
  } else {
    console.log('\n✗ Critical errors found. Please address them to ensure constitutional compliance.');
    process.exit(1);
  }
}

// Run the script
main();

