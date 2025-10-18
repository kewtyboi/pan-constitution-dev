#!/usr/bin/env node

/**
 * YAML Front Matter Validation Script
 * Validates that all markdown files have proper YAML front matter
 * according to the Pan Constitution standards
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Required front matter fields in order
const REQUIRED_FIELDS = [
  'topic',
  'name',
  'author',
  'version',
  'date',
  'description',
  'initiative',
  'related_issues',
  'status',
  'tags'
];

// Valid status values
const VALID_STATUSES = ['draft', 'active', 'complete', 'template'];

// Directories to exclude
const EXCLUDE_DIRS = [
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  '.cursor',
  '.codex'
];

// Files to exclude
const EXCLUDE_FILES = [
  'CHANGELOG.md',
  'INDEX.md' // Generated file
];

let errors = [];
let warnings = [];
let filesChecked = 0;

/**
 * Extract YAML front matter from markdown content
 */
function extractFrontMatter(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return null;
  }
  
  try {
    return yaml.load(match[1]);
  } catch (e) {
    throw new Error(`Invalid YAML: ${e.message}`);
  }
}

/**
 * Validate front matter structure and content
 */
function validateFrontMatter(filePath, frontMatter) {
  const fileErrors = [];
  const fileWarnings = [];
  
  if (!frontMatter) {
    fileErrors.push(`Missing YAML front matter`);
    return { errors: fileErrors, warnings: fileWarnings };
  }
  
  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!(field in frontMatter)) {
      fileErrors.push(`Missing required field: ${field}`);
    }
  }
  
  // Validate field types and values
  if (frontMatter.topic && typeof frontMatter.topic !== 'string') {
    fileErrors.push(`Field 'topic' must be a string`);
  }
  
  if (frontMatter.name && typeof frontMatter.name !== 'string') {
    fileErrors.push(`Field 'name' must be a string`);
  }
  
  if (frontMatter.author && typeof frontMatter.author !== 'string') {
    fileErrors.push(`Field 'author' must be a string`);
  }
  
  if (frontMatter.version) {
    if (typeof frontMatter.version !== 'string') {
      fileErrors.push(`Field 'version' must be a string`);
    } else if (!/^\d+\.\d+\.\d+$/.test(frontMatter.version)) {
      fileWarnings.push(`Field 'version' should follow semver format (e.g., 1.0.0)`);
    }
  }
  
  if (frontMatter.date) {
    if (typeof frontMatter.date !== 'string') {
      fileErrors.push(`Field 'date' must be a string`);
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(frontMatter.date)) {
      fileErrors.push(`Field 'date' must be in YYYY-MM-DD format`);
    }
  }
  
  if (frontMatter.description && typeof frontMatter.description !== 'string') {
    fileErrors.push(`Field 'description' must be a string`);
  }
  
  if (frontMatter.initiative && typeof frontMatter.initiative !== 'string') {
    fileErrors.push(`Field 'initiative' must be a string`);
  }
  
  if (frontMatter.related_issues && !Array.isArray(frontMatter.related_issues)) {
    fileErrors.push(`Field 'related_issues' must be an array`);
  }
  
  if (frontMatter.status) {
    if (typeof frontMatter.status !== 'string') {
      fileErrors.push(`Field 'status' must be a string`);
    } else if (!VALID_STATUSES.includes(frontMatter.status)) {
      fileErrors.push(`Field 'status' must be one of: ${VALID_STATUSES.join(', ')}`);
    }
  }
  
  if (frontMatter.tags && !Array.isArray(frontMatter.tags)) {
    fileErrors.push(`Field 'tags' must be an array`);
  }
  
  return { errors: fileErrors, warnings: fileWarnings };
}

/**
 * Check if path should be excluded
 */
function shouldExclude(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  
  // Check if in excluded directory
  for (const dir of EXCLUDE_DIRS) {
    if (relativePath.includes(dir + path.sep) || relativePath.startsWith(dir)) {
      return true;
    }
  }
  
  // Check if excluded file
  const fileName = path.basename(filePath);
  if (EXCLUDE_FILES.includes(fileName)) {
    return true;
  }
  
  return false;
}

/**
 * Recursively find all markdown files
 */
function findMarkdownFiles(dir) {
  let results = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      
      if (shouldExclude(filePath)) {
        continue;
      }
      
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        results = results.concat(findMarkdownFiles(filePath));
      } else if (file.endsWith('.md')) {
        results.push(filePath);
      }
    }
  } catch (e) {
    console.error(`Error reading directory ${dir}: ${e.message}`);
  }
  
  return results;
}

/**
 * Main validation function
 */
function validateAllFiles() {
  console.log('Validating YAML front matter in markdown files...\n');
  
  const rootDir = process.cwd();
  const markdownFiles = findMarkdownFiles(rootDir);
  
  for (const filePath of markdownFiles) {
    filesChecked++;
    const relativePath = path.relative(rootDir, filePath);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const frontMatter = extractFrontMatter(content);
      const validation = validateFrontMatter(relativePath, frontMatter);
      
      if (validation.errors.length > 0) {
        errors.push({
          file: relativePath,
          errors: validation.errors
        });
      }
      
      if (validation.warnings.length > 0) {
        warnings.push({
          file: relativePath,
          warnings: validation.warnings
        });
      }
    } catch (e) {
      errors.push({
        file: relativePath,
        errors: [e.message]
      });
    }
  }
  
  // Print results
  console.log(`Checked ${filesChecked} markdown files\n`);
  
  if (warnings.length > 0) {
    console.log('⚠ Warnings:\n');
    for (const item of warnings) {
      console.log(`  ${item.file}`);
      for (const warning of item.warnings) {
        console.log(`    - ${warning}`);
      }
      console.log('');
    }
  }
  
  if (errors.length > 0) {
    console.log('✗ Errors:\n');
    for (const item of errors) {
      console.log(`  ${item.file}`);
      for (const error of item.errors) {
        console.log(`    - ${error}`);
      }
      console.log('');
    }
    console.log(`\nValidation failed with ${errors.length} file(s) containing errors.`);
    process.exit(1);
  }
  
  console.log('✓ All files have valid YAML front matter!');
  process.exit(0);
}

// Run validation
validateAllFiles();

