---
topic: template-repository-analysis
name: Pan Constitution Template Repository - Comprehensive Analysis
author: Manus AI
version: 1.0.0
date: 2025-10-14
description: Comprehensive analysis of requirements, file inventory, and implementation strategy for creating a production-ready Pan Constitution template repository
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#6'
status: active
tags:
  - template-repository
  - analysis
  - infrastructure
  - governance
---

# Pan Constitution Template Repository: Comprehensive Analysis

**Author:** Manus AI  
**Date:** 2025-10-14  
**Initiative:** pan-governance-foundation  
**Related Issues:** #5, #6

## Executive Summary

After thorough analysis of the Pan Constitution, NeuroNarnia, and AwayTomate repositories, it is clear that a comprehensive template repository must include far more than basic documentation files. The template must provide a complete, production-ready infrastructure that includes:

- **26 specialised agent files** for AI-driven development
- **Complete CI/CD workflows** for markdown linting, spell checking, link validation, and documentation validation
- **Automation scripts** for YAML front matter management, documentation indexing, and validation
- **Configuration files** for all quality tools (.markdownlint.yml, .cspell.json, .prettierrc.yml, etc.)
- **`.specify/rules/`** files that define agent behaviour and orchestration
- **Issue and PR templates** for structured collaboration
- **Complete file structure** as defined in the Pan Constitution

This document provides a detailed inventory and implementation plan.

---

## Part 1: Complete File Inventory for Template Repository

### 1.1 Root Configuration Files

| File | Purpose | Source |
|------|---------|--------|
| `.markdownlint.yml` | Markdown linting rules with project-specific customisations | NeuroNarnia |
| `.cspell.json` | Spell checking dictionary and configuration | NeuroNarnia (needs Pan-generic version) |
| `.prettierrc.yml` | Code formatting standards | NeuroNarnia |
| `.markdown-link-check.json` | Link validation configuration | NeuroNarnia |
| `.editorconfig` | Editor configuration for consistent formatting | AwayTomate |
| `.gitignore` | Standard ignore patterns for AI-agent projects | NeuroNarnia/AwayTomate |
| `.gitattributes` | Git attributes for line endings, etc. | AwayTomate |
| `package.json` | NPM scripts for documentation automation | NeuroNarnia (template version) |

### 1.2 Core Documentation Files

| File | Purpose | Template Approach |
|------|---------|-------------------|
| `README.md` | Project overview and quick start | **Project-centric template** with placeholders |
| `AGENTS.md` | AI agent coordination guidelines | **Project-centric template** with placeholders |
| `CONTRIBUTING.md` | Contribution guidelines | **Generic template** with project customisation sections |
| `CHANGELOG.md` | Change log with initiative tracking | **Empty template** with structure |
| `CODE_OF_CONDUCT.md` | Community standards | **Generic template** (optional) |
| `SECURITY.md` | Security policy | **Generic template** (optional) |
| `LICENSE` | Project license | **Placeholder** for user selection |

### 1.3 `.specify/` Directory Structure

#### `.specify/memory/`

| File | Purpose |
|------|---------|
| `constitution.md` | Project constitution inheriting from Pan |

#### `.specify/rules/` (6 files)

| File | Purpose | Source |
|------|---------|--------|
| `orchestrator-startup.mdc` | Orchestrator agent startup protocol | NeuroNarnia/AwayTomate (needs Pan-generic version) |
| `ai-agent-compliance.mdc` | AI agent compliance rules | NeuroNarnia/AwayTomate |
| `initiative-tracking.mdc` | Initiative classification rules | NeuroNarnia/AwayTomate |
| `privacy-security.mdc` | Privacy and security baseline | NeuroNarnia/AwayTomate |
| `project-structure.mdc` | Repository structure standards | NeuroNarnia/AwayTomate |
| `testing-standards.mdc` | Testing requirements | NeuroNarnia/AwayTomate |

#### `.specify/templates/` (4 files)

| File | Purpose |
|------|---------|
| `plan-template.md` | Initiative planning template |
| `spec-template.md` | Specification template |
| `tasks-template.md` | Task breakdown template |
| `agent-file-template.md` | Template for creating new agent files |

### 1.4 `docs/` Directory Structure

#### `docs/agents/` (26+ files)

**Core Agent Infrastructure Files:**
- `agent-capability-assessment.md`
- `agent-capability-test.md`
- `agent-communication.md`
- `agent-memory-template.md`
- `agent-personality-template.md`
- `index.md` (agent roster)

