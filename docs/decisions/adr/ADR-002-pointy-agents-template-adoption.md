---
topic: architecture-decision
name: ADR-002 - Adopt Pointy-agents Agent Onboarding Templates
author: Manus AI
version: 1.0.0
date: 2025-10-14
description: Decision to use Pointy-agents 6-template agent onboarding system instead of NeuroNarnia 2-template system
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#8'
status: accepted
tags:
  - adr
  - agent-onboarding
  - templates
---

# ADR-002: Adopt Pointy-agents Agent Onboarding Templates

**Status:** Accepted  
**Date:** 2025-10-14  
**Deciders:** Pan Governance Team  
**Technical Story:** Epic #5, Scaffolding #8

## Context and Problem Statement

Three projects (NeuroNarnia, AwayTomate, Pointy-agents) have agent onboarding systems at different maturity levels. We need to decide which system to adopt for the Pan Constitution template.

**NeuroNarnia/AwayTomate approach:**
- 2 templates: `agent-memory-template.md`, `agent-personality-template.md`
- General-purpose templates
- No structured onboarding guide

**Pointy-agents approach:**
- 6 templates: memory-system, personality, current-projects, recent-insights, team-context, solution-pipeline
- Comprehensive onboarding guide with clear steps
- Maintenance cadence guidance
- More granular and actionable

## Decision Drivers

- **Actionability:** Templates should provide clear, actionable structure for new agents
- **Completeness:** System should cover all aspects of agent setup
- **Maintainability:** Templates should encourage regular updates
- **Proven Success:** Should be based on real-world usage
- **Scalability:** Should work for teams of varying sizes
- **Clarity:** Should be easy for new agents to understand and follow

## Considered Options

### Option 1: NeuroNarnia 2-Template System

**Approach:** Use `agent-memory-template.md` and `agent-personality-template.md` from NeuroNarnia.

**Pros:**
- Simpler (only 2 files to manage)
- Proven in NeuroNarnia (most mature project)
- General-purpose and flexible
- Less prescriptive

**Cons:**
- No operational memory file structure
- No onboarding guide
- Agents must figure out their own memory organization
- No maintenance cadence guidance
- Less actionable for new agents

**Implementation Effort:** Low (2 files to adapt)

### Option 2: Pointy-agents 6-Template System (CHOSEN)

**Approach:** Use Pointy-agents comprehensive template system:
- `memory-system-template.md` - Memory architecture
- `personality-template.md` - Agent personality
- `current-projects-template.md` - Active project tracking
- `recent-insights-template.md` - Learning and breakthroughs
- `team-context-template.md` - Team member information
- `solution-pipeline-template.md` - Problem backlog

Plus `onboarding-guide.md` with step-by-step instructions.

**Pros:**
- **More actionable:** Clear structure for operational memory files
- **Comprehensive onboarding:** Step-by-step guide included
- **Maintenance guidance:** Specifies update cadence (daily, weekly, monthly)
- **Proven structure:** Successfully used in Pointy-agents
- **Better organization:** Separates different types of memory
- **Scalable:** Works for individuals and teams

**Cons:**
- More files to maintain (6 templates vs. 2)
- More prescriptive (less flexibility)
- Newer system (less battle-tested than NeuroNarnia)

**Implementation Effort:** Medium (6 templates + guide to adapt)

### Option 3: Hybrid Approach

**Approach:** Use NeuroNarnia's general templates plus Pointy-agents' operational templates.

**Pros:**
- Best of both worlds
- Maximum flexibility

**Cons:**
- Confusing for users (which to use?)
- Redundant content
- Maintenance overhead
- No clear guidance

**Implementation Effort:** High (requires reconciling two systems)

## Decision Outcome

**Chosen option: "Pointy-agents 6-Template System"** because it:

1. **Provides clear, actionable structure** for new agents
2. **Includes comprehensive onboarding guide** with step-by-step instructions
3. **Specifies maintenance cadence** (daily, weekly, monthly updates)
4. **Separates concerns** (personality vs. memory vs. operational files)
5. **Scales better** for growing teams
6. **Reduces cognitive load** by providing clear templates for each memory type

The additional maintenance overhead (6 files vs. 2) is acceptable given the significantly better user experience and actionability.

### Implementation Strategy

**Phase 1: Adapt Templates (Week 1)**
1. Copy 6 templates from Pointy-agents
2. Make project-agnostic (remove Pointy-agents-specific content)
3. Add placeholders (`{{PROJECT_NAME}}`, etc.)
4. Ensure YAML front matter consistency

**Phase 2: Create Onboarding Guide (Week 1)**
5. Adapt `onboarding-guide.md` from Pointy-agents
6. Add Pan Constitution-specific guidance
7. Reference Pan principles and governance
8. Add troubleshooting section

**Phase 3: Integration (Week 2)**
9. Place templates in `.agent/agent-onboarding/`
10. Update root `AGENTS.md` to reference onboarding guide
11. Test with sample agent creation
12. Document in template README

### Positive Consequences

- **Faster agent onboarding:** Clear steps reduce setup time
- **Consistent agent structure:** All agents follow same pattern
- **Better memory organization:** Operational files keep agents organized
- **Maintenance discipline:** Cadence guidance encourages regular updates
- **Scalability:** System works for 1 agent or 20 agents
- **Knowledge retention:** Structured memory files preserve institutional knowledge

### Negative Consequences

- **More files to maintain:** 6 templates vs. 2 requires more effort
- **More prescriptive:** Less flexibility for agents who want different structure
- **Learning curve:** New agents must understand 6 templates instead of 2

### Mitigation Strategies

**For maintenance overhead:**
- Templates are stable once created
- Updates only needed when onboarding process changes
- Can mark some templates as "optional" if needed

**For prescriptiveness:**
- Document that templates are starting points
- Allow agents to customize after initial setup
- Provide guidance on when to deviate

**For learning curve:**
- Onboarding guide walks through each template
- Templates are self-documenting with clear sections
- Can create video walkthrough if needed

## Comparison Table

| Criterion | NeuroNarnia (2) | Pointy-agents (6) | Hybrid |
|-----------|----------------|-------------------|--------|
| Actionability | ⚠️ | ✅ | ⚠️ |
| Completeness | ⚠️ | ✅ | ✅ |
| Onboarding Guide | ❌ | ✅ | ⚠️ |
| Maintenance Guidance | ❌ | ✅ | ⚠️ |
| Simplicity | ✅ | ⚠️ | ❌ |
| Proven Success | ✅ | ⚠️ | ❌ |
| **Overall** | **Good** | **✅ Best** | **Not Recommended** |

## Template Files Included

### From Pointy-agents (6 templates + guide)
1. `memory-system-template.md` - Memory architecture definition
2. `personality-template.md` - Agent personality and communication style
3. `current-projects-template.md` - Active project tracking
4. `recent-insights-template.md` - Learning and breakthroughs
5. `team-context-template.md` - Team member information
6. `solution-pipeline-template.md` - Problem backlog
7. `onboarding-guide.md` - Step-by-step setup instructions

### From NeuroNarnia (assessment tools)
8. `agent-capability-assessment.md` - Capability framework
9. `agent-capability-test.md` - Self-assessment test suite

**Total: 9 files in `.agent/agent-onboarding/`**

## References

- Pointy-agents: https://github.com/kewtyboi/pointy-agents
- NeuroNarnia agent templates: `docs/agents/`
- Cross-project analysis: `docs/analysis/cross-project-file-inventory.md`
- Issue #8: Scaffold pan-constitution-template repository structure

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Accepted

