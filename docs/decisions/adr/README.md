---
topic: architecture-decisions
name: Architectural Decision Records (ADR) README
author: Pan Governance Team
version: 1.0.0
date: 2025-10-14
description: Guide to creating and maintaining Architectural Decision Records in Pan-governed projects
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#7'
status: active
tags:
  - adr
  - decision-records
  - governance
  - documentation
---

# Architectural Decision Records (ADR)

This directory contains Architectural Decision Records (ADRs) for the Pan Constitution template repository project.

## What is an ADR?

An Architectural Decision Record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

**Purpose:**
- Document significant technical decisions
- Capture rationale and context
- Enable future understanding of "why"
- Facilitate onboarding and knowledge transfer
- Support AI agent understanding of project history

## When to Create an ADR

Create an ADR when making decisions about:

- **Architecture:** System structure, component organization, data flow
- **Technology choices:** Frameworks, libraries, tools, platforms
- **Patterns and practices:** Design patterns, coding standards, conventions
- **Infrastructure:** Deployment, hosting, CI/CD, monitoring
- **Significant changes:** Major refactors, migrations, deprecations

**Examples:**
- "We chose two separate repositories instead of one"
- "We adopted Pointy-agents templates over NeuroNarnia templates"
- "We placed INDEX.md at root instead of in docs/"

## When NOT to Create an ADR

Don't create ADRs for:

- **Trivial decisions:** Variable naming, minor formatting
- **Obvious choices:** Using Git for version control
- **Temporary decisions:** Quick fixes, experiments
- **Implementation details:** How to write a specific function
- **Business decisions:** Use BDR (Business Decision Record) instead

## ADR Numbering

ADRs are numbered sequentially:

- `ADR-001-two-repository-architecture.md`
- `ADR-002-pointy-agents-template-adoption.md`
- `ADR-003-diataxis-documentation-structure.md`
- `ADR-004-index-at-root.md`

**Format:** `ADR-NNN-short-title.md`

**Rules:**
- Use zero-padded numbers (001, 002, etc.)
- Use kebab-case for title
- Keep title short but descriptive
- Never reuse numbers

## ADR Template

Use the template at `TEMPLATE.md` when creating new ADRs.

**Required sections:**
1. **YAML Front Matter** - Metadata
2. **Title** - ADR number and title
3. **Status** - Proposed, Accepted, Rejected, Deprecated, Superseded
4. **Context and Problem Statement** - What decision needs to be made and why
5. **Decision Drivers** - Factors influencing the decision
6. **Considered Options** - All options evaluated (minimum 2)
7. **Decision Outcome** - Chosen option and rationale
8. **Consequences** - Positive and negative outcomes

## ADR Status Values

| Status | Meaning |
|--------|---------|
| **Proposed** | Decision is under discussion |
| **Accepted** | Decision has been approved and implemented |
| **Rejected** | Decision was considered but not adopted |
| **Deprecated** | Decision is no longer relevant |
| **Superseded by ADR-XXX** | Decision replaced by newer ADR |

## Creating a New ADR

### Step 1: Copy Template

```bash
cp docs/decisions/adr/TEMPLATE.md docs/decisions/adr/ADR-NNN-your-title.md
```

### Step 2: Fill in YAML Front Matter

```yaml
---
topic: architecture-decision
name: ADR-NNN - Your Decision Title
author: Your Name
version: 1.0.0
date: YYYY-MM-DD
description: Brief description of the decision
initiative: initiative-name
related_issues:
  - '#123'
status: proposed
tags:
  - adr
  - relevant-tags
---
```

### Step 3: Write the ADR

Follow the template structure:
1. Clear problem statement
2. List decision drivers
3. Document all options considered (pros/cons)
4. State chosen option and why
5. Document consequences

### Step 4: Review and Approve

1. Create PR with ADR
2. Discuss in PR comments
3. Update status to "Accepted" when approved
4. Merge PR

## Current ADRs

| Number | Title | Status | Date |
|--------|-------|--------|------|
| [ADR-001](./ADR-001-two-repository-architecture.md) | Two-Repository Architecture | Accepted | 2025-10-14 |
| [ADR-002](./ADR-002-pointy-agents-template-adoption.md) | Adopt Pointy-agents Templates | Accepted | 2025-10-14 |
| [ADR-003](./ADR-003-diataxis-documentation-structure.md) | Diátaxis Documentation Structure | Accepted | 2025-10-14 |
| [ADR-004](./ADR-004-index-at-root.md) | Place INDEX.md at Root | Accepted | 2025-10-14 |

## Best Practices

### Write for the Future

ADRs are read by:
- Future team members who weren't part of the decision
- AI agents trying to understand project context
- Yourself in 6 months when you've forgotten the details

**Write clearly and comprehensively.**

### Document Rejected Options

Always document options you considered but didn't choose. This prevents future discussions from revisiting the same ground.

### Update Status

If a decision is superseded or deprecated, update the status and link to the new ADR.

### Keep It Concise

ADRs should be comprehensive but concise. Aim for 1-3 pages.

### Use Tables

Comparison tables make it easy to see trade-offs at a glance.

### Link to Related Issues

Always link to GitHub issues that prompted the decision.

## ADR vs. BDR

**ADR (Architectural Decision Record):**
- Technical decisions
- Architecture, technology, patterns
- How we build things

**BDR (Business Decision Record):**
- Business decisions
- Strategy, priorities, scope
- What we build and why

**Example:**
- ADR: "We chose React over Vue for the frontend"
- BDR: "We decided to build a mobile app before a web app"

See `../bdr/README.md` for Business Decision Records.

## Resources

- **ADR GitHub Organization:** https://adr.github.io/
- **Michael Nygard's ADR article:** http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions
- **Template source:** Adapted from AwayTomate and NeuroNarnia

## Questions?

For questions about ADRs:
1. Check this README
2. Review existing ADRs for examples
3. Ask in team communication channels
4. Reference the template

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

