---
topic: architecture-decision
name: ADR-003 - Diátaxis Documentation Structure with Pan Extensions
author: Manus AI
version: 1.0.0
date: 2025-10-14
description: Decision to adopt Diátaxis framework with Pan-specific extensions for documentation organization
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#8'
  - '#18'
status: accepted
tags:
  - adr
  - documentation
  - diataxis
  - structure
---

# ADR-003: Diátaxis Documentation Structure with Pan Extensions

**Status:** Accepted  
**Date:** 2025-10-14  
**Deciders:** Pan Governance Team  
**Technical Story:** Epic #5, Scaffolding #8, Documentation #18

## Context and Problem Statement

Documentation across NeuroNarnia, AwayTomate, and Pointy-agents uses inconsistent naming and organization:
- "how-to-guides" vs. "how-to"
- "quick-start" vs. "getting-started"
- "operations" vs. "ops"
- Different top-level folders (governance, design, testing, flows, projects)

We need a consistent, scalable documentation structure that:
- Works for both AI agents and humans
- Follows industry best practices
- Accommodates Pan Constitution-specific needs
- Remains simple and navigable

## Decision Drivers

- **Consistency:** All Pan-governed projects should use same structure
- **Best Practices:** Should follow proven documentation frameworks
- **Discoverability:** Users should easily find what they need
- **AI-Friendly:** Structure should help AI agents navigate documentation
- **Scalability:** Should work for small and large projects
- **Clarity:** Folder names should be self-explanatory

## Considered Options

### Option 1: Pure Diátaxis Framework

**Approach:** Use only the four Diátaxis categories:
- `tutorials/` - Learning-oriented
- `how-to/` - Task-oriented
- `reference/` - Information-oriented
- `explanation/` - Understanding-oriented

**Pros:**
- Industry-standard framework
- Well-documented and understood
- Clear separation of documentation types
- Proven at scale (Django, Gatsby, etc.)

**Cons:**
- No place for operational docs (governance, ADRs)
- No place for metadata
- No place for analysis/research
- Too rigid for Pan Constitution needs

**Implementation Effort:** Low (4 folders)

### Option 2: Diátaxis + Pan Extensions (CHOSEN)

**Approach:** Use Diátaxis core plus Pan-specific extensions:

**Diátaxis Core:**
- `getting-started/` - Tutorials and quickstarts
- `how-to/` - Task-oriented guides
- `reference/` - Technical reference
- `explanation/` - Understanding-oriented

**Pan Extensions:**
- `decisions/` - ADR and BDR
- `ops/` - Operational documentation
- `meta/` - Metadata and manifests
- `analysis/` - Research and analysis

**Pros:**
- Best of both worlds (standard + custom)
- Accommodates Pan Constitution needs
- Clear separation of concerns
- Scalable and flexible
- AI agents can understand structure

**Cons:**
- More folders than pure Diátaxis
- Requires documentation of extensions

**Implementation Effort:** Medium (8 folders + documentation)

### Option 3: Flat Structure

**Approach:** Minimal top-level folders, organize by topic within each.

**Pros:**
- Simple
- Flexible

**Cons:**
- No clear organization principle
- Hard to navigate as project grows
- No industry standard to reference
- Confusing for new contributors

**Implementation Effort:** Low (but high maintenance cost)

## Decision Outcome

**Chosen option: "Diátaxis + Pan Extensions"** because it:

1. **Follows industry best practices** (Diátaxis framework)
2. **Accommodates Pan Constitution needs** (decisions, ops, meta, analysis)
3. **Provides clear navigation** for both humans and AI agents
4. **Scales well** from small to large projects
5. **Maintains consistency** across all Pan-governed projects

### Implementation Strategy

**Phase 1: Create Structure (Week 1)**
1. Create all 8 top-level folders
2. Add README.md in each explaining purpose
3. Add AGENTS.md where needed for AI guidance

**Phase 2: Naming Standards (Week 1)**
4. Document naming conventions:
   - `getting-started/` (not "quick-start" or "tutorials")
   - `how-to/` (not "how-to-guides")
   - `ops/` (not "operations")
   - `decisions/` with subfolders `adr/` and `bdr/`

**Phase 3: Content Guidelines (Week 2)**
5. Create content guidelines for each folder
6. Provide examples of what belongs where
7. Document when to create new folders

### Positive Consequences

- **Consistency:** All Pan projects use same structure
- **Discoverability:** Clear folder names indicate content type
- **Best practices:** Leverages proven Diátaxis framework
- **Flexibility:** Extensions accommodate Pan-specific needs
- **AI-friendly:** Clear structure helps AI agents navigate
- **Scalability:** Works for projects of any size

