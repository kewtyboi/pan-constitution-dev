---
topic: reference
name: Pan Constitution Template Repository - Scaffolding Structure v2
author: Manus AI
version: 2.0.0
date: 2025-10-14
description: Complete file and folder structure for the pan-constitution-template repository (revised with feedback)
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

# Pan Constitution Template Repository: Scaffolding Structure v2

**Initiative:** pan-governance-foundation  
**Related Issues:** #5, #8  
**Date:** 2025-10-14  
**Version:** 2.0.0 (Revised with feedback)

## Overview

This document defines the complete file and folder structure for the `pan-constitution-template` repository. This structure follows the Pan Constitution's universal file structure requirements, incorporates feedback on agent organisation, and uses alphabetical ordering matching filesystem display.

---

## Complete Directory Tree (Alphabetical)

```
pan-constitution-template/
│
├── .agent/
│   ├── agent-hub/
│   │   └── agent-communication.md
│   │
│   ├── agent-onboarding/
│   │   └── (onboarding documents, configurations, templates)
│   │
│   ├── agent-prompt/
│   │   ├── -cleanup.md
│   │   ├── -start.md
│   │   └── -willow-wizard.md
│   │
│   ├── agent-role-profiles/
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
│   └── AGENTS.md
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.yml
│   │   ├── config.yml
│   │   ├── docs-update.md
│   │   ├── epic.yml
│   │   ├── feature.yml
│   │   └── track.yaml
│   │
│   ├── workflows/
│   │   ├── docs-validation.yml
│   │   ├── link-check.yml
│   │   ├── markdown-lint.yml
│   │   ├── spell-check.yml
│   │   └── tests.yml
│   │
│   └── pull_request_template.md
│
├── .specify/
│   ├── memory/
│   │   └── constitution.md
│   │
│   ├── rules/
│   │   ├── ai-agent-compliance.mdc
│   │   ├── initiative-tracking.mdc
│   │   ├── orchestrator-startup.mdc
│   │   ├── privacy-security.mdc
│   │   ├── project-structure.mdc
│   │   └── testing-standards.mdc
│   │
│   └── templates/
│       ├── agent-file-template.md
│       ├── plan-template.md
│       ├── spec-template.md
│       └── tasks-template.md
│
├── docs/
│   ├── decisions/
│   │   ├── adr/
│   │   │   ├── TEMPLATE.md
│   │   │   └── README.md
│   │   │
│   │   └── bdr/
│   │       ├── TEMPLATE.md
│   │       └── README.md
│   │
│   ├── explanation/
│   │   ├── AGENTS.md
│   │   ├── README.md
│   │   └── architecture.md
│   │
│   ├── getting-started/
│   │   ├── AGENTS.md
│   │   ├── README.md
│   │   └── quickstart.md
│   │
│   ├── how-to/
│   │   ├── AGENTS.md
│   │   ├── README.md
│   │   ├── git-workflow-and-commit-standards.md
│   │   └── write-ai-optimised-documentation.md
│   │
│   ├── meta/
│   │   └── metadata-manifest.json
│   │
│   ├── ops/
│   │   └── governance.md
│   │
│   ├── reference/
│   │   ├── AGENTS.md
│   │   ├── README.md
│   │   └── glossary.md
│   │
│   └── INDEX.md
│
├── scripts/
│   ├── utils/
│   │   └── frontmatter.js
│   │
│   ├── add-yaml-frontmatter-v2.js
│   ├── check-links.js
│   ├── create-doc-template.js
│   ├── generate-docs-index-v2.js
│   ├── setup.sh
│   └── watch-ide-folders.js
│
├── .cspell.json
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .markdown-link-check.json
├── .markdownlint.yml
├── .prettierrc.yml
│
├── AGENTS.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CUSTOMISATION.md
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── USAGE.md
```

---

## File Count Summary

