---
topic: How-to Guides
name: How to Use Automation Scripts
author: Manus AI
version: 1.0.0
date: 2025-10-17
---

# How to Use Automation Scripts

This guide provides practical examples and step-by-step instructions for using the automation scripts in the Pan Constitution Template project.

## Prerequisites

Before using the automation scripts, ensure you have:

1. Node.js version 18.0.0 or higher installed
2. All project dependencies installed (`npm install`)
3. Basic familiarity with the command line

## Common Tasks

### Task 1: Keep Agent Prompts Synced Across IDEs

If you use multiple IDEs (like Cursor and Windsurf), you can automatically sync agent prompts to all of them.

**Steps:**

1. Start the watch script:

   ```bash
   npm run agent:watch
   ```

2. Edit any file in `.agent/profiles/` or `.agent/onboarding/`
3. The script will automatically copy the changes to `.cursor/agents/` and `.windsurf/agents/`
4. Press `Ctrl+C` to stop watching

**One-time sync:**

If you just want to sync once without watching for changes:

```bash
npm run agent:sync
```

---

### Task 2: Validate Project Compliance

Before submitting a pull request, you should verify that your changes maintain constitutional compliance.

**Steps:**

1. Run the validation script:

   ```bash
   npm run check:constitution
   ```

2. Review any errors or warnings reported
3. Fix any issues identified
4. Run the script again to confirm all issues are resolved

**Example output:**

```
=== Constitutional Compliance Validation ===

Checking required files...
✓ All required files present

Checking required directories...
✓ All required directories present

Checking front matter in key documents...
⚠ WARNING: Missing front matter: docs/explanation/example.md

=== Validation Summary ===
Errors: 0
Warnings: 1

✓ No critical errors found, but there are warnings to address.
```

---

### Task 3: Update Front Matter Across Multiple Files

If you need to update metadata across multiple files (e.g., changing the author or updating dates), you can use the bulk update script.

**Steps:**

1. **Dry run first** to preview changes:

   ```bash
   npm run frontmatter:update -- --dry-run --set author="Manus AI" ".agent/profiles/*.md"
   ```

2. Review the output to ensure it matches your expectations

3. **Run with backup** to make the actual changes:

   ```bash
   npm run frontmatter:update -- --backup --set author="Manus AI" ".agent/profiles/*.md"
   ```

4. Verify the changes were applied correctly

**More examples:**

Update the date in all documentation files:

```bash
npm run frontmatter:update -- --set date="2025-10-17" "docs/**/*.md"
```

Remove a deprecated field:

```bash
npm run frontmatter:update -- --remove deprecated "**/*.md"
```

Update multiple fields at once:

```bash
npm run frontmatter:update -- --set author="Manus AI" --set version="2.0.0" ".agent/profiles/*.md"
```

---

### Task 4: Generate an Agent Roster

To create a comprehensive directory of all available agents, use the agent roster generator.

**Steps:**

1. Run the generator:

   ```bash
   npm run agent:roster
   ```

2. The script will create two files:
   - `docs/reference/agent-roster.md` - Human-readable Markdown format
   - `docs/reference/agent-roster.json` - Machine-readable JSON format

3. Review the generated files

**Generate only JSON:**

If you only need the JSON output (e.g., for API integration):

```bash
npm run agent:roster:json
```

**Custom output directory:**

```bash
node scripts/generate-agent-roster.js --output ./custom-output
```

---

### Task 5: Check for Placeholders After Bootstrap

After running the bootstrap script on a new project, verify that all placeholders have been replaced.

**Steps:**

1. Run the placeholder check:

   ```bash
   npm run check:placeholders
   ```

2. If placeholders are found, the script will report their locations:

   ```
   ✗ Found 3 placeholder(s) in 2 location(s):

   README.md:
     Line 5: {{PROJECT_NAME}}
       # {{PROJECT_NAME}}

   package.json:
     Line 2: {{PROJECT_SLUG}}
       "name": "{{PROJECT_SLUG}}",
     Line 4: {{PROJECT_DESCRIPTION}}
       "description": "{{PROJECT_DESCRIPTION}}",
   ```

3. Manually replace the remaining placeholders or re-run the bootstrap script

---

## Advanced Usage

### Running Scripts with Verbose Output

For debugging or detailed logging, add the `--verbose` flag:

```bash
node scripts/validate-constitution.js --verbose
```

### Creating Custom Automation Scripts

You can create your own automation scripts using the shared utilities:

```javascript
#!/usr/bin/env node

const { parseFrontMatter, buildFrontMatter } = require('./scripts/utils/frontmatter');
const fs = require('fs');

// Your custom logic here
const content = fs.readFileSync('example.md', 'utf-8');
const { data, body } = parseFrontMatter(content);

// Modify front matter
data.customField = 'customValue';

// Build new content
const newContent = buildFrontMatter(data) + body;
fs.writeFileSync('example.md', newContent);
```

---

## Integration with Git Hooks

You can integrate these scripts into Git hooks to enforce quality standards.

**Example: Pre-commit hook**

Create `.git/hooks/pre-commit`:

```bash
#!/bin/sh

# Check for placeholders
npm run check:placeholders || exit 1

# Validate constitutional compliance
npm run check:constitution || exit 1

echo "✓ All checks passed"
```

Make it executable:

```bash
chmod +x .git/hooks/pre-commit
```

---

## Troubleshooting

### Issue: "Cannot find module"

**Solution:** Install dependencies:

```bash
npm install
```

### Issue: "Permission denied"

**Solution:** Make scripts executable:

```bash
chmod +x scripts/*.js
```

### Issue: Glob patterns not matching files

**Solution:** Ensure you quote the pattern:

```bash
# Correct
npm run frontmatter:update -- --set author="Manus AI" ".agent/profiles/*.md"

# Incorrect (shell will expand the glob before passing to script)
npm run frontmatter:update -- --set author="Manus AI" .agent/profiles/*.md
```

### Issue: Script reports false positives

**Solution:** Use `--verbose` to see detailed output and understand what the script is checking:

```bash
node scripts/validate-constitution.js --verbose
```

---

## Next Steps

- Review the [Automation Scripts Reference](../reference/automation-scripts.md) for detailed documentation
- Explore the [Configuration Guide](../reference/configuration-guide.md) to understand project settings
- Check the [Contributing Guide](../../CONTRIBUTING.md) for development guidelines

---

*This guide is part of the Pan Constitution Template project documentation.*

