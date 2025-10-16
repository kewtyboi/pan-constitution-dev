---
topic: template-repository-analysis
name: Cross-Project File Inventory and Comparison
author: Manus AI
version: 1.0.0
date: 2025-10-14
description: Comprehensive analysis of files across NeuroNarnia, AwayTomate, and Pointy-agents to inform template repository structure
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#8'
status: active
tags:
  - template-repository
  - analysis
  - cross-project
  - file-inventory
---

# Cross-Project File Inventory and Comparison

**Initiative:** pan-governance-foundation  
**Related Issues:** #5, #8  
**Date:** 2025-10-14

## Executive Summary

This document provides a comprehensive analysis of files, templates, scripts, and organizational patterns across three projects at different maturity levels:

- **NeuroNarnia** - Most mature, comprehensive infrastructure
- **AwayTomate** - Maturing, adopting NeuroNarnia patterns
- **Pointy-agents** - Newer, innovative agent onboarding system

## Key Findings

### Agent Onboarding System

**Pointy-agents has the most complete agent onboarding system** with:
- Comprehensive onboarding guide
- 6 agent memory templates (vs. 2 in NeuroNarnia/AwayTomate)
- Clear file structure for agent setup
- Maintenance cadence guidance

### Templates

**Pointy-agents has additional template** not in other projects:
- `checklist-template.md` - For feature checklists

### Scripts

**NeuroNarnia has the most complete script library**:
- Documentation automation (frontmatter, index, dashboard, register)
- All three projects share core scripts (frontmatter, index, create-doc)

### Documentation Structure

**Three different approaches observed**:
- NeuroNarnia: `how-to-guides/`, `quick-start/`, `operations/`, `governance/`
- AwayTomate: `how-to/`, `getting-started/`, `ops/`, `adr/`
- Pointy-agents: `how-to/`, `flows/`, `architecture/`, `ops/`, `projects/`

---

## Detailed Comparison Tables

### Agent Onboarding Files

| File | NeuroNarnia | AwayTomate | Pointy-agents | Recommendation |
|------|-------------|------------|---------------|----------------|
| **agent-capability-assessment.md** | ✅ docs/agents/ | ❌ | ❌ | ✅ Include |
| **agent-capability-test.md** | ✅ docs/agents/ | ❌ | ❌ | ✅ Include |
| **agent-communication.md** | ✅ docs/agents/ | ✅ docs/agents/ | ✅ docs/agents/ | ✅ Include (hub only) |
| **agent-memory-template.md** | ✅ docs/agents/ | ✅ docs/agents/ | ❌ | ⚠️ See below |
| **agent-personality-template.md** | ✅ docs/agents/ | ✅ docs/agents/ | ❌ | ⚠️ See below |
| **onboarding-guide.md** | ❌ | ❌ | ✅ docs/agents/ | ✅ Include |
| **memory-system-template.md** | ❌ | ❌ | ✅ docs/agents/templates/ | ✅ Include |
| **personality-template.md** | ❌ | ❌ | ✅ docs/agents/templates/ | ✅ Include |
| **current-projects-template.md** | ❌ | ❌ | ✅ docs/agents/templates/ | ✅ Include |
| **recent-insights-template.md** | ❌ | ❌ | ✅ docs/agents/templates/ | ✅ Include |
| **team-context-template.md** | ❌ | ❌ | ✅ docs/agents/templates/ | ✅ Include |
| **solution-pipeline-template.md** | ❌ | ❌ | ✅ docs/agents/templates/ | ✅ Include |

**Observation:** Pointy-agents has **6 memory templates** vs. NeuroNarnia/AwayTomate's **2 templates**. Pointy-agents templates are more granular and actionable.

**Recommendation:** Use Pointy-agents template structure as it provides:
- Separate personality and memory-system templates
- 4 operational memory file templates (current-projects, recent-insights, team-context, solution-pipeline)
- Clear onboarding guide

**Action:** Remove `agent-communication.md` from `.agent/agent-onboarding/` as it belongs in `.agent/agent-hub/`.

---

### .specify/templates/ Files