**Specialised Agent Files:**
- `ai-engineer.md`
- `api-tester.md`
- `backend-architect.md`
- `brand-guardian.md`
- `code-refactorer.md`
- `devops-automator.md`
- `frontend-designer.md`
- `frontend-developer.md`
- `legal-compliance-checker.md`
- `mobile-app-builder.md`
- `performance-benchmarker.md`
- `project-shipper.md`
- `project-task-planner.md`
- `rapid-prototyper.md`
- `security-auditor.md`
- `studio-coach.md`
- `test-results-analyzer.md`
- `test-writer-fixer.md`
- `ui-designer.md`

**Note:** All agent files need Pan-generic versions with project placeholders.

#### `docs/` Diátaxis Structure

```
docs/
  getting-started/
    quickstart.md (template)
  how-to/
    (project-specific guides)
  reference/
    glossary.md (template)
  explanation/
    architecture.md (template)
  ops/
    governance.md (template)
    change-log.md (template structure)
  meta/
    metadata-manifest.json (template with example topics/initiatives)
  adr/
    TEMPLATE.md (ADR template)
  analysis/
    (project-specific analysis documents)
```

### 1.5 `.github/` Directory Structure

#### `.github/workflows/` (Minimum 5 workflows)

| Workflow | Purpose | Source |
|----------|---------|--------|
| `markdown-lint.yml` | Markdown linting on PRs | NeuroNarnia |
| `spell-check.yml` | Spell checking on PRs | NeuroNarnia |
| `link-check.yml` | Link validation on PRs | NeuroNarnia |
| `docs-validation.yml` | YAML front matter and docs structure validation | NeuroNarnia |
| `tests.yml` | Test execution (if applicable) | NeuroNarnia (optional) |

#### `.github/ISSUE_TEMPLATE/`

| Template | Purpose | Source |
|----------|---------|--------|
| `bug.yml` | Bug report template | NeuroNarnia |
| `feature.yml` | Feature request template | NeuroNarnia |
| `docs_update.md` | Documentation update template | AwayTomate |
| `track.yaml` | Initiative tracking template | NeuroNarnia |
| `config.yml` | Issue template configuration | AwayTomate |

#### Other `.github/` Files

| File | Purpose |
|------|---------|
| `pull_request_template.md` | PR template with constitutional compliance checklist |
| `CODEOWNERS` | Code ownership (optional) |

### 1.6 `scripts/` Directory (Automation)

| Script | Purpose | Source |
|--------|---------|--------|
| `add-yaml-frontmatter-v2.js` | Add/update YAML front matter | NeuroNarnia |
| `generate-docs-index-v2.js` | Generate documentation index | NeuroNarnia |
| `create-doc-template.js` | Create new documentation files | NeuroNarnia |
| `check-links.js` | Local link checking | NeuroNarnia |
| `setup.sh` | **NEW:** Bootstrap script for new projects | **To be created** |
| `utils/frontmatter.js` | Front matter utilities | NeuroNarnia |

---

## Part 2: Critical Observations

### 2.1 The `.specify/rules/*.mdc` Files are Project-Specific

The current `.mdc` files in both NeuroNarnia and AwayTomate contain **project-specific references**. For example, `orchestrator-startup.mdc` in AwayTomate references "NeuroNarnia" in the header and contains NeuroNarnia-specific file paths.

**Action Required:** Create Pan-generic versions of all `.mdc` files with placeholders like `{{PROJECT_NAME}}`.

### 2.2 Agent Files Must Be Generic

All 26 agent files need to be reviewed and converted to generic templates. They currently contain:
- Project-specific examples
- References to specific technologies (which may not apply to all projects)
- Project-specific workflows

**Action Required:** Create generic versions that describe agent **roles and responsibilities** without assuming specific tech stacks.

### 2.3 Automation Scripts Need Dependencies

The automation scripts require Node.js and specific npm packages. The template must include:
- `package.json` with all required dependencies
- Clear setup instructions in README
- Scripts that work out-of-the-box

### 2.4 Configuration Files Need Customisation Guidance

Files like `.cspell.json` contain project-specific dictionaries. The template should include:
- A **base dictionary** with common technical terms
- **Placeholder sections** for project-specific terms
- **Comments** explaining what to customise

---

## Part 3: Recommended Two-Repository Architecture

### Repository 1: `pan-constitution-dev`

**Purpose:** Development of the Pan Constitution itself.

**Content:** Pan-specific files, development history, governance discussions.

**Audience:** Pan Governance Team.

