---
topic: repository-management
name: Sync Changes to Template Repository
author: Manus AI
version: 1.0.0
date: 2025-10-17
description: Guide for syncing changes from pan-constitution-dev to pan-constitution-template repository
initiative: pan-governance-foundation
related_issues: [25, 7]
status: active
tags:
  - repository-management
  - template
  - sync-workflow
  - automation
---

# Sync Changes to Template Repository

This guide explains how to sync changes from `pan-constitution-dev` to the `pan-constitution-template` repository, ensuring the template stays up-to-date with Pan Constitution evolution.

## Overview

The Pan Constitution uses a **two-repository architecture** (ADR-001):

- **pan-constitution-dev**: Development repository for the Pan Constitution itself
- **pan-constitution-template**: Clean template repository for new projects

Changes to governance, standards, or infrastructure in `pan-constitution-dev` need to be synced to the template repository so new projects benefit from improvements.

## When to Sync

Sync changes to the template repository when:

1. **Constitution Updates**: Changes to `.specify/memory/constitution.md`
2. **Infrastructure Changes**: New workflows, scripts, or configurations
3. **Documentation Standards**: Updates to Diátaxis structure or templates
4. **Agent System**: Changes to agent onboarding or role profiles
5. **Validation Rules**: Updates to linting, spell checking, or formatting configs
6. **Version Releases**: Quarterly or when significant improvements accumulate

## Sync Process

### Step 1: Identify Changes to Sync

Review recent commits in `pan-constitution-dev`:

```bash
# View recent commits
git log --oneline --since="3 months ago"

# View changes to specific directories
git log --oneline --since="3 months ago" -- .specify/
git log --oneline --since="3 months ago" -- .github/workflows/
git log --oneline --since="3 months ago" -- scripts/
```

Identify commits that affect:
- Constitution and governance
- Infrastructure and automation
- Documentation standards
- Agent system
- Configuration files

### Step 2: Run the Sync Script

Use the `sync-to-template.sh` script to automate the sync process:

```bash
# Dry run (preview changes without applying)
./scripts/sync-to-template.sh --dry-run

# Sync specific files or directories
./scripts/sync-to-template.sh --files ".specify/memory/constitution.md,.github/workflows/"

# Full sync (all template-relevant changes)
./scripts/sync-to-template.sh --full

# Sync with transformation (convert project-specific content to placeholders)
./scripts/sync-to-template.sh --transform
```

### Step 3: Review Transformed Content

The sync script automatically transforms project-specific content to placeholders:

**Transformations Applied:**

| Original | Placeholder |
|----------|-------------|
| `pan-constitution-dev` | `{{PROJECT_NAME}}` |
| `Pan Constitution` | `{{PROJECT_DISPLAY_NAME}}` |
| `kewtyboi` | `{{GITHUB_ORG}}` |
| Specific dates | `{{CREATION_DATE}}` |
| Specific initiatives | `{{INITIAL_INITIATIVE}}` |
| Team names | `{{PROJECT_TEAM}}` |
| URLs | `{{PROJECT_URL}}` |

**Manual Review Required:**

- Check for missed project-specific references
- Verify placeholder consistency
- Ensure examples remain meaningful
- Validate YAML front matter

### Step 4: Test in Template Repository

Before committing, test the synced changes:

```bash
# Clone the template repository
cd /tmp
gh repo clone kewtyboi/pan-constitution-template
cd pan-constitution-template

# Run validation
npm install
npm run lint:md
npm run lint:spelling

# Test scripts
node scripts/generate-docs-index-v2.js --dry-run

# Test workflows (if applicable)
act -l  # List workflows (requires 'act' tool)
```

### Step 5: Commit and Push

If validation passes, commit the synced changes:

```bash
cd /path/to/pan-constitution-template

# Create feature branch
git checkout -b sync/constitution-updates-2025-10

# Review changes
git status
git diff

# Commit with descriptive message
git add .
git commit -m "sync(pan-constitution): update constitution and workflows

Sync changes from pan-constitution-dev:
- Updated constitution.md with new principles
- Added validation workflows
- Updated agent onboarding templates

Source commits:
- abc123f: feat: add new governance principle
- def456g: fix: update workflow validation
- ghi789h: docs: improve onboarding guide

Related: pan-constitution-dev#123, pan-constitution-dev#124"

# Push and create PR
git push -u origin sync/constitution-updates-2025-10
gh pr create --title "Sync: Constitution and workflow updates" \
  --body "Synced changes from pan-constitution-dev. See commit message for details."
```

### Step 6: Update Sync Log

Document the sync in `docs/ops/template-sync-log.md`:

```markdown
## 2025-10-17: Constitution and Workflow Updates

**Source**: pan-constitution-dev commits abc123f through ghi789h
**Files Synced**:
- `.specify/memory/constitution.md`
- `.github/workflows/docs-validation.yml`
- `.agent/agent-onboarding/onboarding-guide.md`

**Transformations**:
- Converted 15 project-specific references to placeholders
- Updated YAML front matter dates

**Testing**:
- ✅ Markdown linting passed
- ✅ Spell checking passed
- ✅ Scripts validated

**PR**: pan-constitution-template#42
```

## Sync Script Reference

### Usage

```bash
./scripts/sync-to-template.sh [OPTIONS]
```

### Options

| Option | Description |
|--------|-------------|
| `--dry-run` | Preview changes without applying |
| `--files <paths>` | Sync specific files or directories (comma-separated) |
| `--full` | Sync all template-relevant files |
| `--transform` | Apply placeholder transformations |
| `--target <path>` | Path to template repository (default: ../pan-constitution-template) |
| `--help` | Show help message |

### Examples

```bash
# Preview full sync with transformations
./scripts/sync-to-template.sh --dry-run --full --transform

# Sync only constitution file
./scripts/sync-to-template.sh --files ".specify/memory/constitution.md" --transform

# Sync workflows to custom location
./scripts/sync-to-template.sh --files ".github/workflows/" --target "/path/to/template"
```

## Troubleshooting

### Issue: Placeholder transformation missed references

**Solution**: Manually search for project-specific terms:

```bash
cd /path/to/pan-constitution-template
grep -r "pan-constitution-dev" .
grep -r "kewtyboi" .
grep -r "Pan Constitution" . --exclude-dir=node_modules
```

### Issue: Validation fails in template repository

**Solution**: Check for dev-specific dependencies:

```bash
# Compare package.json
diff pan-constitution-dev/package.json pan-constitution-template/package.json

# Ensure only template-relevant dependencies are included
```

### Issue: Sync conflicts with existing template changes

**Solution**: Use three-way merge:

```bash
# In template repository
git checkout main
git pull
git checkout -b sync/merge-conflicts
git merge --no-commit sync/constitution-updates-2025-10

# Resolve conflicts
git mergetool

# Complete merge
git commit
```

## Best Practices

1. **Sync Regularly**: Quarterly or when significant changes accumulate
2. **Test Thoroughly**: Always validate in template repository before merging
3. **Document Changes**: Update sync log with every sync operation
4. **Review Transformations**: Manually verify placeholder conversions
5. **Communicate**: Notify team when template is updated
6. **Version Appropriately**: Follow semantic versioning for template releases

## Related Documents

- [ADR-001: Two-Repository Architecture](../decisions/adr/ADR-001-two-repository-architecture.md)
- [Template Repository Scaffolding](../reference/template-repository-scaffolding-v3.md)
- [Template Sync Log](../ops/template-sync-log.md)
- [Repository Governance](../ops/governance.md)

## Rollback Procedure

If a sync introduces issues:

1. **Revert in Template Repository**:
   ```bash
   cd /path/to/pan-constitution-template
   git revert <commit-hash>
   git push
   ```

2. **Document Rollback**:
   - Update sync log with rollback reason
   - Create issue to track fix

3. **Fix and Re-sync**:
   - Fix issues in pan-constitution-dev
   - Re-run sync process

---

**Last Updated:** 2025-10-17 | **Maintained By:** Pan Constitution Team

