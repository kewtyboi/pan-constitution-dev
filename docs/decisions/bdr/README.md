---
topic: business-decisions
name: Business Decision Records (BDR) README
author: Pan Governance Team
version: 1.0.0
date: 2025-10-14
description: Guide to creating and maintaining Business Decision Records in Pan-governed projects
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#7'
status: active
tags:
  - bdr
  - decision-records
  - governance
  - documentation
  - business
---

# Business Decision Records (BDR)

This directory contains Business Decision Records (BDRs) for the Pan Constitution template repository project.

## What is a BDR?

A Business Decision Record (BDR) is a document that captures an important business or strategic decision made along with its context and consequences.

**Purpose:**
- Document significant business and strategic decisions
- Capture rationale and business context
- Enable future understanding of "why" from a business perspective
- Facilitate stakeholder alignment and communication
- Support AI agent understanding of project priorities and scope

## BDR vs. ADR

**BDR (Business Decision Record):**
- Business and strategic decisions
- Scope, priorities, features, timelines
- Market positioning, user needs
- Resource allocation, budgets
- **What** we build and **why**

**ADR (Architectural Decision Record):**
- Technical and architectural decisions
- Technology choices, patterns, infrastructure
- System design, code organization
- **How** we build things

**Examples:**

| Decision | Type | Rationale |
|----------|------|-----------|
| "Build mobile app before web app" | BDR | Business priority |
| "Use React for mobile app" | ADR | Technical choice |
| "Target enterprise customers first" | BDR | Market strategy |
| "Deploy on AWS instead of Azure" | ADR | Infrastructure choice |
| "Launch MVP in 3 months" | BDR | Timeline/scope |
| "Use microservices architecture" | ADR | System design |

## When to Create a BDR

Create a BDR when making decisions about:

- **Scope:** What features to build or exclude
- **Priorities:** What to build first, what to defer
- **Target audience:** Who we're building for
- **Market positioning:** How we differentiate
- **Resource allocation:** Budget, team size, timeline
- **Strategic direction:** Long-term vision, pivots
- **Partnerships:** Collaborations, integrations
- **Licensing:** Open source vs. proprietary

**Examples:**
- "We decided to create a template repository instead of inline documentation"
- "We prioritized agent onboarding over advanced features"
- "We target AI-first development teams"

## When NOT to Create a BDR

Don't create BDRs for:

- **Technical decisions:** Use ADR instead
- **Trivial choices:** Minor feature tweaks
- **Obvious decisions:** Following industry standards
- **Temporary decisions:** Short-term experiments
- **Implementation details:** How to code a feature

## BDR Numbering

BDRs are numbered sequentially, separate from ADRs:

- `BDR-001-template-repository-approach.md`
- `BDR-002-target-audience.md`
- `BDR-003-feature-priorities.md`

**Format:** `BDR-NNN-short-title.md`

**Rules:**
- Use zero-padded numbers (001, 002, etc.)
- Use kebab-case for title
- Keep title short but descriptive
- Never reuse numbers
- Separate numbering from ADRs

## BDR Template

Use the template at `TEMPLATE.md` when creating new BDRs.

**Required sections:**
1. **YAML Front Matter** - Metadata
2. **Title** - BDR number and title
3. **Status** - Proposed, Accepted, Rejected, Deprecated, Superseded
4. **Context and Problem Statement** - What business decision needs to be made and why
5. **Decision Drivers** - Business factors influencing the decision
6. **Considered Options** - All options evaluated (minimum 2)
7. **Decision Outcome** - Chosen option and business rationale
8. **Consequences** - Business impact and outcomes

## BDR Status Values

| Status | Meaning |
|--------|---------|
| **Proposed** | Decision is under discussion |
| **Accepted** | Decision has been approved and is being executed |
| **Rejected** | Decision was considered but not adopted |
| **Deprecated** | Decision is no longer relevant |
| **Superseded by BDR-XXX** | Decision replaced by newer BDR |

## Creating a New BDR

### Step 1: Copy Template

```bash
cp docs/decisions/bdr/TEMPLATE.md docs/decisions/bdr/BDR-NNN-your-title.md
```

### Step 2: Fill in YAML Front Matter

```yaml
---
topic: business-decision
name: BDR-NNN - Your Decision Title
author: Your Name
version: 1.0.0
date: YYYY-MM-DD
description: Brief description of the business decision
initiative: initiative-name
related_issues:
  - '#123'
status: proposed
tags:
  - bdr
  - relevant-tags
---
```

### Step 3: Write the BDR

Follow the template structure:
1. Clear problem statement from business perspective
2. List business decision drivers (market, users, resources, etc.)
3. Document all options considered (pros/cons from business view)
4. State chosen option and business rationale
5. Document business consequences and impact

### Step 4: Review and Approve

1. Create PR with BDR
2. Discuss with stakeholders in PR comments
3. Update status to "Accepted" when approved
4. Merge PR

## Current BDRs

| Number | Title | Status | Date |
|--------|-------|--------|------|
| _No BDRs yet_ | _Create your first BDR!_ | - | - |

## Best Practices

### Focus on Business Value

BDRs should explain:
- **Why** this matters to users/customers
- **What** business problem it solves
- **How** it aligns with strategy
- **When** we expect to see results

### Include Stakeholder Input

BDRs often involve multiple stakeholders:
- Product managers
- Business leaders
- Users/customers
- Partners

Document their input and concerns.

### Quantify When Possible

Include metrics:
- Expected user impact
- Revenue implications
- Time to market
- Resource requirements
- Risk levels

### Link to Strategy

Connect decisions to:
- Company/project vision
- Strategic goals
- OKRs or KPIs
- Market opportunities

### Document Alternatives

Always document options you considered but didn't choose. This prevents future discussions from revisiting the same ground.

### Update Status

If a decision is superseded or deprecated, update the status and link to the new BDR.

## BDR vs. ADR Summary

| Aspect | BDR | ADR |
|--------|-----|-----|
| **Focus** | Business, strategy, scope | Technical, architecture, implementation |
| **Audience** | Stakeholders, product team | Engineering team, architects |
| **Questions** | What? Why? When? Who? | How? Which technology? What pattern? |
| **Drivers** | Market, users, budget, timeline | Performance, maintainability, scalability |
| **Impact** | Business outcomes, user value | System quality, developer experience |
| **Examples** | Feature priorities, target market | Framework choice, system design |

## Resources

- **ADR README:** `../adr/README.md` - For technical decisions
- **Template:** `TEMPLATE.md` - Use this to create new BDRs

## Questions?

For questions about BDRs:
1. Check this README
2. Review ADR README for comparison
3. Ask in team communication channels
4. Reference the template

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Active