### Repository 2: `pan-constitution-template`

**Purpose:** Clean, production-ready template for new projects.

**Content:** All files listed in Part 1, with placeholders and generic content.

**Audience:** Teams starting new AI-agent-built projects.

**GitHub Feature:** Marked as a template repository.

---

## Part 4: Template Content Strategy

### 4.1 Placeholder Syntax

Use `{{PLACEHOLDER_NAME}}` for values that must be replaced:

- `{{PROJECT_NAME}}` - Project name
- `{{PROJECT_DESCRIPTION}}` - One-line project description
- `{{PROJECT_TEAM}}` - Team name
- `{{GITHUB_REPO_URL}}` - GitHub repository URL
- `{{GITHUB_ORG}}` - GitHub organisation
- `{{CREATION_DATE}}` - Project creation date
- `{{INITIAL_INITIATIVE}}` - First initiative name

### 4.2 Customisation Markers

Use comments to indicate sections that need customisation:

```markdown
<!-- CUSTOMISE: Add your project-specific goals here -->
- Goal 1
- Goal 2
```

### 4.3 Example Files

Include example content where helpful:

```yaml
# Example topics - replace with your project's topics
topics:
  - architecture
  - documentation
  - testing
```

---

## Part 5: The `setup.sh` Bootstrap Script

### 5.1 Script Responsibilities

The bootstrap script must:

1. **Gather project information** via interactive prompts
2. **Replace all placeholders** in files
3. **Customise configuration files** (e.g., add project name to .cspell.json)
4. **Install npm dependencies** (`npm install`)
5. **Initialise git repository** (optional)
6. **Create initial branch** (optional)
7. **Display next steps** to the user

### 5.2 Draft Script Structure

```bash
#!/bin/bash
set -e

echo "=== Pan Constitution Project Setup ==="
echo ""

# Gather information
read -p "Project Name: " PROJECT_NAME
read -p "Project Description: " PROJECT_DESCRIPTION
read -p "Project Team: " PROJECT_TEAM
read -p "GitHub Organisation: " GITHUB_ORG
read -p "Initial Initiative Name (e.g., 'project-setup'): " INITIAL_INITIATIVE

# Calculate derived values
GITHUB_REPO_URL="https://github.com/${GITHUB_ORG}/${PROJECT_NAME}"
CREATION_DATE=$(date +%Y-%m-%d)

# Replace placeholders in all files
echo "Configuring project files..."
find . -type f \( -name "*.md" -o -name "*.yml" -o -name "*.yaml" -o -name "*.json" -o -name "*.mdc" \) \
  -exec sed -i.bak \
    -e "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" \
    -e "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" \
    -e "s/{{PROJECT_TEAM}}/$PROJECT_TEAM/g" \
    -e "s/{{GITHUB_REPO_URL}}/$GITHUB_REPO_URL/g" \
    -e "s/{{GITHUB_ORG}}/$GITHUB_ORG/g" \
    -e "s/{{CREATION_DATE}}/$CREATION_DATE/g" \
    -e "s/{{INITIAL_INITIATIVE}}/$INITIAL_INITIATIVE/g" \
    {} +

# Clean up backup files
find . -name "*.bak" -delete

# Install dependencies
echo "Installing dependencies..."
npm install

echo ""
echo "✅ Project '$PROJECT_NAME' configured successfully!"
echo ""
echo "Next steps:"
echo "1. Review and customise .specify/memory/constitution.md"
echo "2. Update docs/meta/metadata-manifest.json with your topics and initiatives"
echo "3. Customise .cspell.json with project-specific terms"
echo "4. Review docs/agents/ and remove any agent files you don't need"
echo "5. Run 'npm run docs:frontmatter:dry' to validate YAML front matter"
echo "6. Run 'npm run docs:index' to generate documentation index"
echo "7. Initialise git: git init && git add . && git commit -m 'Initial commit'"
```

---

## Part 6: Implementation Roadmap

### Phase 1: Inventory and Extraction (Week 1)

1. **Extract all files** from NeuroNarnia and AwayTomate that belong in the template
2. **Create inventory spreadsheet** tracking:
   - File path
   - Source repository
   - Customisation required (Yes/No)
   - Placeholders needed
   - Status (Not started / In progress / Complete)

### Phase 2: Content Transformation (Weeks 2-3)

1. **Create generic versions** of all agent files
2. **Create generic versions** of all `.mdc` rule files
3. **Transform README.md and AGENTS.md** to project-centric templates
4. **Create template constitution.md** with Pan inheritance structure
5. **Create metadata-manifest.json** template with examples

