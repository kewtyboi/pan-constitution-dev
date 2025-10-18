#!/usr/bin/env node

/**
 * update-frontmatter.js
 *
 * Bulk update YAML front matter across multiple Markdown files.
 * Supports adding, updating, and removing front matter fields.
 *
 * Usage:
 *   node scripts/update-frontmatter.js [options] <pattern>
 *
 * Options:
 *   --help, -h              Show this help message
 *   --verbose, -v           Enable verbose logging
 *   --dry-run               Show what would be changed without making changes
 *   --set <key=value>       Set a front matter field (can be used multiple times)
 *   --remove <key>          Remove a front matter field (can be used multiple times)
 *   --backup                Create backups before modifying files
 *
 * Examples:
 *   # Update the author field in all agent profiles
 *   node scripts/update-frontmatter.js --set author="Manus AI" ".agent/profiles/*.md"
 *
 *   # Update the date field in all documentation files
 *   node scripts/update-frontmatter.js --set date="2025-10-17" "docs/**/*.md"
 *
 *   # Remove the deprecated field from all files
 *   node scripts/update-frontmatter.js --remove deprecated "**/*.md"
 */

const fs = require('fs');
const path = require('path');
const { parseFrontMatter, buildFrontMatter } = require('./utils/frontmatter');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');

// Parse command-line arguments
const args = process.argv.slice(2);
const options = {
  verbose: false,
  dryRun: false,
  backup: false,
  set: [],
  remove: [],
  help: false,
  pattern: null,
};

// Parse arguments
for (let i = 0; i < args.length; i++) {
  const arg = args[i];

  if (arg === '--help' || arg === '-h') {
    options.help = true;
  } else if (arg === '--verbose' || arg === '-v') {
    options.verbose = true;
  } else if (arg === '--dry-run') {
    options.dryRun = true;
  } else if (arg === '--backup') {
    options.backup = true;
  } else if (arg === '--set') {
    i++;
    if (i < args.length) {
      options.set.push(args[i]);
    }
  } else if (arg === '--remove') {
    i++;
    if (i < args.length) {
      options.remove.push(args[i]);
    }
  } else if (!arg.startsWith('--')) {
    options.pattern = arg;
  }
}

/**
 * Display help message
 */
function showHelp() {
  console.log(`
update-frontmatter.js - Bulk update YAML front matter

Usage:
  node scripts/update-frontmatter.js [options] <pattern>

Options:
  --help, -h              Show this help message
  --verbose, -v           Enable verbose logging
  --dry-run               Show what would be changed without making changes
  --set <key=value>       Set a front matter field (can be used multiple times)
  --remove <key>          Remove a front matter field (can be used multiple times)
  --backup                Create backups before modifying files

Examples:
  # Update the author field in all agent profiles
  node scripts/update-frontmatter.js --set author="Manus AI" ".agent/profiles/*.md"

  # Update the date field in all documentation files
  node scripts/update-frontmatter.js --set date="2025-10-17" "docs/**/*.md"

  # Remove the deprecated field from all files
  node scripts/update-frontmatter.js --remove deprecated "**/*.md"
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
 * Parse a key=value string
 */
function parseKeyValue(str) {
  const match = str.match(/^([^=]+)=(.*)$/);
  if (!match) {
    throw new Error(`Invalid key=value format: ${str}`);
  }
  return { key: match[1].trim(), value: match[2].trim().replace(/^["']|["']$/g, '') };
}

/**
 * Update front matter in a file
 */
function updateFile(filePath) {
  const fullPath = path.join(ROOT_DIR, filePath);

  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const { hasFrontMatter, data, body } = parseFrontMatter(content);

    if (!hasFrontMatter) {
      log(`Skipping ${filePath} (no front matter)`);
      return;
    }

    // Apply updates
    const updatedData = { ...data };
    let hasChanges = false;

    // Set fields
    for (const setArg of options.set) {
      const { key, value } = parseKeyValue(setArg);
      if (updatedData[key] !== value) {
        log(`Setting ${key}="${value}" in ${filePath}`);
        updatedData[key] = value;
        hasChanges = true;
      }
    }

    // Remove fields
    for (const key of options.remove) {
      if (key in updatedData) {
        log(`Removing ${key} from ${filePath}`);
        delete updatedData[key];
        hasChanges = true;
      }
    }

    if (!hasChanges) {
      log(`No changes needed for ${filePath}`);
      return;
    }

    // Build new content
    const newFrontMatter = buildFrontMatter(updatedData);
    const newContent = newFrontMatter + body;

    if (options.dryRun) {
      console.log(`[DRY RUN] Would update ${filePath}`);
      return;
    }

    // Create backup if requested
    if (options.backup) {
      const backupPath = `${fullPath}.bak`;
      fs.writeFileSync(backupPath, content);
      log(`Created backup: ${backupPath}`);
    }

    // Write updated content
    fs.writeFileSync(fullPath, newContent);
    console.log(`✓ Updated ${filePath}`);
  } catch (err) {
    console.error(`✗ Error updating ${filePath}: ${err.message}`);
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

  if (!options.pattern) {
    console.error('Error: No file pattern specified.');
    console.error('Use --help for usage information.');
    process.exit(1);
  }

  if (options.set.length === 0 && options.remove.length === 0) {
    console.error('Error: No operations specified. Use --set or --remove.');
    process.exit(1);
  }

  console.log('=== Bulk Front Matter Update ===\n');

  if (options.dryRun) {
    console.log('[DRY RUN MODE] No files will be modified.\n');
  }

  // Expand glob pattern
  const files = expandGlob(options.pattern);

  if (files.length === 0) {
    console.warn(`No files found matching pattern: ${options.pattern}`);
    process.exit(0);
  }

  console.log(`Found ${files.length} file(s) matching pattern.\n`);

  // Process each file
  for (const file of files) {
    updateFile(file);
  }

  console.log('\n=== Update Complete ===');
}

// Run the script
main();

