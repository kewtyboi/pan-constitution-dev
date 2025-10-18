#!/usr/bin/env node

/**
 * watch-ide-folders.js
 *
 * Watches the `.agent/profiles/` and `.agent/onboarding/` directories for changes
 * and automatically syncs them to IDE-specific folders (e.g., `.cursor/`, `.windsurf/`).
 *
 * This ensures that agent prompts are consistently available across different development environments.
 *
 * Usage:
 *   node scripts/watch-ide-folders.js [options]
 *
 * Options:
 *   --help, -h      Show this help message
 *   --verbose, -v   Enable verbose logging
 *   --once          Run once and exit (no watch mode)
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');
const SOURCE_DIRS = [
  path.join(ROOT_DIR, '.agent', 'profiles'),
  path.join(ROOT_DIR, '.agent', 'onboarding'),
];
const TARGET_IDE_DIRS = [
  path.join(ROOT_DIR, '.cursor', 'agents'),
  path.join(ROOT_DIR, '.windsurf', 'agents'),
  // Add more IDE-specific directories here as needed
];

// Parse command-line arguments
const args = process.argv.slice(2);
const options = {
  verbose: args.includes('--verbose') || args.includes('-v'),
  once: args.includes('--once'),
  help: args.includes('--help') || args.includes('-h'),
};

/**
 * Display help message
 */
function showHelp() {
  console.log(`
watch-ide-folders.js - Auto-sync agent prompts to IDE folders

Usage:
  node scripts/watch-ide-folders.js [options]

Options:
  --help, -h      Show this help message
  --verbose, -v   Enable verbose logging
  --once          Run once and exit (no watch mode)

Description:
  This script watches the .agent/profiles/ and .agent/onboarding/ directories
  and automatically syncs changes to IDE-specific folders like .cursor/ and .windsurf/.
  This ensures that agent prompts are consistently available across different development environments.
`);
}

/**
 * Log a message if verbose mode is enabled
 */
function log(message) {
  if (options.verbose) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

/**
 * Ensure a directory exists, creating it if necessary
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    log(`Created directory: ${dirPath}`);
  }
}

/**
 * Copy a file from source to destination
 */
function copyFile(src, dest) {
  try {
    const content = fs.readFileSync(src);
    fs.writeFileSync(dest, content);
    console.log(`✓ Synced: ${path.basename(src)} → ${path.relative(ROOT_DIR, dest)}`);
    log(`  Source: ${src}`);
    log(`  Destination: ${dest}`);
  } catch (error) {
    console.error(`✗ Error copying ${src} to ${dest}:`, error.message);
  }
}

/**
 * Sync all files from source directories to target IDE directories
 */
function syncAll() {
  console.log('Starting sync operation...');

  for (const sourceDir of SOURCE_DIRS) {
    if (!fs.existsSync(sourceDir)) {
      console.warn(`⚠ Source directory does not exist: ${sourceDir}`);
      continue;
    }

    const files = fs.readdirSync(sourceDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    log(`Found ${mdFiles.length} Markdown files in ${sourceDir}`);

    for (const file of mdFiles) {
      const srcPath = path.join(sourceDir, file);

      for (const targetDir of TARGET_IDE_DIRS) {
        ensureDir(targetDir);
        const destPath = path.join(targetDir, file);
        copyFile(srcPath, destPath);
      }
    }
  }

  console.log('Sync operation complete.');
}

/**
 * Watch source directories for changes
 */
function watch() {
  console.log('Watching for changes...');
  console.log(`Source directories: ${SOURCE_DIRS.join(', ')}`);
  console.log(`Target IDE directories: ${TARGET_IDE_DIRS.join(', ')}`);
  console.log('Press Ctrl+C to stop.');

  for (const sourceDir of SOURCE_DIRS) {
    if (!fs.existsSync(sourceDir)) {
      console.warn(`⚠ Source directory does not exist: ${sourceDir}`);
      continue;
    }

    fs.watch(sourceDir, { recursive: false }, (eventType, filename) => {
      if (!filename || !filename.endsWith('.md')) {
        return;
      }

      log(`Detected ${eventType} event for ${filename}`);

      const srcPath = path.join(sourceDir, filename);

      if (eventType === 'rename' && !fs.existsSync(srcPath)) {
        console.log(`✗ File deleted: ${filename}`);
        return;
      }

      for (const targetDir of TARGET_IDE_DIRS) {
        ensureDir(targetDir);
        const destPath = path.join(targetDir, filename);
        copyFile(srcPath, destPath);
      }
    });
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

  // Perform initial sync
  syncAll();

  // If --once flag is set, exit after initial sync
  if (options.once) {
    process.exit(0);
  }

  // Otherwise, enter watch mode
  watch();
}

// Run the script
main();