| Category | Count | Notes |
|----------|-------|-------|
| **Root configuration files** | 7 | .gitignore, .markdownlint.yml, .cspell.json, etc. |
| **Root documentation files** | 7 | README, AGENTS, CONTRIBUTING, CHANGELOG, etc. |
| **Package files** | 2 | package.json, package-lock.json |
| **.agent/** | 26+ | AGENTS.md, agent-hub, agent-onboarding, agent-prompt (3), agent-role-profiles (19) |
| **.github/ workflows** | 5 | CI/CD automation |
| **.github/ issue templates** | 6 | Bug, feature, docs, epic, track, config |
| **.github/ other** | 1 | PR template only |
| **.specify/memory/** | 1 | constitution.md |
| **.specify/rules/** | 6 | .mdc orchestrator rule files |
| **.specify/templates/** | 4 | Planning and spec templates |
| **docs/decisions/** | 4 | ADR and BDR templates + READMEs |
| **docs/explanation/** | 3 | AGENTS.md, README.md, architecture.md |
| **docs/getting-started/** | 3 | AGENTS.md, README.md, quickstart.md |
| **docs/how-to/** | 4 | AGENTS.md, README.md, 2 guides |
| **docs/meta/** | 1 | metadata-manifest.json |
| **docs/ops/** | 1 | governance.md |
| **docs/reference/** | 3 | AGENTS.md, README.md, glossary.md |
| **docs/** | 1 | INDEX.md |
| **scripts/** | 7 | Automation scripts + utils + watch script |
| **TOTAL** | **~92 files** | Minimum viable template |

---

## Key Changes from v1

### 1. Agent Organisation
- **Moved** all agent files from `docs/agents/` to `.agent/agent-role-profiles/`
- **Created** `.agent/` as top-level directory for all agent-related content
- **Added** `.agent/AGENTS.md` for folder-level agent instructions
- **Added** `.agent/agent-prompt/` for custom prompts (copied from NeuroNarnia `.cursor/commands/`)
- **Added** `.agent/agent-hub/` for communication records
- **Added** `.agent/agent-onboarding/` for onboarding system

### 2. Custom Prompts System
- **Added** `.agent/agent-prompt/` with 3 initial prompts:
  - `-start.md` (copied from NeuroNarnia)
  - `-willow-wizard.md` (copied from NeuroNarnia)
  - `-cleanup.md` (copied from NeuroNarnia)
- **Added** `scripts/watch-ide-folders.js` to monitor for `.cursor/` or `.codex/` folder creation and auto-copy prompts

### 3. Decision Records
- **Renamed** `docs/adr/` to `docs/decisions/adr/` (Architectural Decision Records)
- **Added** `docs/decisions/bdr/` (Business Decision Records)
- **Added** templates for both ADR and BDR

### 4. Issue Templates
- **Removed** `CODEOWNERS`
- **Updated** issue templates to follow conventional standards:
  - `bug.yml`
  - `feature.yml`
  - `docs-update.md`
  - `epic.yml` (NEW)
  - `track.yaml` (initiative tracking)
  - `config.yml`

### 5. Change Log Location
- **Kept** `CHANGELOG.md` at root (standard convention)
- **Removed** `docs/ops/change-log.md`
- **Kept** `docs/ops/governance.md` for governance-specific operations

### 6. Documentation Index
- **Added** `docs/INDEX.md` at docs root
- **Kept** `scripts/generate-docs-index-v2.js` to maintain it

### 7. AGENTS.md and README.md Strategy
- **Root** `AGENTS.md` - Master file for entire project
- **Folder-level** `AGENTS.md` - Only in folders where agents need specific guidance:
  - `docs/getting-started/AGENTS.md`
  - `docs/how-to/AGENTS.md`
  - `docs/reference/AGENTS.md`
  - `docs/explanation/AGENTS.md`
- **Folder-level** `README.md` - Only where humans need orientation:
  - `docs/getting-started/README.md`
  - `docs/how-to/README.md`
  - `docs/reference/README.md`
  - `docs/explanation/README.md`
  - `docs/decisions/adr/README.md`
  - `docs/decisions/bdr/README.md`

### 8. Alphabetical Ordering
- **All** directory listings now alphabetical to match filesystem display

### 9. How-To Guides
- **Added** `docs/how-to/git-workflow-and-commit-standards.md` (Conventional Commits)
- **Added** `docs/how-to/write-ai-optimised-documentation.md`

---

## Detailed File Descriptions

### `.agent/` Directory

#### `.agent/AGENTS.md`
```markdown
---
topic: agent-coordination
name: Agent Directory - Folder Level Instructions
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Instructions for AI agents working within the .agent directory
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# .agent Directory - Agent Instructions

This directory contains all agent-related files for {{PROJECT_NAME}}.

## Directory Structure

- **agent-hub/** - Communication records between agents
- **agent-onboarding/** - Onboarding system documents and configurations
- **agent-prompt/** - Custom prompts available to all agents
- **agent-role-profiles/** - Pre-configured role profiles for agent hiring

## Custom Prompts

Custom prompts in `agent-prompt/` are automatically copied to:
- `.cursor/commands/` when Cursor IDE is detected
- `.codex/prompts/` when Codex IDE is detected

This is handled by `scripts/watch-ide-folders.js`.

## Agent Role Profiles

The `agent-role-profiles/` directory contains 19 pre-configured agent profiles used by the HR agent when hiring for specific roles. Each profile defines:
- Role responsibilities
- Required capabilities
- Communication patterns
- Delegation rules
```

#### `.agent/agent-prompt/-start.md`
```markdown
# Start Command

Quick start command for beginning work on {{PROJECT_NAME}}.

## Usage

This prompt helps agents quickly orient to the project and begin work.

## Steps

1. Read AGENTS.md at root
2. Read .specify/memory/constitution.md
3. Check current branch and repo state
4. Review open issues and PRs
5. Confirm task context with user

(Full content copied from NeuroNarnia/.cursor/commands/-start.md)
```

#### `.agent/agent-hub/agent-communication.md`
```markdown
---
topic: agent-coordination
name: Agent Communication Log
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Communication records between agents
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# Agent Communication Log

This file records significant communications between agents for traceability and coordination.

## Format

Each entry should include:
- Date and time
- Agents involved
- Topic/context
- Key decisions or handoffs
- Related issues

---

## Communication Records

(Records will be added here as agents communicate)
```

#### `.agent/agent-role-profiles/ai-engineer.md`
```markdown
---
topic: agent-role-profile
name: AI Engineer Role Profile
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Pre-configured profile for AI Engineer agent role
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# AI Engineer Role Profile

## Role Overview

The AI Engineer agent specialises in...

## Responsibilities

- Design and implement AI/ML features
- Integrate AI models and APIs
- Optimise model performance
- Ensure ethical AI practices

## Required Capabilities

- Machine learning fundamentals
- API integration
- Performance optimisation
- Ethical AI awareness

## Communication Patterns

- Reports to: Technical Lead
- Collaborates with: Backend Architect, Data Scientist
- Delegates to: Test Writer Fixer

(Full generic content to be developed)
```

---

### `.github/` Directory

#### `.github/ISSUE_TEMPLATE/epic.yml`
```yaml
name: Epic
description: Create an epic to track a large body of work
labels: ["epic"]
body:
  - type: textarea
    id: goal
    attributes:
      label: Goal
      description: What is the overall goal of this epic?
    validations:
      required: true
  
  - type: textarea
    id: scope
    attributes:
      label: Scope
      description: What is included in this epic?
    validations:
      required: true
  
  - type: textarea
    id: success-criteria
    attributes:
      label: Success Criteria
      description: How will we know this epic is complete?
    validations:
      required: true
  
  - type: textarea
    id: stories
    attributes:
      label: Stories
      description: List of stories/issues that make up this epic
    validations:
      required: false
```

---

### `docs/` Directory

#### `docs/INDEX.md`
```markdown
---
topic: documentation-index
name: Documentation Index
author: Auto-generated
version: 1.0.0
date: {{CREATION_DATE}}
description: Auto-generated index of all documentation
initiative: {{INITIAL_INITIATIVE}}
status: active
---

# Documentation Index

This index is automatically generated by `scripts/generate-docs-index-v2.js`.

## By Topic

(Auto-generated content)

## By Initiative

(Auto-generated content)

---

**Last Updated:** (Auto-generated timestamp)
```

#### `docs/decisions/adr/TEMPLATE.md`
```markdown
---
topic: architecture-decision
name: ADR-XXX - [Title]
author: [Author]
version: 1.0.0
date: YYYY-MM-DD
description: [Brief description]
initiative: [initiative-name]
status: [proposed|accepted|deprecated|superseded]
tags:
  - adr
  - architecture
---

# ADR-XXX: [Title]

## Status

[Proposed | Accepted | Deprecated | Superseded by ADR-YYY]

## Context

What is the issue we're addressing? What factors are influencing this decision?

## Decision

What is the change we're proposing? What will we do?

## Consequences

What becomes easier or harder as a result of this decision?

### Positive

- Benefit 1
- Benefit 2

### Negative

- Trade-off 1
- Trade-off 2

### Neutral

- Consideration 1
- Consideration 2

## Alternatives Considered

What other options did we evaluate?

1. **Alternative 1**: Description and why it was rejected
2. **Alternative 2**: Description and why it was rejected

## References

- Link to related ADRs
- Link to related issues
- Link to external resources
```

#### `docs/decisions/bdr/TEMPLATE.md`
```markdown
---
topic: business-decision
name: BDR-XXX - [Title]
author: [Author]
version: 1.0.0
date: YYYY-MM-DD
description: [Brief description]
initiative: [initiative-name]
status: [proposed|accepted|deprecated|superseded]
tags:
  - bdr
  - business
---

# BDR-XXX: [Title]

## Status

[Proposed | Accepted | Deprecated | Superseded by BDR-YYY]

## Context

What business problem or opportunity are we addressing?

## Decision

What business decision have we made?

## Rationale

Why did we make this decision? What business value does it provide?

## Impact

### Business Impact

- Revenue impact
- Cost impact
- Customer impact
- Market impact

### Operational Impact

- Process changes
- Resource requirements
- Timeline implications

## Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Risk 1 | High/Med/Low | High/Med/Low | Mitigation strategy |

## Success Metrics

How will we measure the success of this decision?

- Metric 1: Target value
- Metric 2: Target value

## References

- Link to related BDRs
- Link to market research
- Link to financial analysis
```

#### `docs/how-to/git-workflow-and-commit-standards.md`
```markdown
---
topic: how-to
name: Git Workflow and Commit Standards
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Guide to git workflow and Conventional Commits specification
initiative: {{INITIAL_INITIATIVE}}
status: active
tags:
  - git
  - workflow
  - conventional-commits
---

# Git Workflow and Commit Standards

## Branch Naming Convention

Format: `[type]/[initiative]-[issue]-[slug]`

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `test` - Test additions or modifications
- `refactor` - Code refactoring
- `chore` - Maintenance tasks
- `ops` - Operational/infrastructure changes

**Example:**
```
feat/project-setup-12-user-authentication
```

## Conventional Commits

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Examples

**Feature:**
```
feat(auth): add JWT token validation

Implement JWT token validation middleware for API routes.
Includes token expiry checking and signature verification.

Closes #42
```

**Bug Fix:**
```
fix(api): resolve null pointer in user lookup

Handle case where user ID is not found in database.
Return 404 instead of 500 error.

Fixes #38
```

**Documentation:**
```
docs(readme): update installation instructions

Add prerequisites section and troubleshooting guide.

Relates to #15
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code restructuring without behaviour change
- `test` - Adding or updating tests
- `chore` - Maintenance, dependencies, tooling
- `perf` - Performance improvements
- `ci` - CI/CD changes
- `build` - Build system changes
- `revert` - Revert previous commit

### Scope

Scope is optional but recommended. Use initiative name or component name.

Examples: `(auth)`, `(api)`, `(docs)`, `(project-setup)`

### Subject

- Use imperative mood: "add" not "added" or "adds"
- Don't capitalise first letter
- No period at the end
- Maximum 50 characters

### Body

- Optional but recommended for non-trivial changes
- Explain what and why, not how
- Wrap at 72 characters

### Footer

- Reference issues: `Closes #123`, `Fixes #456`, `Relates to #789`
- Note breaking changes: `BREAKING CHANGE: description`

## Pull Request Workflow

1. Create feature branch from `main`
2. Make commits following Conventional Commits
3. Push branch to origin
4. Create pull request
5. Link PR to issue(s)
6. Request review
7. Address feedback
8. Merge when approved and CI passes

## Commit Frequency

- Commit early and often
- Each commit should be a logical unit of work
- Commits should pass tests (if applicable)
- Use `git commit --amend` to fix up recent commits before pushing

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2)
```

#### `docs/how-to/write-ai-optimised-documentation.md`
```markdown
---
topic: how-to
name: Write AI-Optimised Documentation
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Guide to writing documentation that AI agents can effectively parse and use
initiative: {{INITIAL_INITIATIVE}}
status: active
tags:
  - documentation
  - ai-agents
  - best-practices
---

# Write AI-Optimised Documentation

## Principles

Documentation for AI-agent-built projects must be:

1. **Explicit** - No ambiguity, clear instructions
2. **Structured** - Consistent format and organisation
3. **Traceable** - Links to principles and decisions
4. **Actionable** - Clear next steps and outcomes
5. **Parseable** - Machine-readable metadata

## YAML Front Matter

All markdown files in `docs/` MUST include YAML front matter:

```yaml
---
topic: [topic-name]
name: [Document Title]
author: [Author Name]
version: [Semantic Version]
date: [YYYY-MM-DD]
description: [One-line description]
initiative: [initiative-name]
related_issues:
  - '#123'
  - '#456'
status: [active|archived|deprecated]
tags:
  - tag1
  - tag2
---
```

## Language Guidelines

### Use Imperative Mood

**Good:**
- "Create a new branch"
- "Run the tests"
- "Update the documentation"

**Bad:**
- "You should create a new branch"
- "The tests can be run"
- "Documentation needs updating"

### Use "Must" for Requirements

**Good:**
- "All PRs must link to an issue"
- "Tests must pass before merge"

**Bad:**
- "PRs should link to an issue"
- "It's recommended to run tests"

### Avoid Vague Language

**Good:**
- "Run `npm test` to execute the test suite"
- "Update `.cspell.json` with project-specific terms"

**Bad:**
- "Make sure tests work"
- "Fix the spelling configuration"

## Structure Guidelines

### Use Consistent Headings

- H1 (`#`) - Document title (once per file)
- H2 (`##`) - Major sections
- H3 (`###`) - Subsections
- H4 (`####`) - Detailed points

### Use Lists for Steps

**Sequential steps:**
```markdown
1. Clone the repository
2. Run `npm install`
3. Create a feature branch
4. Make your changes
```

**Non-sequential items:**
```markdown
- Configuration files
- Documentation files
- Test files
```

### Use Tables for Comparisons

```markdown
| Option | Pros | Cons |
|--------|------|------|
| Option A | Fast | Complex |
| Option B | Simple | Slow |
```

### Use Code Blocks with Language

```markdown
\`\`\`bash
npm install
\`\`\`

\`\`\`javascript
const result = calculate(input);
\`\`\`
```

## Linking and References

### Internal Links

Use relative paths:
```markdown
See [Git Workflow](./git-workflow-and-commit-standards.md) for details.
```

### External Links

Use full URLs with descriptive text:
```markdown
Follow the [Conventional Commits specification](https://www.conventionalcommits.org/).
```

### Issue References

Use GitHub issue syntax:
```markdown
Relates to #42
Closes #38
```

## AI-Specific Considerations

### Provide Context

AI agents need context to make decisions. Always explain:
- **Why** something exists
- **When** to use it
- **What** the expected outcome is

### Define Success Criteria

Be explicit about what "done" looks like:

**Good:**
```markdown
## Acceptance Criteria

- [ ] All tests pass
- [ ] Documentation updated
- [ ] PR approved by reviewer
- [ ] Change log updated
```

**Bad:**
```markdown
Make sure everything works before merging.
```

### Document Exceptions

If there are exceptions to rules, document them explicitly:

```markdown
## Rule: All functions must have tests

**Exception:** Utility functions under 5 lines may skip tests if they are trivial wrappers.
```

### Use Decision Records

For significant decisions, use ADRs or BDRs:
- Why the decision was made
- What alternatives were considered
- What the consequences are

## Validation

Use these scripts to validate documentation:

```bash
# Check YAML front matter
npm run docs:frontmatter:dry

# Generate index
npm run docs:index

# Check links
npm run docs:links

# Lint markdown
npm run lint:md

# Check spelling
npm run lint:spell
```

## Resources

- [Diátaxis Framework](https://diataxis.fr/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Pan Constitution](../../.specify/memory/constitution.md)
```

---

### `scripts/` Directory

#### `scripts/watch-ide-folders.js`
```javascript
#!/usr/bin/env node

/**
 * Watch for .cursor or .codex folder creation and auto-copy custom prompts
 * 
 * This script monitors the project root for the creation of:
 * - .cursor/ folder (Cursor IDE)
 * - .codex/ folder (Codex IDE)
 * 
 * When detected, it copies all files from .agent/agent-prompt/ to:
 * - .cursor/commands/ (for Cursor)
 * - .codex/prompts/ (for Codex)
 * 
 * This runs once per folder creation event.
 */

