---
topic: operations
name: Pan Constitution Template Repository - Epic and Story Structure
author: Manus AI
version: 1.0.0
date: 2025-10-14
description: Complete epic and story breakdown for implementing the Pan Constitution template repository
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#6'
  - '#7'
  - '#8'
  - '#9'
  - '#10'
  - '#11'
  - '#12'
  - '#13'
  - '#14'
  - '#15'
  - '#16'
  - '#17'
  - '#18'
  - '#19'
  - '#20'
  - '#21'
status: active
tags:
  - epic
  - template-repository
  - project-planning
  - governance
---

# Pan Constitution Template Repository: Epic and Story Structure

**Initiative:** pan-governance-foundation  
**Epic Issue:** #5  
**Date:** 2025-10-14

## Epic: Pan Constitution Template Repository

**Goal:** Create a production-ready template repository that enables new AI-agent-built projects to adopt the Pan Constitution with all necessary infrastructure, automation, and documentation in under 30 minutes.

**Success Criteria:**
- Template repository created and marked as GitHub template
- Bootstrap script enables project setup in < 30 minutes
- All CI workflows pass on fresh template instantiation
- At least 2 test projects successfully created from template
- Documentation complete and validated

**Estimated Duration:** 6-8 weeks

---

## Story Breakdown

### Story 1: Research and Solution Design ✅ (COMPLETED)

**Issue:** #6  
**Title:** Research and design solution for Pan Constitution template repository

**Description:**
Conduct comprehensive analysis of Pan Constitution requirements, NeuroNarnia and AwayTomate infrastructure, and design the optimal solution for creating a template repository.

**Acceptance Criteria:**
- [x] Analyse Pan Constitution requirements
- [x] Review NeuroNarnia and AwayTomate for template-worthy infrastructure
- [x] Document complete file inventory (100+ files)
- [x] Design two-repository architecture (dev + template)
- [x] Create transformation strategy for content
- [x] Define placeholder syntax and customisation approach
- [x] Document key decisions required
- [x] Create implementation roadmap

**Deliverables:**
- `pan-constitution-comprehensive-analysis.md` ✅
- `pan-template-analysis.md` ✅
- `pan-solution-design.md` ✅

**Status:** Complete

---

### Story 2: Architectural Decisions and Approval

**Issue:** #7  
**Title:** Make key architectural decisions for template repository

**Description:**
Review research findings and make decisions on key questions that will guide implementation.

**Key Decisions Required:**
1. Agent file inclusion strategy (all 26 vs. selective)
2. Technology-specific content handling approach
3. Workflow complexity (essential vs. optional)
4. Configuration file pre-population level
5. Bootstrap script features and automation level
6. Versioning strategy for template updates
7. Migration path for existing projects

**Acceptance Criteria:**
- [ ] Review comprehensive analysis document
- [ ] Make decisions on all 7 key questions
- [ ] Document decisions with rationale
- [ ] Update solution design based on decisions
- [ ] Get stakeholder approval to proceed

**Deliverables:**
- `architectural-decisions.md`
- Updated `pan-solution-design.md`

**Dependencies:** Story 1

**Estimated Effort:** 1 week

---

### Story 3: Create Template Repository Scaffold

**Issue:** #8  
**Title:** Scaffold pan-constitution-template repository structure

**Description:**
Create the new template repository with complete directory structure, placeholder files, and initial configuration.

**Acceptance Criteria:**
- [ ] Create `pan-constitution-template` repository
- [ ] Set up complete directory structure (`.specify/`, `docs/`, `.github/`, `scripts/`)
- [ ] Create all placeholder files (100+ files)
- [ ] Add `.gitignore`, `.editorconfig`, basic configuration
- [ ] Enable GitHub template repository feature
- [ ] Create initial README with setup instructions
- [ ] Add LICENSE file

**Deliverables:**
- New repository: `pan-constitution-template`
- Complete directory structure
- Initial README.md

**Dependencies:** Story 2

**Estimated Effort:** 1 week

---

### Story 4: Transform Core Documentation Files

**Issue:** #9  
**Title:** Create project-centric templates for core documentation

