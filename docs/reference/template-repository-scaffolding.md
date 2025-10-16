---
topic: reference
name: Pan Constitution Template Repository - Scaffolding Structure
author: Manus AI
version: 1.0.0
date: 2025-10-14
description: Complete file and folder structure for the pan-constitution-template repository from root
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#8'
status: active
tags:
  - template-repository
  - scaffolding
  - reference
  - file-structure
---

# Pan Constitution Template Repository: Scaffolding Structure

**Initiative:** pan-governance-foundation  
**Related Issues:** #5, #8  
**Date:** 2025-10-14

## Overview

This document defines the complete file and folder structure for the `pan-constitution-template` repository. This structure follows the Pan Constitution's universal file structure requirements and incorporates all infrastructure needed for AI-agent-built projects.

---

## Complete Directory Tree

```
pan-constitution-template/
│
├── .github/
│   ├── workflows/
│   │   ├── markdown-lint.yml
│   │   ├── spell-check.yml
│   │   ├── link-check.yml
│   │   ├── docs-validation.yml
│   │   └── tests.yml (optional)
│   │
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.yml
│   │   ├── feature.yml
│   │   ├── docs_update.md
│   │   ├── track.yaml
│   │   └── config.yml
│   │
│   ├── pull_request_template.md
│   └── CODEOWNERS (optional)
│
├── .specify/
│   ├── memory/
│   │   └── constitution.md
│   │
│   ├── rules/
│   │   ├── orchestrator-startup.mdc
│   │   ├── ai-agent-compliance.mdc
│   │   ├── initiative-tracking.mdc
│   │   ├── privacy-security.mdc
│   │   ├── project-structure.mdc
│   │   └── testing-standards.mdc
│   │
│   └── templates/
│       ├── plan-template.md
│       ├── spec-template.md
│       ├── tasks-template.md
│       └── agent-file-template.md
│
├── docs/
│   ├── agents/
│   │   ├── README.md
│   │   ├── index.md
│   │   │
│   │   ├── agent-capability-assessment.md
│   │   ├── agent-capability-test.md
│   │   ├── agent-communication.md
│   │   ├── agent-memory-template.md
│   │   ├── agent-personality-template.md
│   │   │
│   │   ├── ai-engineer.md
│   │   ├── api-tester.md
│   │   ├── backend-architect.md
│   │   ├── brand-guardian.md
│   │   ├── code-refactorer.md
│   │   ├── devops-automator.md
│   │   ├── frontend-designer.md
│   │   ├── frontend-developer.md
│   │   ├── legal-compliance-checker.md
│   │   ├── mobile-app-builder.md
│   │   ├── performance-benchmarker.md
│   │   ├── project-shipper.md
│   │   ├── project-task-planner.md
│   │   ├── rapid-prototyper.md
│   │   ├── security-auditor.md
│   │   ├── studio-coach.md
│   │   ├── test-results-analyzer.md
│   │   ├── test-writer-fixer.md
│   │   └── ui-designer.md
│   │
│   ├── getting-started/
│   │   ├── README.md
│   │   └── quickstart.md
│   │
│   ├── how-to/
│   │   ├── README.md
│   │   └── example-guide.md
│   │
│   ├── reference/
│   │   ├── README.md
│   │   └── glossary.md
│   │
│   ├── explanation/
│   │   ├── README.md
│   │   └── architecture.md
│   │
│   ├── analysis/
│   │   └── README.md
│   │
│   ├── ops/
│   │   ├── README.md
│   │   ├── governance.md
│   │   └── change-log.md
│   │
│   ├── meta/
│   │   └── metadata-manifest.json
│   │
│   └── adr/
│       ├── README.md
│       └── TEMPLATE.md
│
├── scripts/
│   ├── utils/
│   │   └── frontmatter.js
│   │
│   ├── setup.sh
│   ├── add-yaml-frontmatter-v2.js
│   ├── generate-docs-index-v2.js
│   ├── create-doc-template.js
│   └── check-links.js
│
├── .gitignore
├── .gitattributes
├── .editorconfig
├── .markdownlint.yml
├── .cspell.json
├── .prettierrc.yml
├── .markdown-link-check.json
│
├── package.json
├── package-lock.json
│
├── README.md
├── AGENTS.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md (optional)
├── SECURITY.md (optional)
├── LICENSE
│
├── USAGE.md
├── CUSTOMISATION.md
└── ARCHITECTURE.md
```

---

## File Count Summary

