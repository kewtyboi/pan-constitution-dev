---
topic: ci-cd
name: CI/CD Setup Guide
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Guide for setting up and using the CI/CD validation system
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - ci-cd
  - validation
  - automation
  - quality-assurance
---

# CI/CD Setup Guide

## Overview

This project includes a comprehensive CI/CD validation system that ensures code quality, documentation standards, and consistency across all contributions. The system includes automated workflows, pre-commit hooks, and validation scripts.

## Components

### 1. GitHub Actions Workflows

#### Validation Workflow (`.github/workflows/validation.yml`)

Runs automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches
- Manual trigger via workflow dispatch

**Checks performed**:
- Markdown linting
- Spell checking
- Code formatting
- YAML front matter validation
- Link validation (internal links)
- Documentation index freshness

**PR Integration**:
- Comments on PR with validation results
- Blocks merge if validation fails
- Provides detailed error messages

### 2. Pre-commit Hooks

Git hooks that run validation checks before allowing commits and pushes.

**Available hooks**:
- `pre-commit`: Runs linting and formatting checks
- `commit-msg`: Validates conventional commit format
- `pre-push`: Runs full validation suite

**Setup**:

```bash
npm run hooks:setup
```


### 3. Validation Scripts

#### Front Matter Validation (`scripts/validate-frontmatter.js`)

Validates YAML front matter in all markdown files.

**Checks**:
- Presence of required fields
- Correct field order
- Valid field types
- Date format (YYYY-MM-DD)
- Version format (semver)
- Valid status values

**Usage**:

```bash
npm run validate:frontmatter
```

#### Link Validation (`scripts/validate-links.js`)

Checks for broken internal links in markdown files.

**Checks**:
- Internal file links exist
- Relative paths resolve correctly
- No broken cross-references

**Usage**:

```bash
npm run validate:links
```

## Setup Instructions

### Initial Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up Git hooks**:

   ```bash
   npm run hooks:setup
   ```

3. **Verify setup**:

   ```bash
   npm run validate
   ```

### For New Contributors

1. **Clone repository**:

   ```bash
   git clone {{PROJECT_REPOSITORY_URL}}
   cd {{PROJECT_NAME}}
   ```

2. **Install and configure**:

   ```bash
   npm install
   npm run hooks:setup
   ```

3. **Test validation**:

   ```bash
   npm run validate
   ```

## Usage

### Running Validation Locally

#### Full validation suite

```bash
npm run validate
```

#### Individual checks

```bash
npm run lint:md              # Markdown linting
npm run lint:spelling        # Spell checking
npm run validate:frontmatter # YAML front matter
npm run validate:links       # Internal links
npm run format:check         # Formatting check
```

#### Auto-fix issues

```bash
npm run format               # Auto-fix formatting
```

### Committing Changes

1. **Stage changes**:

   ```bash
   git add .
   ```

2. **Commit with conventional format**:

   ```bash
   git commit -m "feat(scope): description"
   ```

   The `commit-msg` hook validates the format automatically.

3. **Push changes**:

   ```bash
   git push
   ```

   The `pre-push` hook runs full validation before pushing.

### Bypassing Hooks (Not Recommended)

In exceptional cases, you can bypass hooks:

```bash
git commit --no-verify -m "message"
git push --no-verify
```

**Warning**: This skips validation and may introduce issues.

## Conventional Commit Format

All commits must follow the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

### Valid Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(agent): add troubleshooting section` |
| `fix` | Bug fix | `fix(docs): correct typo in README` |
| `docs` | Documentation only | `docs: update onboarding guide` |
| `style` | Formatting, no code change | `style: fix markdown formatting` |
| `refactor` | Code refactoring | `refactor(scripts): simplify validation logic` |
| `test` | Adding tests | `test(validation): add frontmatter tests` |
| `chore` | Maintenance tasks | `chore: update dependencies` |
| `perf` | Performance improvement | `perf(index): optimise doc generation` |
| `ci` | CI/CD changes | `ci: add validation workflow` |
| `build` | Build system changes | `build: update npm scripts` |
| `revert` | Revert previous commit | `revert: undo feature X` |

### Scope (Optional)

Scope indicates the area of change:
- `agent`: Agent system
- `docs`: Documentation
- `scripts`: Automation scripts
- `ci`: CI/CD configuration
- `validation`: Validation system

### Examples


```bash
# Feature with scope
git commit -m "feat(agent): add troubleshooting section to onboarding guide"

# Fix without scope
git commit -m "fix: resolve broken link in README"

# Documentation update
git commit -m "docs: add CI/CD setup guide"

# Chore with scope
git commit -m "chore(deps): update markdownlint to v0.39.0"
```

