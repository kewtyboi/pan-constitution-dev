#!/usr/bin/env node

/**
 * Link Validation Script
 * Checks for broken internal links in markdown files
 */

const fs = require('fs');
const path = require('path');

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

let errors = [];
let warnings = [];
let filesChecked = 0;
let linksChecked = 0;

/**
 * Extract markdown links from content
 */
function extractLinks(content) {
  const links = [];
  
  // Match markdown links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push({
      text: match[1],
      url: match[2],
      line: content.substring(0, match.index).split('\n').length
    });
  }
  
  return links;
}

/**
 * Check if path should be excluded
 */
function shouldExclude(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  
  for (const dir of EXCLUDE_DIRS) {
    if (relativePath.includes(dir + path.sep) || relativePath.startsWith(dir)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Validate a link
 */
function validateLink(baseFile, link) {
  const { url, text, line } = link;
  
  // Skip external links (http/https)
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return null;
  }
  
  // Skip anchors only
  if (url.startsWith('#')) {
    return null;
  }
  
  // Skip mailto and other protocols
  if (url.includes(':')) {
    return null;
  }
  
  // Handle anchor links (file.md#anchor)
  const [filePath, anchor] = url.split('#');
  
  if (!filePath) {
    return null; // Just an anchor
  }
  
  // Resolve relative path
  const baseDir = path.dirname(baseFile);
  const absolutePath = path.resolve(baseDir, filePath);
  
  // Check if file exists
  if (!fs.existsSync(absolutePath)) {
    return {
      file: path.relative(process.cwd(), baseFile),
      line,
      error: `Broken link: "${text}" → ${url} (file not found: ${path.relative(process.cwd(), absolutePath)})`
    };
  }
  
  // TODO: Could validate anchors exist in target file
  
  return null;
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
function validateAllLinks() {
  console.log('Validating internal links in markdown files...\n');
  
  const rootDir = process.cwd();
  const markdownFiles = findMarkdownFiles(rootDir);
  
  for (const filePath of markdownFiles) {
    filesChecked++;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const links = extractLinks(content);
      
      for (const link of links) {
        linksChecked++;
        const error = validateLink(filePath, link);
        
        if (error) {
          errors.push(error);
        }
      }
    } catch (e) {
      errors.push({
        file: path.relative(rootDir, filePath),
        error: `Error reading file: ${e.message}`
      });
    }
  }
  
  // Print results
  console.log(`Checked ${linksChecked} links in ${filesChecked} markdown files\n`);
  
  if (errors.length > 0) {
    console.log('✗ Broken links found:\n');
    for (const error of errors) {
      console.log(`  ${error.file}${error.line ? `:${error.line}` : ''}`);
      console.log(`    ${error.error}`);
      console.log('');
    }
    console.log(`\nValidation failed with ${errors.length} broken link(s).`);
    process.exit(1);
  }
  
  console.log('✓ All internal links are valid!');
  process.exit(0);
}

// Run validation
validateAllLinks();