| File | NeuroNarnia | AwayTomate | Pointy-agents | Recommendation |
|------|-------------|------------|---------------|----------------|
| **agent-file-template.md** | ❌ | ✅ | ✅ | ✅ Include |
| **plan-template.md** | ❌ | ✅ | ✅ | ✅ Include |
| **spec-template.md** | ❌ | ✅ | ✅ | ✅ Include |
| **tasks-template.md** | ❌ | ✅ | ✅ | ✅ Include |
| **checklist-template.md** | ❌ | ❌ | ✅ | ✅ Include (NEW) |

**Observation:** NeuroNarnia doesn't have `.specify/templates/` directory. AwayTomate and Pointy-agents both have it with same 4 core templates. Pointy-agents adds checklist template.

**Recommendation:** Include all 5 templates, with checklist-template.md as innovation from Pointy-agents.

---

### Scripts Comparison

| Script | NeuroNarnia | AwayTomate | Pointy-agents | Recommendation |
|--------|-------------|------------|---------------|----------------|
| **add-yaml-frontmatter-v2.js** | ✅ | ✅ | ❌ | ✅ Include |
| **generate-docs-index-v2.js** | ✅ | ✅ | ❌ | ✅ Include |
| **create-doc-template.js** | ✅ | ✅ | ❌ | ✅ Include |
| **check-links.js** | ✅ | ❌ | ❌ | ✅ Include |
| **generate-docs-dashboard.js** | ✅ | ✅ | ❌ | ⚠️ Optional |
| **generate-docs-register.js** | ✅ | ✅ | ❌ | ⚠️ Optional |
| **utils/frontmatter.js** | ✅ | ✅ | ❌ | ✅ Include |

**Observation:** NeuroNarnia has the most complete script library. AwayTomate has adopted most NeuroNarnia scripts. Pointy-agents has project-specific scripts (golden dataset, GitLab).

**Recommendation:** Include core 4 scripts + utils/frontmatter.js. Dashboard and register are optional enhancements.

---

### Documentation Structure Comparison