## GitHub Actions Integration

### Workflow Triggers

The validation workflow runs on:

1. **Push to main/develop**:
   - Validates all changes
   - Ensures main branch quality

2. **Pull requests**:
   - Validates PR changes
   - Comments with results
   - Blocks merge on failure

3. **Manual trigger**:
   - Via GitHub Actions UI
   - Useful for re-running checks

### Workflow Permissions

Required permissions:
- `contents: read` - Read repository files
- `pull-requests: write` - Comment on PRs

### Viewing Results

1. **In PR**:
   - Check "Checks" tab
   - Review automated comments
   - Click workflow for details

2. **In Actions tab**:
   - View all workflow runs
   - See detailed logs
   - Re-run failed workflows

## Validation Rules

### Markdown Linting

Rules defined in `.markdownlint.yml`:
- Heading hierarchy
- Line length limits
- Blank line requirements
- List formatting
- Code block formatting

### Spell Checking

Configuration in `.cspell.json`:
- Project dictionary
- Ignored words
- File patterns
- Language settings

**Adding words to dictionary**:

Edit `.cspell.json` and add words to the `words` array:

```json
{
  "words": [
    "customword"
  ]
}
```

### YAML Front Matter

Required fields (in order):
1. `topic` (string)
2. `name` (string)
3. `author` (string)
4. `version` (semver string)
5. `date` (YYYY-MM-DD)
6. `description` (string)
7. `initiative` (string)
8. `related_issues` (array)
9. `status` (draft|active|complete|template)
10. `tags` (array)

### Code Formatting

Prettier configuration in `.prettierrc.yml`:
- 2-space indentation
- Single quotes
- Trailing commas
- Line width 100

## Troubleshooting

### Hook Not Running

**Problem**: Git hooks don't execute

**Solutions**:
1. Re-run setup: `npm run hooks:setup`
2. Check permissions: `ls -la .git/hooks/`
3. Make executable: `chmod +x .git/hooks/*`
4. Verify Git config: `git config --get core.hooksPath`

### Validation Fails Locally

**Problem**: `npm run validate` fails

**Solutions**:
1. Check error messages for specific issues
2. Run individual checks to isolate problem
3. Auto-fix formatting: `npm run format`
4. Review validation rules in config files

### CI Workflow Fails

**Problem**: GitHub Actions validation fails

**Solutions**:
1. Review workflow logs in Actions tab
2. Run validation locally: `npm run validate`
3. Check for environment-specific issues
4. Ensure all dependencies are in package.json

### Front Matter Errors

**Problem**: Front matter validation fails

**Solutions**:
1. Check field presence and order
2. Validate YAML syntax
3. Ensure date format is YYYY-MM-DD
4. Verify version follows semver (X.Y.Z)
5. Check status is valid value

### Broken Link Errors

**Problem**: Link validation fails

**Solutions**:
1. Check file paths are correct
2. Use relative paths from current file
3. Ensure linked files exist
4. Fix typos in file names

### Commit Message Rejected

**Problem**: Commit message validation fails

**Solutions**:
1. Follow conventional commit format
2. Use valid type (feat, fix, docs, etc.)
3. Keep description under 100 characters
4. Use lowercase for scope

## Best Practices

### Before Committing

1. Run validation: `npm run validate`
2. Fix any issues
3. Stage changes: `git add .`
4. Commit with proper format
5. Let hooks validate

### During Development

1. Run checks frequently
2. Fix issues immediately
3. Keep documentation updated
4. Maintain front matter
5. Test links after moving files

### In Pull Requests

1. Ensure all checks pass
2. Review automated comments
3. Address validation failures
4. Keep commits clean
5. Update documentation index

### Maintenance

1. Update dependencies regularly
2. Review and update validation rules
3. Keep scripts up to date
4. Monitor CI/CD performance
5. Document new checks

## Configuration Files

### `.markdownlint.yml`
Markdown linting rules

### `.cspell.json`
Spell checking configuration

### `.prettierrc.yml`
Code formatting rules

### `.github/workflows/validation.yml`
CI/CD workflow definition

### `scripts/validate-frontmatter.js`
Front matter validation logic

### `scripts/validate-links.js`
Link validation logic

### `scripts/setup-pre-commit.sh`
Git hooks installation script

## Related Documentation

- [Contributing Guidelines](../../CONTRIBUTING.md)
- [Agent Onboarding Guide](../../.agent/agent-onboarding/onboarding-guide.md)

## Support

For issues or questions:
1. Check this guide and troubleshooting section
2. Review validation error messages
3. Check related documentation
4. Create issue with details

---

**Validation ensures quality. Use it consistently for best results.**