### Negative Consequences

- **More folders:** 8 folders vs. simpler alternatives
- **Learning curve:** Contributors must learn structure
- **Documentation overhead:** Must document extensions

### Mitigation Strategies

**For folder count:**
- Each folder has clear purpose
- README.md in each folder explains content
- Structure is documented in template

**For learning curve:**
- Provide clear guidelines in CONTRIBUTING.md
- Examples in each folder
- AI agents can guide humans

**For documentation overhead:**
- One-time cost to document
- Pays off in consistency
- Can reference Diátaxis documentation

## Documentation Structure

```
docs/
├── getting-started/        # Diátaxis: Tutorials
│   ├── AGENTS.md
│   ├── README.md
│   └── quickstart.md
│
├── how-to/                 # Diátaxis: How-to guides
│   ├── AGENTS.md
│   ├── README.md
│   ├── git-workflow-and-commit-standards.md
│   └── write-ai-optimised-documentation.md
│
├── reference/              # Diátaxis: Reference
│   ├── AGENTS.md
│   ├── README.md
│   └── glossary.md
│
├── explanation/            # Diátaxis: Explanation
│   ├── AGENTS.md
│   └── README.md
│
├── decisions/              # Pan Extension: Decision records
│   ├── adr/
│   │   ├── README.md
│   │   └── TEMPLATE.md
│   └── bdr/
│       ├── README.md
│       └── TEMPLATE.md
│
├── ops/                    # Pan Extension: Operational docs
│   └── governance.md
│
├── meta/                   # Pan Extension: Metadata
│   └── metadata-manifest.json
│
└── analysis/               # Pan Extension: Research
    └── README.md
```

## Naming Conventions

| Concept | NeuroNarnia | AwayTomate | Pointy-agents | Pan Standard |
|---------|-------------|------------|---------------|--------------|
| Tutorials | quick-start/ | getting-started/ | ❌ | **getting-started/** |
| How-to guides | how-to-guides/ | how-to/ | how-to/ | **how-to/** |
| Operations | operations/ | ops/ | ops/ | **ops/** |
| Agents | agents/ | agents/ | agents/ | **agents/** (moved to .agent/) |

**Decision:** Use shorter, standard names that align with Diátaxis and modern conventions.

## Folder Purposes

### Diátaxis Core

**getting-started/** - Learning-oriented tutorials
- Quickstart guides
- First-time setup
- Basic concepts
- Step-by-step tutorials

**how-to/** - Task-oriented guides
- Specific tasks
- Problem-solving
- Practical guides
- Workflow documentation

**reference/** - Information-oriented reference
- API documentation
- Configuration reference
- Glossaries
- Technical specifications

**explanation/** - Understanding-oriented explanations
- Concepts and principles
- Architecture overviews
- Design philosophy
- Background information

### Pan Extensions

**decisions/** - Decision records
- `adr/` - Architectural Decision Records
- `bdr/` - Business Decision Records
- Rationale and context
- Historical decisions

**ops/** - Operational documentation
- Governance
- Processes
- Runbooks
- Operational procedures

**meta/** - Metadata and manifests
- Documentation metadata
- Project manifests
- Index files
- Auto-generated content

**analysis/** - Research and analysis
- Cross-project analysis
- Research findings
- Investigations
- Comparative studies

## AGENTS.md and README.md Strategy

**Not every folder needs both files.** Only include where they add value:

**AGENTS.md needed when:**
- AI agents need specific guidance for that folder
- Special rules or conventions apply
- Examples of agent-generated content

**README.md needed when:**
- Humans need orientation
- Folder purpose isn't obvious
- Content guidelines are complex

**Folders with both:**
- `getting-started/` - Both need orientation
- `how-to/` - Both need guidance
- `reference/` - Both need context
- `explanation/` - Both need framing

**Folders with README only:**
- `decisions/adr/` - Humans need template guidance
- `decisions/bdr/` - Humans need template guidance
- `analysis/` - Humans need context

**Folders with neither:**
- `ops/` - Single governance.md is self-explanatory
- `meta/` - Auto-generated content

## References

- Diátaxis Framework: https://diataxis.fr/
- Cross-project analysis: `docs/analysis/cross-project-file-inventory.md`
- Issue #18: Create template Diátaxis documentation structure
- NeuroNarnia documentation structure
- AwayTomate documentation structure
- Pointy-agents documentation structure

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Accepted