**Description:**
Transform README.md, AGENTS.md, CONTRIBUTING.md, and constitution.md to project-centric templates with placeholders.

**Acceptance Criteria:**
- [ ] Create template README.md with placeholders
- [ ] Create template AGENTS.md with placeholders
- [ ] Create template CONTRIBUTING.md
- [ ] Create template constitution.md with Pan inheritance structure
- [ ] Create template CHANGELOG.md with structure
- [ ] Add customisation markers and comments
- [ ] Validate all placeholders are consistent

**Deliverables:**
- Template versions of 5 core documentation files

**Dependencies:** Story 3

**Estimated Effort:** 1 week

---

### Story 5: Transform Agent Files (26 files)

**Issue:** #10  
**Title:** Create generic versions of all agent files

**Description:**
Transform all 26 agent files from NeuroNarnia/AwayTomate to generic, project-agnostic templates.

**Acceptance Criteria:**
- [ ] Review all 26 agent files for project-specific content
- [ ] Create generic versions with placeholders
- [ ] Remove project-specific examples or mark as conditional
- [ ] Ensure consistent structure across all agent files
- [ ] Add customisation guidance in each file
- [ ] Create `docs/agents/index.md` template

**Agent Files to Transform:**
- Agent infrastructure (5 files): capability-assessment, capability-test, communication, memory-template, personality-template
- Specialised agents (21 files): ai-engineer, api-tester, backend-architect, brand-guardian, code-refactorer, devops-automator, frontend-designer, frontend-developer, legal-compliance-checker, mobile-app-builder, performance-benchmarker, project-shipper, project-task-planner, rapid-prototyper, security-auditor, studio-coach, test-results-analyzer, test-writer-fixer, ui-designer, etc.

**Deliverables:**
- 26 generic agent template files

**Dependencies:** Story 3

**Estimated Effort:** 2 weeks

---

### Story 6: Transform .specify/rules Files