const fs = require('fs');
const path = require('path');
const { watch } = require('fs');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const AGENT_PROMPT_DIR = path.join(PROJECT_ROOT, '.agent', 'agent-prompt');

const IDE_CONFIGS = [
  { folder: '.cursor', targetSubdir: 'commands' },
  { folder: '.codex', targetSubdir: 'prompts' }
];

let processedFolders = new Set();

function copyPrompts(ideFolder, targetSubdir) {
  const idePath = path.join(PROJECT_ROOT, ideFolder);
  const targetPath = path.join(idePath, targetSubdir);

  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  // Copy all files from agent-prompt to target
  const files = fs.readdirSync(AGENT_PROMPT_DIR);
  let copiedCount = 0;

  files.forEach(file => {
    const sourcePath = path.join(AGENT_PROMPT_DIR, file);
    const destPath = path.join(targetPath, file);

    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      copiedCount++;
    }
  });

  console.log(`✅ Copied ${copiedCount} custom prompts to ${ideFolder}/${targetSubdir}/`);
  processedFolders.add(ideFolder);
}

function checkAndCopy() {
  IDE_CONFIGS.forEach(({ folder, targetSubdir }) => {
    const idePath = path.join(PROJECT_ROOT, folder);
    
    if (fs.existsSync(idePath) && !processedFolders.has(folder)) {
      console.log(`📁 Detected ${folder}/ folder`);
      copyPrompts(folder, targetSubdir);
    }
  });
}