### Phase 3: Automation and Scripts (Week 4)

1. **Create `setup.sh`** bootstrap script
2. **Test bootstrap script** on clean directory
3. **Create `package.json`** with all required scripts
4. **Document all npm scripts** in README

### Phase 4: Documentation and Testing (Week 5)

1. **Write comprehensive README** for template repository
2. **Create USAGE.md** with step-by-step setup guide
3. **Test template** by creating 2-3 sample projects
4. **Gather feedback** and refine

### Phase 5: Publication (Week 6)

1. **Create `pan-constitution-template` repository**
2. **Enable GitHub template feature**
3. **Tag version 1.0.0**
4. **Announce to NeuroNarnia and AwayTomate teams**

---

## Part 7: Key Decisions Required

### 7.1 Agent File Inclusion

**Question:** Should all 26 agent files be included in the template, or should projects select which ones they need?

**Recommendation:** Include all 26 files in the template, with guidance in README on which are essential vs. optional. Projects can delete unused files.

**Rationale:** Easier to delete than to discover and add later. Provides complete "agent roster" reference.

### 7.2 Technology-Specific Content

**Question:** How should we handle technology-specific content in agent files (e.g., references to React, PostgreSQL)?

**Recommendation:** Use **conditional sections** with clear markers:

```markdown
<!-- IF USING: React Native -->
## React Native Specific Guidelines
...
<!-- END IF -->
```

**Rationale:** Provides useful examples without forcing adoption.

### 7.3 Workflow Complexity

**Question:** Should the template include all 5+ GitHub workflows, or start minimal?

**Recommendation:** Include all workflows but mark some as **optional** in README.

**Essential workflows:**
- `markdown-lint.yml`
- `spell-check.yml`
- `docs-validation.yml`

**Optional workflows:**
- `link-check.yml` (can be slow on large repos)
- `tests.yml` (only if project has code)

### 7.4 Configuration File Customisation

**Question:** How much pre-configuration should be in files like `.cspell.json`?

**Recommendation:** Provide a **base configuration** with common terms, plus clear **customisation sections**:

```json
{
  "words": [
    // === Pan Constitution Base Dictionary ===
    "frontmatter",
    "Diátaxis",
    "YAML",
    
    // === PROJECT-SPECIFIC TERMS ===
    // Add your project-specific terms below:
    "{{PROJECT_NAME}}"
  ]
}
```

---

## Part 8: Summary of Recommendations

### Immediate Actions

1. **Create `pan-constitution-template` repository** as separate from `pan-constitution-dev`
2. **Extract and inventory** all 100+ files that belong in the template
3. **Transform content** to use placeholders and project-centric language
4. **Create `setup.sh`** bootstrap script
5. **Test thoroughly** with sample projects

### Template Repository Contents (Complete List)

**Root Files (15+):**
- Configuration files (.markdownlint.yml, .cspell.json, etc.)
- Core documentation (README.md, AGENTS.md, CONTRIBUTING.md, etc.)
- Package management (package.json, package-lock.json)

**`.specify/` (12+ files):**
- constitution.md
- 6 `.mdc` rule files
- 4 template files

**`docs/` (40+ files):**
- 26 agent files
- Diátaxis structure directories
- metadata-manifest.json
- ADR template

**`.github/` (10+ files):**
- 5+ workflow files
- 5+ issue templates
- PR template
- CODEOWNERS (optional)

**`scripts/` (6+ files):**
- Automation scripts
- Bootstrap script
- Utility modules

**Total:** Approximately **100+ files** in the template repository.

### Success Criteria

A successful template repository will:

1. **Enable new projects to start in < 30 minutes** using the bootstrap script
2. **Pass all CI checks** immediately after setup
3. **Provide clear guidance** on what to customise
4. **Include all infrastructure** needed for AI-agent-driven development
5. **Be maintainable** with clear update procedures

---

## Conclusion

The Pan Constitution template repository must be comprehensive, production-ready, and thoroughly tested. It is not simply a matter of copying a few documentation files—it requires extracting, transforming, and testing over 100 files from mature projects like NeuroNarnia and AwayTomate.

The two-repository architecture (dev + template) is the cleanest approach, following GitHub best practices and providing clear separation of concerns. The bootstrap script will make adoption straightforward, and comprehensive documentation will ensure projects can customise the template to their needs.

This is a significant undertaking, but the result will be a robust foundation for all future AI-agent-built projects in the Pan ecosystem.

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