| Category | Count | Notes |
|----------|-------|-------|
| **Root configuration files** | 8 | .gitignore, .markdownlint.yml, .cspell.json, etc. |
| **Root documentation files** | 8 | README, AGENTS, CONTRIBUTING, CHANGELOG, USAGE, etc. |
| **Package files** | 2 | package.json, package-lock.json |
| **.github/ workflows** | 5 | CI/CD automation |
| **.github/ issue templates** | 5 | Bug, feature, docs, track, config |
| **.github/ other** | 2 | PR template, CODEOWNERS |
| **.specify/memory/** | 1 | constitution.md |
| **.specify/rules/** | 6 | .mdc orchestrator rule files |
| **.specify/templates/** | 4 | Planning and spec templates |
| **docs/agents/** | 26 | Agent files + README + index |
| **docs/getting-started/** | 2 | README + quickstart |
| **docs/how-to/** | 2 | README + example |
| **docs/reference/** | 2 | README + glossary |
| **docs/explanation/** | 2 | README + architecture |
| **docs/analysis/** | 1 | README |
| **docs/ops/** | 3 | README + governance + change-log |
| **docs/meta/** | 1 | metadata-manifest.json |
| **docs/adr/** | 2 | README + TEMPLATE |
| **scripts/** | 6 | Automation scripts + utils |
| **TOTAL** | **~95 files** | Minimum viable template |

---

## Detailed File Descriptions

### Root Configuration Files

#### `.gitignore`
```gitignore
# Dependencies
node_modules/
npm-debug.log*

# Environment
.env
.env.local

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Build outputs
dist/
build/
*.log

# Project-specific
# Add your project-specific ignores here
```

#### `.gitattributes`
```
* text=auto eol=lf
*.md text
*.yml text
*.yaml text
*.json text
*.js text
*.sh text eol=lf
```

#### `.editorconfig`
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = 120
trim_trailing_whitespace = false

[*.{yml,yaml,json}]
indent_style = space
indent_size = 2

[*.js]
indent_style = space
indent_size = 2
```

#### `.markdownlint.yml`
```yaml
# Markdownlint Configuration for {{PROJECT_NAME}}
default: true

MD013:
  line_length: 120
  tables: false
  headings: false

MD033:
  allowed_elements: ["br", "sub", "sup", "kbd", "details", "summary"]

MD041:
  front_matter_title: "^\\s*(title|name)\\s*[:=]"

MD044:
  names:
    - "{{PROJECT_NAME}}"
    - "GitHub"
    - "JavaScript"
    - "TypeScript"
    - "Node.js"
  code_blocks: false
```

#### `.cspell.json`
```json
{
  "version": "0.5",
  "language": "en-GB",
  "words": [
    "frontmatter",
    "Diátaxis",
    "YAML",
    "markdownlint",
    "cspell",
    "{{PROJECT_NAME}}"
  ]
}
```

#### `.prettierrc.yml`
```yaml
printWidth: 120
tabWidth: 2
useTabs: false
semi: true
singleQuote: true
trailingComma: es5
bracketSpacing: true
arrowParens: always
proseWrap: preserve
```

#### `.markdown-link-check.json`
```json
{
  "ignorePatterns": [
    {
      "pattern": "^http://localhost"
    }
  ],
  "timeout": "20s",
  "retryOn429": true,
  "retryCount": 3,
  "fallbackRetryDelay": "30s"
}
```

---

### Root Documentation Files

#### `README.md`
```markdown
---
topic: project-overview
name: {{PROJECT_NAME}}
author: {{PROJECT_TEAM}}
version: 0.1.0
date: {{CREATION_DATE}}
description: {{PROJECT_DESCRIPTION}}
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# {{PROJECT_NAME}}

**{{PROJECT_DESCRIPTION}}**

## Governance

This project is governed by the Pan Constitution v1.0.0...
```

#### `AGENTS.md`
```markdown
---
topic: agent-coordination
name: {{PROJECT_NAME}} - Repository Guidelines for AI Agents
author: {{PROJECT_TEAM}}
version: 0.1.0
date: {{CREATION_DATE}}
description: Agent coordination guidelines and mandatory procedures
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# Repository Guidelines for {{PROJECT_NAME}}

## Mandatory First Steps (AI Agents)
...
```

#### `CONTRIBUTING.md`
```markdown
# Contributing to {{PROJECT_NAME}}

Thank you for your interest in contributing...
```

#### `CHANGELOG.md`
```markdown
---
topic: operations
name: {{PROJECT_NAME}} Change Log
author: {{PROJECT_TEAM}}
version: 0.1.0
date: {{CREATION_DATE}}
description: Chronological record of changes
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# Change Log

## [Unreleased]

### Added
- Initial project setup from Pan Constitution template
```

#### `USAGE.md`
```markdown
# {{PROJECT_NAME}} - Usage Guide

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Review `.specify/memory/constitution.md`
...
```

#### `CUSTOMISATION.md`
```markdown
# Customisation Guide

## What to Customise

### Essential Customisations
1. `.specify/memory/constitution.md` - Add project-specific principles
2. `docs/meta/metadata-manifest.json` - Define your topics and initiatives
3. `.cspell.json` - Add project-specific terms
...
```

#### `ARCHITECTURE.md`
```markdown
# {{PROJECT_NAME}} - Architecture

## System Overview

{{PROJECT_NAME}} follows the Pan Constitution governance framework...
```

---

### `.github/` Directory

#### `.github/workflows/markdown-lint.yml`
```yaml
name: Markdown lint
on: [pull_request]
jobs:
  mdlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: DavidAnson/markdownlint-cli2-action@v18
        with:
          globs: "**/*.md"