| Directory | NeuroNarnia | AwayTomate | Pointy-agents | Recommendation |
|-----------|-------------|------------|---------------|----------------|
| **agents/** | ✅ | ✅ | ✅ | ✅ Include |
| **getting-started/** | ❌ (quick-start/) | ✅ | ❌ | ✅ Use "getting-started" |
| **how-to/** | ✅ (how-to-guides/) | ✅ | ✅ | ✅ Use "how-to" |
| **reference/** | ✅ | ✅ | ❌ | ✅ Include |
| **explanation/** | ✅ | ✅ | ❌ | ✅ Include |
| **ops/** | ❌ (operations/) | ✅ | ✅ | ✅ Use "ops" |
| **meta/** | ✅ | ✅ | ❌ | ✅ Include |
| **adr/** | ❌ | ✅ | ❌ | ✅ Include (as decisions/adr/) |
| **analysis/** | ✅ | ❌ | ❌ | ✅ Include |
| **architecture/** | ❌ | ❌ | ✅ | ⚠️ Merge into explanation/ |
| **flows/** | ❌ | ❌ | ✅ | ❌ Project-specific |
| **projects/** | ❌ | ❌ | ✅ | ❌ Project-specific |
| **governance/** | ✅ | ❌ | ❌ | ⚠️ Merge into ops/ |
| **design/** | ✅ | ❌ | ❌ | ❌ Project-specific |
| **testing/** | ✅ | ❌ | ❌ | ❌ Project-specific |

**Observation:** Naming inconsistencies across projects:
- "how-to-guides" vs. "how-to" → **Use "how-to"**
- "quick-start" vs. "getting-started" → **Use "getting-started"**
- "operations" vs. "ops" → **Use "ops"**

**Recommendation:** Follow Diátaxis framework with Pan-specific additions:
- `getting-started/` (tutorials)
- `how-to/` (task-oriented guides)
- `reference/` (technical reference)
- `explanation/` (understanding-oriented)
- `decisions/` (ADR and BDR)
- `ops/` (operational docs)
- `meta/` (metadata manifest)
- `analysis/` (research and analysis)

---

### package.json Scripts

Both NeuroNarnia and AwayTomate have identical scripts:

```json
{
  "scripts": {
    "docs:frontmatter": "node scripts/add-yaml-frontmatter-v2.js",
    "docs:frontmatter:dry": "node scripts/add-yaml-frontmatter-v2.js --dry-run",
    "docs:index": "node scripts/generate-docs-index-v2.js",
    "docs:dashboard": "node scripts/generate-docs-dashboard.js",
    "docs:dashboard:check": "node scripts/generate-docs-dashboard.js --check",
    "docs:create": "node scripts/create-doc-template.js",
    "docs:register": "node scripts/generate-docs-register.js",
    "docs:register:check": "node scripts/generate-docs-register.js --check"
  }
}
```

**Recommendation:** Include core scripts in template:
- `docs:frontmatter` and `docs:frontmatter:dry`
- `docs:index`
- `docs:create`

Optional (can be added later):
- `docs:dashboard` and `docs:dashboard:check`
- `docs:register` and `docs:register:check`

---

## Recommended Template Structure

Based on cross-project analysis, here is the recommended structure:

### .agent/agent-onboarding/

**Remove:**
- ~~agent-communication.md~~ (belongs in agent-hub/)

**Keep:**
- agent-capability-assessment.md (from NeuroNarnia)
- agent-capability-test.md (from NeuroNarnia)
- onboarding-guide.md (from Pointy-agents)

**Add from Pointy-agents:**
- memory-system-template.md
- personality-template.md
- current-projects-template.md
- recent-insights-template.md
- team-context-template.md
- solution-pipeline-template.md

**Total:** 9 files in agent-onboarding/

### .specify/templates/

**Include all 5:**
- agent-file-template.md (AwayTomate/Pointy-agents)
- plan-template.md (AwayTomate/Pointy-agents)
- spec-template.md (AwayTomate/Pointy-agents)
- tasks-template.md (AwayTomate/Pointy-agents)
- checklist-template.md (Pointy-agents - NEW)

### scripts/

**Core scripts:**
- add-yaml-frontmatter-v2.js (NeuroNarnia/AwayTomate)
- generate-docs-index-v2.js (NeuroNarnia/AwayTomate)
- create-doc-template.js (NeuroNarnia/AwayTomate)
- check-links.js (NeuroNarnia)
- setup.sh (NEW - bootstrap script)
- watch-ide-folders.js (NEW - IDE prompt sync)
- utils/frontmatter.js (NeuroNarnia/AwayTomate)

### docs/

**Structure:**
```
docs/
├── decisions/
│   ├── adr/
│   │   ├── README.md
│   │   └── TEMPLATE.md (from AwayTomate)
│   └── bdr/
│       ├── README.md
│       └── TEMPLATE.md (NEW)
├── explanation/
│   ├── AGENTS.md
│   └── README.md
├── getting-started/
│   ├── AGENTS.md
│   ├── README.md
│   └── quickstart.md
├── how-to/
│   ├── AGENTS.md
│   ├── README.md
│   ├── git-workflow-and-commit-standards.md (NEW)
│   └── write-ai-optimised-documentation.md (NEW)
├── meta/
│   └── metadata-manifest.json
├── ops/
│   └── governance.md
├── reference/
│   ├── AGENTS.md
│   ├── README.md
│   └── glossary.md
└── analysis/
    └── README.md
```

---

## Assumptions and Decisions

### Assumption 1: INDEX.md Location

**Decision:** Place `INDEX.md` at **project root**, not in `docs/`.

**Rationale:** 
- Provides immediate visibility
- Standard practice for project-level indexes
- None of the three projects have INDEX.md in docs/

**Status:** ✅ Confirmed in v3

### Assumption 2: Agent Communication File

**Decision:** `agent-communication.md` belongs in `.agent/agent-hub/`, not in `.agent/agent-onboarding/`.

**Rationale:**
- Onboarding guide references it as communication hub
- It's an active log, not a template
- NeuroNarnia and AwayTomate have it in docs/agents/ (active location)

**Status:** ✅ Confirmed - remove from onboarding/

### Assumption 3: Agent Templates Source

**Decision:** Use **Pointy-agents templates** as primary source for agent onboarding.

**Rationale:**
- More granular (6 templates vs. 2)
- Includes operational templates (current-projects, recent-insights, etc.)
- Has comprehensive onboarding guide
- Newer, more refined approach

**Status:** ⚠️ Needs confirmation

### Assumption 4: Checklist Template

**Decision:** Include `checklist-template.md` from Pointy-agents.

**Rationale:**
- Useful for feature development
- Not present in other projects (innovation)
- Aligns with test-driven development

**Status:** ⚠️ Needs confirmation

### Assumption 5: Documentation Structure Naming

**Decision:** Use shorter, standard names:
- `how-to/` (not "how-to-guides")
- `getting-started/` (not "quick-start")
- `ops/` (not "operations")

**Rationale:**
- Follows Diátaxis framework
- Shorter paths
- AwayTomate uses these names (more recent)

**Status:** ✅ Confirmed in v3

### Assumption 6: Architecture Documentation

**Decision:** No `architecture.md` in `docs/explanation/`. Only `ARCHITECTURE.md` at root.

**Rationale:**
- Root ARCHITECTURE.md describes skeleton structure
- No need for duplicate in docs/explanation/
- Pointy-agents has separate architecture/ folder (project-specific)

**Status:** ✅ Confirmed in v3

### Assumption 7: Dashboard and Register Scripts

**Decision:** Mark `generate-docs-dashboard.js` and `generate-docs-register.js` as **optional**.

**Rationale:**
- Present in NeuroNarnia and AwayTomate
- Not essential for initial template
- Can be added as enhancement

**Status:** ⚠️ Needs confirmation

---

## Spelling and Naming Review

### Potential Issues Found

| Current Name | Issue | Recommendation |
|--------------|-------|----------------|
| "Diátaxis" | ✅ Correct | Keep (with diacritic) |
| "agent-onboarding" | ✅ Correct | Keep |
| "agent-hub" | ✅ Correct | Keep |
| "agent-prompt" | ✅ Correct | Keep |
| "agent-role-profiles" | ✅ Correct | Keep |
| "getting-started" | ✅ Correct | Keep (not "quick-start") |
| "how-to" | ✅ Correct | Keep (not "how-to-guides") |
| "ops" | ✅ Correct | Keep (not "operations") |
| "adr" | ✅ Correct | Keep (Architectural Decision Record) |
| "bdr" | ✅ Correct | Keep (Business Decision Record) |
| "frontmatter" | ✅ Correct | Keep (one word, not "front-matter") |

**No spelling mistakes found in current naming conventions.**

---

## Agent Hiring/Onboarding Package

### Current State

**Observation:** No automated agent hiring package found in any project yet.

**Evidence:**
- Pointy-agents has comprehensive manual onboarding guide
- No scripts for automated agent creation
- Manual process: copy templates → fill in → create folders

### Recommended Package Structure

For future development of agent hiring package:

```
scripts/
└── agent-hiring/
    ├── hire-agent.js          # Main hiring script
    ├── create-agent-files.js  # File creation automation
    ├── validate-agent.js      # Validation checks
    └── templates/             # Template references
```

**Functionality:**
1. Interactive prompts for agent details
2. Automated file creation from templates
3. Folder structure setup
4. Git branch creation
5. Initial commit
6. Validation checks

**Status:** ⚠️ Future enhancement, not in initial template

---

## Final Recommendations

### Immediate Actions for v4 Scaffolding

1. **Remove** `agent-communication.md` from `.agent/agent-onboarding/`
2. **Add** 6 Pointy-agents templates to `.agent/agent-onboarding/`:
   - memory-system-template.md
   - personality-template.md
   - current-projects-template.md
   - recent-insights-template.md
   - team-context-template.md
   - solution-pipeline-template.md
3. **Add** `onboarding-guide.md` to `.agent/agent-onboarding/`
4. **Add** `checklist-template.md` to `.specify/templates/`
5. **Confirm** INDEX.md at root (not in docs/)
6. **Confirm** no architecture.md in docs/explanation/
7. **Use** standard naming: `how-to/`, `getting-started/`, `ops/`

### Questions for Confirmation

1. ✅ **Confirmed:** Use Pointy-agents agent templates (6 templates) instead of NeuroNarnia (2 templates)?
2. ⚠️ **Needs confirmation:** Include checklist-template.md from Pointy-agents?
3. ⚠️ **Needs confirmation:** Mark dashboard and register scripts as optional?
4. ⚠️ **Needs confirmation:** Agent hiring package as future enhancement (not in initial template)?

---

## Updated File Count

With Pointy-agents templates included:

| Category | Count | Change from v3 |
|----------|-------|----------------|
| **.agent/agent-onboarding/** | 9 | +4 (removed 1, added 5) |
| **.specify/templates/** | 5 | +1 (checklist) |
| **Total** | **~99 files** | +5 files |

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

