---
topic: automation-scripts
name: Automation Scripts README
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Documentation for automation scripts used in {{PROJECT_NAME}}
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - automation
  - scripts
  - documentation
  - tooling
---

# Automation Scripts

This directory contains automation scripts for maintaining documentation and project infrastructure.

## Available Scripts

### generate-docs-index-v2.js

**Purpose:** Auto-generate `INDEX.md` at project root from YAML front matter in all documentation files.

**Usage:**

```bash
# Generate INDEX.md at root
npm run docs:index

# Or run directly
node scripts/generate-docs-index-v2.js

# Generate to custom location
node scripts/generate-docs-index-v2.js --output docs/INDEX.md
```

**Features:**

- Scans all markdown files in the repository
- Extracts YAML front matter metadata
- Organises documentation by:
  - Initiative (cross-cutting change events)
  - Topic (subject area)
  - Alphabetical listing
- Generates statistics (total docs, active initiatives, topics, authors)
- Warns about missing YAML front matter
- Excludes INDEX.md itself from scanning

**Requirements:**

- Node.js >= 18.0.0
- All documentation files must have YAML front matter

**Output Structure:**

```markdown
# Documentation Index

## Summary
- Total Documents
- Active Initiatives
- Topics
- Authors

## Navigation
- By Initiative
- By Topic
- All Documents (Alphabetical)
- Statistics

## Documents by Initiative
[Grouped tables]

## Documents by Topic
[Grouped tables]

## All Documents (Alphabetical)
[Complete listing]

## Statistics
[Detailed breakdowns]
```

**YAML Front Matter Requirements:**

All documentation files should include:

```yaml
---
topic: [topic-name]
name: [Document Title]
author: [Author Name]
version: [X.Y.Z]
date: [YYYY-MM-DD]
description: [Brief description]
initiative: [initiative-name]
related_issues: []
status: [active|draft|archived]
tags:
  - [tag1]
  - [tag2]
---
```

**When to Run:**

- After creating new documentation
- After updating YAML front matter
- Before committing documentation changes
- As part of CI/CD validation

## Utilities

### utils/frontmatter.js

**Purpose:** Utility functions for parsing and building YAML front matter.

**Functions:**

- `parseFrontMatter(content)` - Extract YAML from markdown
- `buildFrontMatter(data, options)` - Generate YAML front matter
- `toTitleFromPath(filePath)` - Generate title from file path
- `FIELD_ORDER` - Standard field ordering for YAML

**Usage:**

```javascript
const { parseFrontMatter, buildFrontMatter } = require('./utils/frontmatter');

// Parse
const { data, hasFrontMatter } = parseFrontMatter(markdownContent);

// Build
const yaml = buildFrontMatter({
  topic: 'example',
  name: 'Example Document',
  // ...
});
```

## npm Scripts

Defined in `package.json`:

| Script | Command | Purpose |
|--------|---------|---------|
| `docs:index` | `node scripts/generate-docs-index-v2.js` | Generate INDEX.md |
| `docs:index:output` | `node scripts/generate-docs-index-v2.js --output` | Generate to custom location |
| `lint:md` | `markdownlint '**/*.md'` | Lint markdown files |
| `lint:spelling` | `cspell '**/*.md'` | Check spelling |
| `format` | `prettier --write '**/*.{md,json,yml,yaml}'` | Format files |
| `validate` | `npm run lint:md && npm run lint:spelling` | Run all validation |

## Development

### Adding New Scripts

1. Create script in `scripts/` directory
2. Add npm script to `package.json`
3. Document in this README
4. Add usage examples

### Testing Scripts

```bash
# Test docs index generation
npm run docs:index

# Verify output
cat INDEX.md

# Test with custom output
node scripts/generate-docs-index-v2.js --output test-index.md
```

### Dependencies

Scripts use these npm packages:

- `js-yaml` - YAML parsing
- `fs`, `path` - File system operations (built-in)

Install dependencies:

```bash
npm install
```

## Troubleshooting

### "Missing YAML front matter" warnings

**Problem:** Documents without YAML front matter are excluded from INDEX.md.

**Solution:** Add YAML front matter to all documentation files.

### Script fails with "Cannot find module"

**Problem:** Missing dependencies.

**Solution:**

```bash
npm install
```

### INDEX.md not updating

**Problem:** Script completed but INDEX.md unchanged.

**Solution:**

1. Check if script ran successfully (look for ✅ message)
2. Verify you're in the correct directory
3. Check file permissions
4. Try running with `--output INDEX.md` explicitly

## Best Practices

### When Creating Documentation

1. Always include complete YAML front matter
2. Use consistent topic names
3. Link to related issues
4. Update initiative field
5. Run `npm run docs:index` after creating docs

### Maintenance

- Run `npm run docs:index` regularly
- Review warnings about missing front matter
- Keep YAML front matter consistent
- Update this README when adding scripts

## Related

- ADR-004: Place INDEX.md at Project Root
- Issue #24: Implement generate-docs-index-v2.js script
- CONTRIBUTING.md: Documentation standards

---

**Version:** 1.0.0 | **Last Updated:** {{CREATION_DATE}} | **Status:** Active

