---
topic: Reference
name: Automation Scripts Reference
author: Manus AI
version: 1.0.0
date: 2025-10-17
---

# Automation Scripts

This document provides a comprehensive reference for all automation scripts available in the Pan Constitution Template project. These scripts are designed to automate repetitive tasks, ensure consistency, and maintain project quality.

## Overview

The automation scripts are located in the `scripts/` directory and can be executed directly using Node.js or through npm scripts defined in `package.json`. All scripts support `--help` and `--verbose` flags for additional information and detailed logging.

## Available Scripts

### 1. watch-ide-folders.js

**Purpose:** Auto-sync agent prompts to IDE-specific folders.

**Description:** This script watches the `.agent/profiles/` and `.agent/onboarding/` directories for changes and automatically syncs them to IDE-specific folders like `.cursor/` and `.windsurf/`. This ensures that agent prompts are consistently available across different development environments.

**Usage:**

```bash
node scripts/watch-ide-folders.js [options]
```

**Options:**

- `--help, -h` - Show help message
- `--verbose, -v` - Enable verbose logging
- `--once` - Run once and exit (no watch mode)

**npm Scripts:**

```bash
npm run agent:watch   # Start watching for changes
npm run agent:sync    # Sync once and exit
```

**Example:**

```bash
# Watch for changes and sync automatically
npm run agent:watch

# Perform a one-time sync
npm run agent:sync
```

---

### 2. validate-constitution.js

**Purpose:** Check constitutional compliance.

**Description:** This script verifies that the project structure matches constitutional requirements, including the presence of required files and directories, and valid front matter in key documents. It reports errors and warnings, and exits with a non-zero code if critical errors are found.

**Usage:**

```bash
node scripts/validate-constitution.js [options]
```

**Options:**

- `--help, -h` - Show help message
- `--verbose, -v` - Enable verbose logging
- `--fix` - Attempt to fix minor issues automatically (not yet implemented)

**npm Scripts:**

```bash
npm run check:constitution
```

**Example:**

```bash
# Check constitutional compliance
npm run check:constitution

# Check with verbose output
node scripts/validate-constitution.js --verbose
```

**Exit Codes:**

- `0` - No critical errors found
- `1` - Critical errors found

---

### 3. update-frontmatter.js

**Purpose:** Bulk update YAML front matter.

**Description:** This script allows you to update front matter fields across multiple Markdown files using glob patterns. It supports adding, updating, and removing fields, with options for dry-run and backup modes.

**Usage:**

```bash
node scripts/update-frontmatter.js [options] <pattern>
```

**Options:**

- `--help, -h` - Show help message
- `--verbose, -v` - Enable verbose logging
- `--dry-run` - Show what would be changed without making changes
- `--set <key=value>` - Set a front matter field (can be used multiple times)
- `--remove <key>` - Remove a front matter field (can be used multiple times)
- `--backup` - Create backups before modifying files

**npm Scripts:**

```bash
npm run frontmatter:update -- [options] <pattern>
```

**Examples:**

```bash
# Update the author field in all agent profiles
npm run frontmatter:update -- --set author="Manus AI" ".agent/profiles/*.md"

# Update the date field in all documentation files (dry run)
npm run frontmatter:update -- --dry-run --set date="2025-10-17" "docs/**/*.md"

# Remove the deprecated field from all files with backup
npm run frontmatter:update -- --backup --remove deprecated "**/*.md"
```

---

### 4. generate-agent-roster.js

**Purpose:** Create agent directory.

**Description:** This script scans the `.agent/profiles/` directory, extracts agent metadata from profile files, and generates a comprehensive agent roster in both Markdown and JSON formats.

**Usage:**

```bash
node scripts/generate-agent-roster.js [options]
```

**Options:**

- `--help, -h` - Show help message
- `--verbose, -v` - Enable verbose logging
- `--output <path>` - Output directory for generated files (default: `docs/reference`)
- `--json-only` - Generate only JSON output
- `--md-only` - Generate only Markdown output

**npm Scripts:**

```bash
npm run agent:roster          # Generate both Markdown and JSON
npm run agent:roster:json     # Generate only JSON
```

**Example:**

```bash
# Generate agent roster
npm run agent:roster

# Generate JSON only with custom output directory
node scripts/generate-agent-roster.js --json-only --output ./output
```

**Output Files:**

- `docs/reference/agent-roster.md` - Markdown format
- `docs/reference/agent-roster.json` - JSON format

---

### 5. check-placeholder.js

**Purpose:** Verify no placeholders remain after bootstrap.

**Description:** This script scans the entire repository for placeholder patterns like `{{PROJECT_NAME}}` to verify that the bootstrap script has been completed successfully. It reports all found placeholders with their locations and exits with a non-zero code if any are found.

**Usage:**

```bash
node scripts/check-placeholder.js [options]
```

**Options:**

- `--help, -h` - Show help message
- `--verbose, -v` - Enable verbose logging
- `--fix` - Attempt to fix placeholders interactively (not yet implemented)

**npm Scripts:**

```bash
npm run check:placeholders
```

**Example:**

```bash
# Check for placeholders
npm run check:placeholders

# Check with verbose output
node scripts/check-placeholder.js --verbose
```

**Exit Codes:**

- `0` - No placeholders found
- `1` - Placeholders found

---

## Integration with CI/CD

Several of these scripts are designed to be integrated into CI/CD workflows:

- **validate-constitution.js** - Can be used in a workflow to ensure all pull requests maintain constitutional compliance.
- **check-placeholder.js** - Can be used to verify that new projects have completed the bootstrap process.
- **generate-agent-roster.js** - Can be run automatically to keep the agent roster up to date.

Example GitHub Actions workflow step:

```yaml
- name: Validate Constitutional Compliance
  run: npm run check:constitution

- name: Check for Placeholders
  run: npm run check:placeholders
```

---

## Utility Modules

The scripts use shared utility modules located in `scripts/utils/`:

- **frontmatter.js** - Provides functions for parsing and manipulating YAML front matter in Markdown files.

These utilities can be imported and used in custom scripts:

```javascript
const { parseFrontMatter, buildFrontMatter } = require('./scripts/utils/frontmatter');
```

---

## Best Practices

When using these automation scripts, consider the following best practices:

1. **Always use `--dry-run` first** when using `update-frontmatter.js` to preview changes before applying them.
2. **Enable `--backup` mode** when making bulk changes to important files.
3. **Run validation scripts** before committing changes to ensure compliance.
4. **Use verbose mode** when debugging issues with the scripts.
5. **Integrate scripts into your workflow** by adding them to pre-commit hooks or CI/CD pipelines.

---

## Troubleshooting

### Script fails with "Cannot find module"

Ensure you have installed all dependencies:

```bash
npm install
```

### Permission denied when running scripts

Make sure the scripts are executable:

```bash
chmod +x scripts/*.js
```

### Glob patterns not working as expected

Remember to quote glob patterns when using them in the shell:

```bash
node scripts/update-frontmatter.js --set author="Manus AI" ".agent/profiles/*.md"
```

---

*This documentation was created as part of the Pan Constitution Template project.*

