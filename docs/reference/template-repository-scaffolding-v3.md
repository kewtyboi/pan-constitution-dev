---
topic: reference
name: Pan Constitution Template Repository - Scaffolding Structure v3
author: Manus AI
version: 3.0.0
date: 2025-10-14
description: Complete file and folder structure for the pan-constitution-template repository (revised with corrections)
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

# Pan Constitution Template Repository: Scaffolding Structure v3

**Initiative:** pan-governance-foundation  
**Related Issues:** #5, #8  
**Date:** 2025-10-14  
**Version:** 3.0.0 (Corrected)

## Overview

This document defines the complete file and folder structure for the `pan-constitution-template` repository. This structure follows the Pan Constitution's universal file structure requirements and uses alphabetical ordering matching filesystem display.

## Key Corrections in v3

1. **Agent onboarding files documented** - Added 5 onboarding files from NeuroNarnia
2. **INDEX.md moved to root** - Now at project root, not in docs/
3. **Removed architecture.md from explanation/** - No architecture doc needed beyond root ARCHITECTURE.md
4. **YAML front matter confirmed** - All documents have YAML at start, never markdown code blocks showing YAML

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
│   │   ├── agent-capability-assessment.md
│   │   ├── agent-capability-test.md
│   │   ├── agent-communication.md
│   │   ├── agent-memory-template.md
│   │   └── agent-personality-template.md
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
│   │   │   ├── README.md
│   │   │   └── TEMPLATE.md
│   │   │
│   │   └── bdr/
│   │       ├── README.md
│   │       └── TEMPLATE.md
│   │
│   ├── explanation/
│   │   ├── AGENTS.md
│   │   └── README.md
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
│   └── reference/
│       ├── AGENTS.md
│       ├── README.md
│       └── glossary.md
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
├── INDEX.md
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
| **Root documentation files** | 8 | README, AGENTS, CONTRIBUTING, CHANGELOG, INDEX, etc. |
| **Package files** | 2 | package.json, package-lock.json |
| **.agent/agent-onboarding/** | 5 | Capability assessment, test, communication, memory, personality |
| **.agent/agent-hub/** | 1 | Communication log |
| **.agent/agent-prompt/** | 3 | Custom prompts from NeuroNarnia |
| **.agent/agent-role-profiles/** | 19 | Pre-configured agent profiles |
| **.agent/** | 1 | AGENTS.md |
| **.github/ workflows** | 5 | CI/CD automation |
| **.github/ issue templates** | 6 | Bug, feature, docs, epic, track, config |
| **.github/ other** | 1 | PR template only |
| **.specify/memory/** | 1 | constitution.md |
| **.specify/rules/** | 6 | .mdc orchestrator rule files |
| **.specify/templates/** | 4 | Planning and spec templates |
| **docs/decisions/** | 4 | ADR and BDR templates + READMEs |
| **docs/explanation/** | 2 | AGENTS.md, README.md (NO architecture.md) |
| **docs/getting-started/** | 3 | AGENTS.md, README.md, quickstart.md |
| **docs/how-to/** | 4 | AGENTS.md, README.md, 2 guides |
| **docs/meta/** | 1 | metadata-manifest.json |
| **docs/ops/** | 1 | governance.md |
| **docs/reference/** | 3 | AGENTS.md, README.md, glossary.md |
| **scripts/** | 7 | Automation scripts + utils + watch script |
| **TOTAL** | **~95 files** | Minimum viable template |

---

## Agent Onboarding Files

The `.agent/agent-onboarding/` directory contains 5 essential files for agent onboarding and standardisation:

### 1. agent-capability-assessment.md

Framework for assessing agent capabilities across core categories:
- File System Access
- Code Analysis & Search
- Development & Automation
- AI & Collaboration
- Communication & Coordination

Used by HR agent and team leads to understand what each agent can do.

### 2. agent-capability-test.md

Quick test suite for agents to self-assess their available tools and capabilities. Includes tests for:
- File system operations
- Search and analysis
- Development tools
- Git operations
- Web search
- Cross-repository access

Agents run through this on first day to report capabilities.

### 3. agent-communication.md

**Note:** This file exists in TWO locations:
- `.agent/agent-hub/agent-communication.md` - Active communication log
- `.agent/agent-onboarding/agent-communication.md` - Template/guide for communication

The onboarding version provides:
- Communication protocols between agents
- Handoff procedures
- Escalation paths
- Documentation standards for agent-to-agent communication

### 4. agent-memory-template.md

Standardised template for agent memory system architecture. Defines:
- Memory architecture (libraries, vaults, profiles)
- Storage locations and formats
- Retrieval patterns
- Memory maintenance procedures

Used when setting up a new agent's memory system.

### 5. agent-personality-template.md

Standardised template for agent personality profiles. Includes:
- Core identity (age, appearance, background, motto)
- Personality traits
- Communication style
- Problem-solving approach
- Behavioral patterns
- Memory system preferences

Used when creating a new agent with distinct personality.

---

## INDEX.md Location: Root

**Decision:** `INDEX.md` is located at **project root**, not in `docs/`.

**Rationale:**
- Provides immediate visibility of all documentation
- Matches standard practice for project-level indexes
- Generated by `scripts/generate-docs-index-v2.js`
- Auto-updated when documentation changes

**Content:** Auto-generated index of all documentation organised by:
- Topic
- Initiative
- Status
- Recent updates

---

## YAML Front Matter: Best Practice Confirmed

**Confirmed Best Practice:** All documentation files MUST have YAML front matter at the start.

**Format:**
```
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
status: [active|archived|deprecated]
tags:
  - tag1
  - tag2
---

# Document Title

Content starts here...
```

**Never use markdown code blocks to show YAML front matter examples.** Instead:
- Reference the format in prose
- Link to template files
- Show examples in actual template files (like `TEMPLATE.md` in decisions/)

**From Pan Constitution:**
> "All documentation requires enhanced YAML front matter with `topic`, `initiative`, `related_issues`, `status`"

This is a **NON-NEGOTIABLE** requirement under Principle IV: Documentation-First Development.

---

## Detailed File Descriptions

### `.agent/agent-onboarding/` Files

#### `.agent/agent-onboarding/agent-capability-assessment.md`

```markdown
---
topic: agent-capabilities
name: Agent Capability Assessment Framework
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Comprehensive framework for assessing and enabling agent capabilities across the team
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - capabilities
  - assessment
  - standardization
  - agent-development
---

# Agent Capability Assessment Framework

## Purpose

This framework helps identify what capabilities each agent has and what they need to enable effective collaboration and cross-repository work.

## Core Capability Categories

### 1. File System Access
- [ ] Read Files - Can read any file in any repository
- [ ] Write Files - Can create new files
- [ ] Edit Files - Can modify existing files
- [ ] Delete Files - Can remove files
- [ ] Directory Navigation - Can browse folder structures
- [ ] File Search - Can find files by pattern or name

### 2. Code Analysis & Search
- [ ] Semantic Search - Can search for concepts and patterns
- [ ] Pattern Matching - Can use grep and regex
- [ ] Pull Request Access - Can read PR information
- [ ] Web Search - Can access real-time web information
- [ ] Code Analysis - Can understand and analyze code

### 3. Development & Automation
- [ ] Terminal Commands - Can execute shell commands
- [ ] Linting - Can check for code quality issues
- [ ] Task Management - Can track and manage tasks
- [ ] Git Operations - Can perform git commands
- [ ] Package Management - Can run npm/yarn commands

### 4. AI & Collaboration
- [ ] Memory Management - Can store and retrieve information
- [ ] Agent Communication - Can coordinate with other agents
- [ ] Context Awareness - Understands project context
- [ ] Learning - Can adapt based on feedback

## Assessment Process

1. New agent completes capability test suite
2. HR agent reviews results
3. Capabilities documented in agent profile
4. Training provided for missing critical capabilities
5. Regular reassessment (quarterly)

## Capability Matrix

Use this matrix to track team-wide capabilities:

| Agent | File System | Code Analysis | Development | AI & Collab |
|-------|-------------|---------------|-------------|-------------|
| Agent 1 | ✅ | ✅ | ✅ | ⚠️ |
| Agent 2 | ✅ | ⚠️ | ✅ | ✅ |

Legend: ✅ Full capability | ⚠️ Partial | ❌ Not available
```

#### `.agent/agent-onboarding/agent-capability-test.md`

```markdown
---
topic: agent-capability-test
name: Agent Capability Test Suite
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Quick test suite for agents to assess their available tools and capabilities
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - capabilities
  - testing
  - assessment
  - agent-development
---

# Agent Capability Test Suite

## Purpose

This test suite helps agents quickly assess what tools and capabilities they have available. Run through these tests and report back your results!

## Test Instructions

For each test:
1. Try the action - Attempt to perform the described task
2. Record the result - Note whether it worked or failed
3. Report back - Share your results with the team

## Test Suite

### Test 1: File System Access

#### Test 1a: Read Current Repository File
- **Action**: Try to read a file in your current repository
- **Example**: Read `README.md` or any existing file
- **Expected**: Should be able to read file contents
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### Test 1b: Write New File
- **Action**: Try to create a new file
- **Example**: Create a test file with some content
- **Expected**: Should be able to create and write to files
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### Test 1c: Edit Existing File
- **Action**: Try to modify an existing file
- **Example**: Add a comment or update content
- **Expected**: Should be able to edit file contents
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### Test 1d: Cross-Repository Access
- **Action**: Try to read a file from another repository
- **Example**: Read a file from another project repository
- **Expected**: Should be able to access files across repositories
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

### Test 2: Search & Analysis

#### Test 2a: Semantic Search
- **Action**: Try to search for concepts or patterns
- **Example**: Search for "documentation" or "formatting"
- **Expected**: Should find relevant content based on meaning
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### Test 2b: Pattern Matching
- **Action**: Try to search for specific text patterns
- **Example**: Search for files containing "README" or "package.json"
- **Expected**: Should find files matching the pattern
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### Test 2c: Web Search
- **Action**: Try to search the web for information
- **Example**: Search for "documentation best practices"
- **Expected**: Should return real-time web results
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

### Test 3: Development Tools

#### Test 3a: Terminal Commands
- **Action**: Try to execute a shell command
- **Example**: Run `ls` or `pwd`
- **Expected**: Should execute and return results
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### Test 3b: Git Operations
- **Action**: Try to check git status
- **Example**: Run `git status` or `git log`
- **Expected**: Should return git information
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

## Results Reporting

After completing all tests, create a summary:

**Agent Name**: [Your name]  
**Date**: [Test date]  
**Overall Capability Score**: [X/Y tests passed]

**Capabilities Summary**:
- File System: [Full/Partial/None]
- Search & Analysis: [Full/Partial/None]
- Development Tools: [Full/Partial/None]

**Notes**: [Any observations or limitations discovered]
```

#### `.agent/agent-onboarding/agent-memory-template.md`

See NeuroNarnia version for full template structure. Key sections:
- Core Philosophy
- Memory Architecture (multiple types)
- Storage Locations
- Format Specifications
- Retrieval Patterns
- Maintenance Procedures

#### `.agent/agent-onboarding/agent-personality-template.md`

See NeuroNarnia version for full template structure. Key sections:
- Core Identity
- Personality Traits
- Communication Style
- Problem-Solving Approach
- Behavioral Patterns
- Memory System Preferences

---

### Root Files

#### `INDEX.md` (Root Location)

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
tags:
  - index
  - documentation
  - auto-generated
---

# Documentation Index

This index is automatically generated by `scripts/generate-docs-index-v2.js`.

Last updated: [Auto-generated timestamp]

## By Topic

[Auto-generated content organised by topic]

## By Initiative

[Auto-generated content organised by initiative]

## By Status

### Active Documents
[List of active documents]

### Archived Documents
[List of archived documents]

## Recent Updates

[Last 10 updated documents]

---

To regenerate this index, run:

npm run docs:index
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

### Phase 6: .agent/ Files (40 min)
11. Create `.agent/AGENTS.md`
12. Copy 3 prompt files from NeuroNarnia to `.agent/agent-prompt/`
13. Create `.agent/agent-hub/agent-communication.md`
14. **Copy 5 onboarding files from NeuroNarnia to `.agent/agent-onboarding/`**:
    - agent-capability-assessment.md
    - agent-capability-test.md
    - agent-communication.md
    - agent-memory-template.md
    - agent-personality-template.md
15. Create all 19 agent role profiles in `.agent/agent-role-profiles/`

### Phase 7: docs/ Structure (20 min)
16. Create decision templates (ADR and BDR)
17. Create folder-level AGENTS.md and README.md where needed
18. Create `docs/meta/metadata-manifest.json`
19. Create how-to guides (git-workflow, ai-optimised-docs)
20. **Note:** No architecture.md in docs/explanation/

### Phase 8: Scripts (15 min)
21. Create `package.json`
22. Create all scripts in `scripts/`
23. Create `scripts/utils/frontmatter.js`
24. Create `scripts/watch-ide-folders.js`

### Phase 9: Root Documentation (20 min)
25. Create all root documentation files:
    - `README.md` (full version)
    - `AGENTS.md`
    - `CONTRIBUTING.md`
    - `CHANGELOG.md`
    - `USAGE.md`
    - `CUSTOMISATION.md`
    - `ARCHITECTURE.md` (high-level skeleton architecture only)
    - **`INDEX.md` (at root, not in docs/)**

### Phase 10: Finalisation (10 min)
26. Run `npm install` to generate `package-lock.json`
27. Validate all placeholders are present
28. Test `setup.sh` script
29. Enable GitHub template repository feature

**Total Estimated Time:** ~2.5-3 hours

---

## Validation Checklist

After scaffolding, verify:

- [ ] All directories created
- [ ] All configuration files present
- [ ] All `.github/` files present (workflows, issue templates, PR template)
- [ ] All `.specify/` files present (memory, rules, templates)
- [ ] All `.agent/` files present:
  - [ ] AGENTS.md
  - [ ] agent-hub/ (1 file)
  - [ ] agent-onboarding/ (5 files)
  - [ ] agent-prompt/ (3 files)
  - [ ] agent-role-profiles/ (19 files)
- [ ] `INDEX.md` at root (not in docs/)
- [ ] Decision templates (ADR and BDR) created
- [ ] How-to guides created (git-workflow, ai-optimised-docs)
- [ ] **No architecture.md in docs/explanation/**
- [ ] All scripts present
- [ ] `package.json` has all required scripts
- [ ] All placeholders use consistent syntax `{{PLACEHOLDER_NAME}}`
- [ ] All markdown files have YAML front matter (no markdown code blocks showing YAML)
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

**Version:** 3.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