**Issue:** #11  
**Title:** Create generic versions of .specify/rules/*.mdc files

**Description:**
Transform all 6 `.mdc` rule files to generic templates with project placeholders.

**Acceptance Criteria:**
- [ ] Create generic `orchestrator-startup.mdc` with placeholders
- [ ] Create generic `ai-agent-compliance.mdc`
- [ ] Create generic `initiative-tracking.mdc`
- [ ] Create generic `privacy-security.mdc`
- [ ] Create generic `project-structure.mdc`
- [ ] Create generic `testing-standards.mdc`
- [ ] Validate all project-specific references removed
- [ ] Test .mdc files with Cursor/Codex

**Deliverables:**
- 6 generic `.mdc` rule files

**Dependencies:** Story 3

**Estimated Effort:** 1 week

---

### Story 7: Create Configuration Files

**Issue:** #12  
**Title:** Create all configuration files with customisation guidance

**Description:**
Create template versions of all configuration files (.markdownlint.yml, .cspell.json, .prettierrc.yml, etc.) with base settings and customisation sections.

**Acceptance Criteria:**
- [ ] Create `.markdownlint.yml` with Pan-generic settings
- [ ] Create `.cspell.json` with base dictionary and customisation section
- [ ] Create `.prettierrc.yml` with standard formatting rules
- [ ] Create `.markdown-link-check.json`
- [ ] Create `.editorconfig`
- [ ] Create `.gitignore` with standard patterns
- [ ] Create `.gitattributes`
- [ ] Add comments explaining customisation points

**Deliverables:**
- 7 configuration files

**Dependencies:** Story 3

**Estimated Effort:** 1 week

---

### Story 8: Create GitHub Workflows

**Issue:** #13  
**Title:** Create all GitHub Actions workflows for CI/CD

**Description:**
Create all GitHub workflow files for markdown linting, spell checking, link validation, and documentation validation.

**Acceptance Criteria:**
- [ ] Create `markdown-lint.yml` workflow
- [ ] Create `spell-check.yml` workflow
- [ ] Create `link-check.yml` workflow
- [ ] Create `docs-validation.yml` workflow
- [ ] Create `tests.yml` workflow (optional)
- [ ] Test all workflows on template repository
- [ ] Document which workflows are essential vs. optional

**Deliverables:**
- 5 GitHub workflow files

**Dependencies:** Story 3, Story 7

**Estimated Effort:** 1 week

---

### Story 9: Create Issue and PR Templates

**Issue:** #14  
**Title:** Create GitHub issue and PR templates

**Description:**
Create all issue templates and PR template with constitutional compliance checklist.

**Acceptance Criteria:**
- [ ] Create `bug.yml` issue template
- [ ] Create `feature.yml` issue template
- [ ] Create `docs_update.md` issue template
- [ ] Create `track.yaml` initiative tracking template
- [ ] Create `config.yml` issue template configuration
- [ ] Create `pull_request_template.md` with constitutional compliance section
- [ ] Create `CODEOWNERS` template (optional)

**Deliverables:**
- 5+ issue templates
- 1 PR template
- 1 CODEOWNERS template

**Dependencies:** Story 3

**Estimated Effort:** 1 week

---

### Story 10: Create Automation Scripts

**Issue:** #15  
**Title:** Create all automation scripts for documentation management

**Description:**
Create or adapt automation scripts from NeuroNarnia for YAML front matter, documentation indexing, and validation.

**Acceptance Criteria:**
- [ ] Create/adapt `add-yaml-frontmatter-v2.js`
- [ ] Create/adapt `generate-docs-index-v2.js`
- [ ] Create/adapt `create-doc-template.js`
- [ ] Create/adapt `check-links.js`
- [ ] Create `utils/frontmatter.js` utility module
- [ ] Create `package.json` with all npm scripts
- [ ] Test all scripts on template repository
- [ ] Document all scripts in README

**Deliverables:**
- 5+ automation scripts
- `package.json` with scripts
- Script documentation

**Dependencies:** Story 3

**Estimated Effort:** 1 week

---

### Story 11: Create Bootstrap Script

**Issue:** #16  
**Title:** Create setup.sh bootstrap script for new projects

**Description:**
Create the bootstrap script that automates project setup from template, including placeholder replacement and dependency installation.

**Acceptance Criteria:**
- [ ] Create `scripts/setup.sh` with interactive prompts
- [ ] Implement placeholder replacement for all files
- [ ] Add npm dependency installation
- [ ] Add git initialisation (optional)
- [ ] Add validation checks
- [ ] Display next steps after completion
- [ ] Test script on clean directory
- [ ] Create detailed usage documentation

**Deliverables:**
- `scripts/setup.sh`
- Usage documentation

**Dependencies:** Stories 4-10

**Estimated Effort:** 1 week

---

### Story 12: Create Template Documentation

**Issue:** #17  
**Title:** Create comprehensive documentation for template repository

**Description:**
Create all documentation needed for users to understand and use the template repository.

**Acceptance Criteria:**
- [ ] Create comprehensive README.md for template
- [ ] Create USAGE.md with step-by-step setup guide
- [ ] Create CUSTOMISATION.md with guidance on what to customise
- [ ] Create ARCHITECTURE.md explaining template structure
- [ ] Document all npm scripts
- [ ] Document all workflows
- [ ] Create troubleshooting guide
- [ ] Add examples of customisation

**Deliverables:**
- README.md
- USAGE.md
- CUSTOMISATION.md
- ARCHITECTURE.md
- Troubleshooting guide

**Dependencies:** Stories 4-11

**Estimated Effort:** 1 week

---

### Story 13: Create Diátaxis Documentation Structure

**Issue:** #18  
**Title:** Create template Diátaxis documentation structure

**Description:**
Create the complete `docs/` directory structure following Diátaxis framework with template files.

**Acceptance Criteria:**
- [ ] Create `docs/getting-started/` with quickstart template
- [ ] Create `docs/how-to/` directory with example guide
- [ ] Create `docs/reference/` with glossary template
- [ ] Create `docs/explanation/` with architecture template
- [ ] Create `docs/ops/` with governance and change-log templates
- [ ] Create `docs/meta/metadata-manifest.json` template
- [ ] Create `docs/adr/TEMPLATE.md` for ADRs
- [ ] Add README in each directory explaining purpose

**Deliverables:**
- Complete `docs/` directory structure
- Template files for each section
- metadata-manifest.json template

**Dependencies:** Story 3

**Estimated Effort:** 1 week

---

### Story 14: Testing and Validation

**Issue:** #19  
**Title:** Test template repository with sample projects

**Description:**
Create 2-3 sample projects from the template to validate completeness and usability.

**Acceptance Criteria:**
- [ ] Create test project 1 (minimal project)
- [ ] Create test project 2 (full-featured project)
- [ ] Create test project 3 (different tech stack)
- [ ] Validate bootstrap script works correctly
- [ ] Validate all CI workflows pass
- [ ] Validate all placeholders are replaced
- [ ] Collect feedback and issues
- [ ] Fix all critical issues
- [ ] Document common pitfalls

**Deliverables:**
- 3 test projects
- Issue list and fixes
- Validation report

**Dependencies:** Stories 4-13

**Estimated Effort:** 2 weeks

---

### Story 15: Template Versioning and Release

**Issue:** #20  
**Title:** Version and release template repository v1.0.0

**Description:**
Prepare template repository for initial release with proper versioning and documentation.

**Acceptance Criteria:**
- [ ] Review all files for completeness
- [ ] Create CHANGELOG for template
- [ ] Tag version 1.0.0
- [ ] Create GitHub release with notes
- [ ] Update pan-constitution-dev README to reference template
- [ ] Announce template availability
- [ ] Create migration guide for existing projects

**Deliverables:**
- Version 1.0.0 release
- Release notes
- Migration guide

**Dependencies:** Story 14

**Estimated Effort:** 1 week

---

### Story 16: Update Pan Constitution Dev Repository

**Issue:** #21  
**Title:** Update pan-constitution-dev to reference template

**Description:**
Update the Pan Constitution development repository to clearly reference the template repository and explain the relationship.

**Acceptance Criteria:**
- [ ] Update pan-constitution-dev README
- [ ] Add link to template repository
- [ ] Explain two-repository architecture
- [ ] Document when to use dev vs. template
- [ ] Update CONTRIBUTING.md
- [ ] Add template update workflow documentation

**Deliverables:**
- Updated pan-constitution-dev documentation

**Dependencies:** Story 15

**Estimated Effort:** 1 week

---

## Epic Summary

**Total Stories:** 16

**Estimated Total Effort:** 18-20 weeks (with parallel work, can be completed in 8-10 weeks)

**Critical Path:**
1. Story 1: Research (Complete)
2. Story 2: Decisions (1 week)
3. Story 3: Scaffold (1 week)
4. Stories 4-13: Content creation (can be parallelised, 2-3 weeks with multiple contributors)
5. Story 14: Testing (2 weeks)
6. Story 15: Release (1 week)
7. Story 16: Update dev repo (1 week)

**Parallelisation Opportunities:**
- Stories 4-10 can be worked on in parallel once scaffold is complete
- Story 11 can start once Stories 4-10 are 80% complete
- Story 12 can be written in parallel with Stories 4-11
- Story 13 can be done in parallel with Stories 4-12

---

## Milestones

**Milestone 1: Research and Planning (Weeks 1-2)**
- Story 1: Research ✅
- Story 2: Decisions

**Milestone 2: Foundation (Weeks 3-4)**
- Story 3: Scaffold
- Story 13: Diátaxis structure

**Milestone 3: Content Transformation (Weeks 5-8)**
- Story 4: Core docs
- Story 5: Agent files
- Story 6: Rules files
- Story 7: Configuration

**Milestone 4: Infrastructure (Weeks 7-9)**
- Story 8: Workflows
- Story 9: Templates
- Story 10: Scripts
- Story 11: Bootstrap

**Milestone 5: Documentation and Testing (Weeks 10-12)**
- Story 12: Documentation
- Story 14: Testing

**Milestone 6: Release (Weeks 13-14)**
- Story 15: Release
- Story 16: Update dev repo

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