// Check immediately on startup
checkAndCopy();

// Watch for folder creation
console.log('👀 Watching for .cursor/ or .codex/ folder creation...');
console.log('Press Ctrl+C to stop watching.');

const watcher = watch(PROJECT_ROOT, { recursive: false }, (eventType, filename) => {
  if (filename && IDE_CONFIGS.some(config => filename === config.folder)) {
    checkAndCopy();
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Stopping watch...');
  watcher.close();
  process.exit(0);
});
```

---

### Root Files

#### `CHANGELOG.md` (Root Location)
```markdown
# Changelog

All notable changes to {{PROJECT_NAME}} will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup from Pan Constitution template
- Complete file structure and scaffolding
- CI/CD workflows for documentation validation
- Agent coordination system

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [0.1.0] - {{CREATION_DATE}}

### Added
- Initial release
- Project bootstrapped from pan-constitution-template

---

[Unreleased]: https://github.com/{{GITHUB_ORG}}/{{PROJECT_NAME}}/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/{{GITHUB_ORG}}/{{PROJECT_NAME}}/releases/tag/v0.1.0
```

---

## Creation Order

### Phase 1: Root Structure (5 min)
1. Create root directory
2. Create `.gitignore`, `.gitattributes`, `.editorconfig`
3. Create `LICENSE`
4. Create `README.md` (minimal placeholder)

### Phase 2: Directory Structure (5 min)
5. Create all directories:
   ```bash
   mkdir -p .agent/{agent-hub,agent-onboarding,agent-prompt,agent-role-profiles}
   mkdir -p .github/{ISSUE_TEMPLATE,workflows}
   mkdir -p .specify/{memory,rules,templates}
   mkdir -p docs/{decisions/{adr,bdr},explanation,getting-started,how-to,meta,ops,reference}
   mkdir -p scripts/utils
   ```

### Phase 3: Configuration Files (10 min)
6. Create all configuration files:
   - `.markdownlint.yml`
   - `.cspell.json`
   - `.prettierrc.yml`
   - `.markdown-link-check.json`

### Phase 4: GitHub Infrastructure (15 min)
7. Create all `.github/` files:
   - Workflows (5 files)
   - Issue templates (6 files)
   - PR template

### Phase 5: .specify/ Files (20 min)
8. Create `.specify/memory/constitution.md`
9. Create all 6 `.specify/rules/*.mdc` files
10. Create all 4 `.specify/templates/*.md` files

### Phase 6: .agent/ Files (30 min)
11. Create `.agent/AGENTS.md`
12. Copy 3 prompt files from NeuroNarnia to `.agent/agent-prompt/`
13. Create `.agent/agent-hub/agent-communication.md`
14. Create all 19 agent role profiles in `.agent/agent-role-profiles/`

### Phase 7: docs/ Structure (20 min)
15. Create `docs/INDEX.md`
16. Create decision templates (ADR and BDR)
17. Create folder-level AGENTS.md and README.md where needed
18. Create `docs/meta/metadata-manifest.json`
19. Create how-to guides (git-workflow, ai-optimised-docs)

### Phase 8: Scripts (15 min)
20. Create `package.json`
21. Create all scripts in `scripts/`
22. Create `scripts/utils/frontmatter.js`
23. Create `scripts/watch-ide-folders.js`

### Phase 9: Root Documentation (20 min)
24. Create all root documentation files:
    - `README.md` (full version)
    - `AGENTS.md`
    - `CONTRIBUTING.md`
    - `CHANGELOG.md`
    - `USAGE.md`
    - `CUSTOMISATION.md`
    - `ARCHITECTURE.md`

### Phase 10: Finalisation (10 min)
25. Run `npm install` to generate `package-lock.json`
26. Validate all placeholders are present
27. Test `setup.sh` script
28. Enable GitHub template repository feature

**Total Estimated Time:** ~2.5 hours

---

## Validation Checklist

After scaffolding, verify:

- [ ] All directories created
- [ ] All configuration files present
- [ ] All `.github/` files present (workflows, issue templates, PR template)
- [ ] All `.specify/` files present (memory, rules, templates)
- [ ] All `.agent/` files present (AGENTS.md, hub, onboarding, prompts, role profiles)
- [ ] `docs/INDEX.md` created
- [ ] Decision templates (ADR and BDR) created
- [ ] How-to guides created (git-workflow, ai-optimised-docs)
- [ ] All scripts present
- [ ] `package.json` has all required scripts
- [ ] All placeholders use consistent syntax `{{PLACEHOLDER_NAME}}`
- [ ] All markdown files have YAML front matter
- [ ] `setup.sh` is executable (`chmod +x`)
- [ ] `watch-ide-folders.js` is executable (`chmod +x`)
- [ ] `CHANGELOG.md` at root (not in docs/ops/)
- [ ] No `CODEOWNERS` file

---

## Next Steps

After scaffolding is complete:

1. Enable GitHub template repository feature
2. Test `setup.sh` script on a clean clone
3. Test `watch-ide-folders.js` by creating `.cursor/` folder
4. Validate all workflows run successfully
5. Create test project from template
6. Document any issues or improvements needed

---

**Version:** 2.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