```

#### `.github/workflows/spell-check.yml`
```yaml
name: Spell check
on: [pull_request]
jobs:
  spell:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: streetsidesoftware/cspell-action@v6
        with:
          files: "**/*.{md,mdx}"
```

#### `.github/workflows/link-check.yml`
```yaml
name: Link check
on: [pull_request]
jobs:
  links:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: lycheeverse/lychee-action@v2
        with:
          args: --no-progress --verbose .
```

#### `.github/workflows/docs-validation.yml`
```yaml
name: Documentation validation
on: [pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run docs:frontmatter:dry
```

#### `.github/ISSUE_TEMPLATE/bug.yml`
```yaml
name: Bug Report
description: Report a bug or issue
labels: ["bug"]
body:
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Clear description of the bug
    validations:
      required: true
```

#### `.github/ISSUE_TEMPLATE/feature.yml`
```yaml
name: Feature Request
description: Suggest a new feature
labels: ["enhancement"]
body:
  - type: textarea
    id: description
    attributes:
      label: Description
      description: What feature would you like?
    validations:
      required: true
```

#### `.github/ISSUE_TEMPLATE/track.yaml`
```yaml
name: Initiative Tracking
description: Track a new initiative
labels: ["initiative"]
body:
  - type: input
    id: initiative
    attributes:
      label: Initiative Name
      description: Kebab-case initiative name
    validations:
      required: true
```

#### `.github/pull_request_template.md`
```markdown
## Summary

Brief description of changes

## Changes

- Change 1
- Change 2

## Constitutional Compliance

- [ ] Enhanced YAML front matter added/updated
- [ ] Change log updated
- [ ] Initiative tracking correct
- [ ] Related issues documented
- [ ] Tests pass (if applicable)

## Related Issues

Closes #
```

---

### `.specify/` Directory

#### `.specify/memory/constitution.md`
```markdown
---
topic: governance-framework
name: {{PROJECT_NAME}} Constitution
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Governance principles for {{PROJECT_NAME}}
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# {{PROJECT_NAME}} Constitution

## Pan Principles (Inherited from Pan Constitution v1.0.0)

This project inherits the following universal principles...

## Project-Specific Principles

[Define your project-specific principles here]
```

#### `.specify/rules/orchestrator-startup.mdc`
```markdown
---
alwaysApply: true
description: {{PROJECT_NAME}} Orchestrator Agent startup protocol
---

# {{PROJECT_NAME}} Orchestrator Agent - Session Startup

You are the **Orchestrator Co-Driver** for the {{PROJECT_NAME}} project.

## 🚀 Start-Up Protocol (MANDATORY)
...
```

---

### `docs/` Directory Structure

#### `docs/agents/README.md`
```markdown
---
topic: agent-coordination
name: Agent Documentation Overview
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Overview of AI agent files and roles
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# Agent Documentation

This directory contains all agent role definitions...
```

#### `docs/getting-started/README.md`
```markdown
---
topic: getting-started
name: Getting Started Overview
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Introduction and quickstart guides
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# Getting Started

Welcome to {{PROJECT_NAME}}...
```

#### `docs/meta/metadata-manifest.json`
```json
{
  "topics": [
    "project-overview",
    "agent-coordination",
    "getting-started",
    "operations",
    "governance-framework"
  ],
  "initiatives": [
    "{{INITIAL_INITIATIVE}}"
  ],
  "statuses": [
    "active",
    "archived",
    "deprecated"
  ]
}
```

#### `docs/adr/TEMPLATE.md`
```markdown
---
topic: architecture-decision
name: ADR-XXX - [Title]
author: [Author]
version: 1.0.0
date: YYYY-MM-DD
description: [Brief description]
initiative: [initiative-name]
status: active
---

# ADR-XXX: [Title]

## Status

[Proposed | Accepted | Deprecated | Superseded]

## Context

[What is the issue we're addressing?]

## Decision

[What is the change we're proposing?]

## Consequences

[What becomes easier or harder as a result?]
```

---

### `scripts/` Directory

#### `scripts/setup.sh`
```bash
#!/bin/bash
set -e

echo "=== {{PROJECT_NAME}} Setup ==="
echo ""

# Interactive setup script
# (Full implementation in comprehensive analysis document)
```

#### `scripts/utils/frontmatter.js`
```javascript
/**
 * Front matter utilities for YAML processing
 */
const FIELD_ORDER = [
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

// Utility functions...
```

#### `package.json`
```json
{
  "name": "{{PROJECT_NAME}}",
  "version": "0.1.0",
  "description": "{{PROJECT_DESCRIPTION}}",
  "scripts": {
    "docs:frontmatter": "node scripts/add-yaml-frontmatter-v2.js",
    "docs:frontmatter:dry": "node scripts/add-yaml-frontmatter-v2.js --dry-run",
    "docs:index": "node scripts/generate-docs-index-v2.js",
    "docs:create": "node scripts/create-doc-template.js"
  },
  "devDependencies": {
    "gray-matter": "^4.0.3",
    "js-yaml": "^4.1.0"
  }
}
```

---

## Creation Order

When scaffolding the repository, create files in this order:

### Phase 1: Root Structure
1. Create root directory
2. Create `.gitignore`, `.gitattributes`, `.editorconfig`
3. Create `LICENSE`
4. Create `README.md` (minimal placeholder)

### Phase 2: Directory Structure
5. Create all directories:
   - `.github/workflows/`
   - `.github/ISSUE_TEMPLATE/`
   - `.specify/memory/`
   - `.specify/rules/`
   - `.specify/templates/`
   - `docs/agents/`
   - `docs/getting-started/`
   - `docs/how-to/`
   - `docs/reference/`
   - `docs/explanation/`
   - `docs/analysis/`
   - `docs/ops/`
   - `docs/meta/`
   - `docs/adr/`
   - `scripts/utils/`

### Phase 3: Configuration Files
6. Create all configuration files:
   - `.markdownlint.yml`
   - `.cspell.json`
   - `.prettierrc.yml`
   - `.markdown-link-check.json`

### Phase 4: GitHub Infrastructure
7. Create all `.github/` files:
   - Workflows (5 files)
   - Issue templates (5 files)
   - PR template
   - CODEOWNERS (optional)

### Phase 5: .specify/ Files
8. Create `.specify/memory/constitution.md`
9. Create all 6 `.specify/rules/*.mdc` files
10. Create all 4 `.specify/templates/*.md` files

### Phase 6: Documentation Structure
11. Create README.md in each `docs/` subdirectory
12. Create `docs/meta/metadata-manifest.json`
13. Create `docs/adr/TEMPLATE.md`

### Phase 7: Scripts
14. Create `package.json`
15. Create all scripts in `scripts/`
16. Create `scripts/utils/frontmatter.js`

### Phase 8: Root Documentation
17. Create all root documentation files:
    - `README.md` (full version)
    - `AGENTS.md`
    - `CONTRIBUTING.md`
    - `CHANGELOG.md`
    - `USAGE.md`
    - `CUSTOMISATION.md`
    - `ARCHITECTURE.md`

### Phase 9: Agent Files
18. Create all 26 agent files in `docs/agents/`
19. Create `docs/agents/index.md`

### Phase 10: Finalisation
20. Run `npm install` to generate `package-lock.json`
21. Validate all placeholders are present
22. Test `setup.sh` script

---

## Placeholder List

All files should use these placeholders where appropriate:

- `{{PROJECT_NAME}}` - Project name
- `{{PROJECT_DESCRIPTION}}` - One-line project description
- `{{PROJECT_TEAM}}` - Team name
- `{{GITHUB_REPO_URL}}` - Full GitHub repository URL
- `{{GITHUB_ORG}}` - GitHub organisation name
- `{{CREATION_DATE}}` - Project creation date (YYYY-MM-DD)
- `{{INITIAL_INITIATIVE}}` - First initiative name (e.g., "project-setup")

---

## Validation Checklist

After scaffolding, verify:

- [ ] All directories created
- [ ] All configuration files present
- [ ] All `.github/` files present
- [ ] All `.specify/` files present
- [ ] All `docs/` subdirectories have README.md
- [ ] All 26 agent files present
- [ ] All scripts present
- [ ] `package.json` has all required scripts
- [ ] All placeholders use consistent syntax
- [ ] All markdown files have YAML front matter
- [ ] `setup.sh` is executable (`chmod +x`)

---

## Next Steps

After scaffolding is complete:

1. Enable GitHub template repository feature
2. Test `setup.sh` script on a clean clone
3. Validate all workflows run successfully
4. Create test project from template
5. Document any issues or improvements needed

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

