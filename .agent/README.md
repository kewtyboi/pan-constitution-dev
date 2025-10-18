---
topic: agent-system
name: Agent System Documentation
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Comprehensive documentation for the AI agent collaboration system
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - agents
  - system-architecture
  - documentation
---

# Agent System Documentation

## Overview

The `.agent/` directory contains the complete AI agent collaboration system for {{PROJECT_NAME}}. This system enables multiple AI agents to work together effectively on the project whilst maintaining individual memory, personality, and coordination.

The agent system is designed to support:

- **Individual agent identity** through personality and memory systems
- **Structured onboarding** for new agents joining the project
- **Role-based collaboration** with 19 pre-configured agent profiles
- **Communication protocols** for coordination and handoffs
- **IDE integration** for enhanced agent workflows

## Directory Structure

```
.agent/
├── README.md                    # This file - system overview
├── agent-hub/                   # Communication and coordination
│   └── agent-communication.md   # Central hub for agent communication
├── agent-onboarding/            # Onboarding system for new agents
│   ├── onboarding-guide.md      # Complete onboarding guide
│   ├── personality-template.md  # Template for agent personality
│   ├── memory-system-template.md # Template for memory architecture
│   ├── current-projects-template.md
│   ├── recent-insights-template.md
│   ├── team-context-template.md
│   ├── solution-pipeline-template.md
│   ├── agent-capability-assessment.md
│   └── agent-capability-test.md
├── agent-prompt/                # IDE integration prompts
│   ├── -start.md                # Project startup prompt
│   ├── -willow-wizard.md        # Guided workflow prompt
│   └── -cleanup.md              # Code cleanup prompt
└── agent-role-profiles/         # Pre-configured role profiles (19 total)
    ├── orchestrator.md
    ├── ai-engineer.md
    ├── backend-architect.md
    ├── backend-developer.md
    ├── data-scientist.md
    ├── devops-engineer.md
    ├── documentation-specialist.md
    ├── frontend-developer.md
    ├── fullstack-developer.md
    ├── governance-specialist.md
    ├── integration-specialist.md
    ├── ml-engineer.md
    ├── product-manager.md
    ├── qa-engineer.md
    ├── security-specialist.md
    ├── technical-writer.md
    ├── ui-designer.md
    ├── ux-researcher.md
    └── validation-specialist.md
```

## Architecture

### Core Components

#### 1. Agent Hub (`agent-hub/`)

The communication centre for all agents working on the project.

**Purpose**: Centralised coordination, handoffs, and collaboration

**Key File**: `agent-communication.md`
- Agent introductions
- Handoff protocols
- Help requests
- Status updates
- Active participant roster

**Usage**:
```markdown
# Post introduction when joining
# Document handoffs when switching agents
# Request help when blocked
# Share important updates
```

#### 2. Agent Onboarding (`agent-onboarding/`)

Complete onboarding system for new agents joining the project.

**Purpose**: Standardised agent setup and integration

**Key Files**:
- `onboarding-guide.md`: Step-by-step onboarding process
- `personality-template.md`: Template for creating agent personality
- `memory-system-template.md`: Template for memory architecture
- `*-template.md`: Templates for memory files
- `agent-capability-assessment.md`: Self-assessment framework
- `agent-capability-test.md`: Capability verification test

**Onboarding Flow**:
1. Create personality profile
2. Set up memory system
3. Create memory files (current-projects, recent-insights, team-context, solution-pipeline)
4. Create personal folders (patterns, innovations, users, frameworks)
5. Introduce yourself in agent hub
6. Complete capability assessment

#### 3. Agent Prompts (`agent-prompt/`)

IDE-integrated prompts for enhanced agent workflows.

**Purpose**: Quick access to common agent tasks via IDE

**Key Files**:
- `-start.md`: Project startup and context loading
- `-willow-wizard.md`: Guided workflow for complex tasks
- `-cleanup.md`: Code cleanup and refactoring

**IDE Integration**:
- **Cursor**: Copy to `.cursor/commands/`
- **Codex**: Copy to `.codex/prompts/`
- **Other IDEs**: Use as reference or manual prompts

#### 4. Agent Role Profiles (`agent-role-profiles/`)

Pre-configured profiles for 19 common agent roles.

**Purpose**: Role-specific guidance and best practices

**Available Roles**:

| Category | Roles |
|----------|-------|
| **Development** | AI Engineer, Backend Architect, Backend Developer, Frontend Developer, Full-Stack Developer |
| **Operations** | DevOps Engineer, QA Engineer, Security Specialist, Validation Specialist |
| **Product & Design** | Product Manager, UX Researcher, UI Designer |
| **Specialised** | Data Scientist, ML Engineer, Integration Specialist |
| **Documentation** | Documentation Specialist, Technical Writer |
| **Governance** | Governance Specialist, Orchestrator |

**Profile Structure**:
- Role overview and responsibilities
- Required skills (technical and soft)
- Typical tasks and workflows
- Collaboration patterns
- Tools and resources
- Success criteria
- Getting started guide

### Agent Memory System

Each agent maintains an individual memory system in `agents/<agent-name>/`:

```
agents/<agent-name>/
├── personality.md              # Agent persona and approach
├── memory-system.md            # Memory architecture
└── memory/                     # Active memory files
    ├── current-projects.md     # Active work tracking
    ├── recent-insights.md      # Learnings and breakthroughs
    ├── team-context.md         # Team member information
    ├── solution-pipeline.md    # Problem backlog
    ├── chat-export.md          # Optional chat history
    ├── patterns/               # Personal problem patterns
    ├── innovations/            # Personal creative solutions
    ├── users/                  # Personal user context
    └── frameworks/             # Personal reusable approaches
```

**Memory Maintenance Cadence**:
- **Daily**: Update current-projects.md
- **Twice weekly**: Add to recent-insights.md
- **Weekly**: Review current-projects.md and solution-pipeline.md
- **Monthly**: Update team-context.md, review personality.md
- **Quarterly**: Deep review of memory-system.md and personality.md

## Getting Started

### For New Agents

1. **Read the Constitution**
   ```bash
   # Start here to understand project governance
   cat .specify/memory/constitution.md
   ```

2. **Complete Onboarding**
   ```bash
   # Follow the comprehensive onboarding guide
   cat .agent/agent-onboarding/onboarding-guide.md
   ```

3. **Choose Your Role**
   ```bash
   # Review available role profiles
   ls -la .agent/agent-role-profiles/
   cat .agent/agent-role-profiles/<your-role>.md
   ```

4. **Set Up Your Memory**
   ```bash
   # Create your agent directory
   mkdir -p agents/<your-name>/memory/{patterns,innovations,users,frameworks}
   
   # Copy templates
   cp .agent/agent-onboarding/personality-template.md agents/<your-name>/personality.md
   cp .agent/agent-onboarding/memory-system-template.md agents/<your-name>/memory-system.md
   cp .agent/agent-onboarding/current-projects-template.md agents/<your-name>/memory/current-projects.md
   cp .agent/agent-onboarding/recent-insights-template.md agents/<your-name>/memory/recent-insights.md
   cp .agent/agent-onboarding/team-context-template.md agents/<your-name>/memory/team-context.md
   cp .agent/agent-onboarding/solution-pipeline-template.md agents/<your-name>/memory/solution-pipeline.md
   ```

5. **Introduce Yourself**
   ```bash
   # Add your introduction to the agent hub
   vim .agent/agent-hub/agent-communication.md
   ```

### For Existing Agents

1. **Check Agent Hub**
   ```bash
   # Review recent communications
   cat .agent/agent-hub/agent-communication.md
   ```

2. **Update Your Memory**
   ```bash
   # Update your memory files
   vim agents/<your-name>/memory/current-projects.md
   vim agents/<your-name>/memory/recent-insights.md
   ```

3. **Review Your Role**
   ```bash
   # Refresh role-specific guidance
   cat .agent/agent-role-profiles/<your-role>.md
   ```

## Communication Protocols

### Introduction Protocol

When joining the project, post in `.agent/agent-hub/agent-communication.md`:

```markdown
## [Your Name] - [Date]

**Role**: [Your primary role]
**Capabilities**: [Key skills and tools]
**Focus**: [What you'll be working on]
**Availability**: [When you're active]
**Background**: [Brief background and strengths]
```

### Handoff Protocol

When completing work or going offline:

```markdown
## Handoff: [Your Name] → [Next Agent] - [Date]

**Completed**:
- [List of completed tasks with references]

**In Progress**:
- [Current work state with file paths]

**Next Steps**:
- [Prioritised list of what needs to happen next]

**Blockers**:
- [Any issues preventing progress]

**Notes**:
- [Important context, decisions, or gotchas]
```

### Help Request Protocol

When you need assistance:

```markdown
## Help Needed: [Topic] - [Date]

**Requested By**: [Your Name]
**Issue**: [Clear description of the problem]
**Context**: [Relevant background and what you've tried]
**Urgency**: [Low/Medium/High]
**Preferred Skills**: [What kind of agent would be most helpful]
```

### Status Update Protocol

For significant progress or decisions:

```markdown
## Status Update: [Topic] - [Date]

**Agent**: [Your Name]
**Update**: [What changed or was decided]
**Impact**: [Who/what is affected]
**Action Required**: [What others need to do, if anything]
```

## Best Practices

### Documentation-First Development

1. **Document before coding**: Write specs, ADRs, or design docs first
2. **Update alongside changes**: Keep docs in sync with code
3. **Use YAML front matter**: All markdown files need proper metadata
4. **Follow Diátaxis structure**: getting-started, how-to, reference, explanation
5. **Generate index**: Run `npm run docs:index` after doc changes

### Quality Assurance

1. **Validate before committing**:
   ```bash
   npm run validate        # All checks
   npm run lint:md         # Markdown linting
   npm run lint:spelling   # Spell checking
   npm run format          # Code formatting
   ```

2. **Use conventional commits**:
   ```bash
   feat(scope): add new feature
   fix(scope): fix bug
   docs(scope): update documentation
   style(scope): formatting changes
   refactor(scope): code refactoring
   test(scope): add tests
   chore(scope): maintenance tasks
   ```

3. **Test thoroughly**: Verify changes work as expected
4. **UK English spelling**: Consistent language across all docs
5. **Follow linting rules**: Respect markdown and code style

### Collaboration

1. **Check agent hub first**: Review recent activity before starting
2. **Coordinate overlapping work**: Communicate to avoid conflicts
3. **Share insights**: Post learnings that help other agents
4. **Respect others' work**: Discuss before overriding
5. **Clear commit messages**: Make history easy to follow
6. **Update documentation**: Keep everything current
7. **Leave handoff notes**: Help the next agent succeed

### Memory Management

1. **Update regularly**: Keep memory files current
2. **Archive completed work**: Move finished items to archive
3. **Document decisions**: Use ADRs for architecture, BDRs for business
4. **Maintain context**: Ensure continuity across sessions
5. **Review periodically**: Follow maintenance cadence
6. **Share relevant insights**: Post to agent hub when helpful

## IDE Integration

### Cursor IDE

1. Create commands directory:
   ```bash
   mkdir -p .cursor/commands
   ```

2. Copy agent prompts:
   ```bash
   cp .agent/agent-prompt/* .cursor/commands/
   ```

3. Access via Cursor's command palette

### Codex IDE

1. Create prompts directory:
   ```bash
   mkdir -p .codex/prompts
   ```

2. Copy agent prompts:
   ```bash
   cp .agent/agent-prompt/* .codex/prompts/
   ```

3. Access via Codex's prompt system

### Other IDEs

Use agent prompts as reference or create custom integration:

1. Review `.agent/agent-prompt/` files
2. Adapt to your IDE's custom command system
3. Or use as manual prompt templates

## Troubleshooting

### Common Issues

#### Agent Directory Creation Fails

**Problem**: Cannot create `agents/<name>/` directory

**Solutions**:
1. Check permissions: `ls -la agents/`
2. Create parent: `mkdir -p agents`
3. Fix ownership: `sudo chown -R $USER:$USER agents/`

#### Template Files Not Found

**Problem**: Cannot find template files

**Solutions**:
1. Verify location: `ls -la .agent/agent-onboarding/`
2. Check working directory: `pwd`
3. Re-clone if missing

#### Communication Hub Conflicts

**Problem**: Merge conflicts in agent-communication.md

**Solutions**:
1. Pull latest: `git pull origin main`
2. Resolve conflicts manually
3. Keep all agent entries
4. Update "Last Updated" date

#### Memory Files Out of Sync

**Problem**: Memory files outdated or inconsistent

**Solutions**:
1. Review maintenance cadence
2. Set up reminders for updates
3. Use git history to track changes
4. Archive old information

### Getting Help

1. **Agent Hub**: Post in `.agent/agent-hub/agent-communication.md`
2. **Documentation**: Review `docs/` directory
3. **Issues**: Create GitHub issue with details
4. **Onboarding Guide**: Check troubleshooting section

## Related Documentation

### Essential Reading

- [AGENTS.md](../AGENTS.md): Agent collaboration guide
- [Constitution](../.specify/memory/constitution.md): Project governance
- [CONTRIBUTING.md](../CONTRIBUTING.md): Contribution guidelines
- [Git Workflow](../docs/how-to/git-workflow-and-commit-standards.md): Git standards

### Agent-Specific

- [Onboarding Guide](agent-onboarding/onboarding-guide.md): Complete onboarding
- [Agent Communication Hub](agent-hub/agent-communication.md): Central coordination
- [Role Profiles](agent-role-profiles/): Role-specific guidance

### Project Context

- [README.md](../README.md): Project overview
- [ARCHITECTURE.md](../ARCHITECTURE.md): System architecture
- [INDEX.md](../INDEX.md): Documentation index

## Frequently Asked Questions

### General

**Q: Do I need to create agent files if I'm the only agent?**
A: Yes. The structure ensures consistency and makes future agent onboarding easier.

**Q: Can I customise my memory system?**
A: Yes, you can add to it, but maintain the core files for consistency.

**Q: How often should I update memory files?**
A: Follow the maintenance cadence: daily for current-projects, twice weekly for insights, weekly reviews.

### Technical

**Q: Which role profile should I use?**
A: Choose based on your primary responsibilities. You can reference multiple profiles if needed.

**Q: Can I create a custom role profile?**
A: Yes, use an existing profile as a template and customise for your needs.

**Q: How do I handle multiple concurrent roles?**
A: Create a single agent identity but reference multiple role profiles in your personality.

### Process

**Q: When should I post in the agent hub?**
A: On joining, major updates, handoffs, help requests, and significant decisions.

**Q: How do I coordinate with other agents?**
A: Check agent hub first, post your intentions, respond to others' posts, use handoff protocol.

**Q: What if I disagree with another agent's approach?**
A: Discuss in agent hub, reference constitution and ADRs, escalate to orchestrator if needed.

## Version History

- **1.0.0** ({{CREATION_DATE}}): Initial agent system documentation

---

**Welcome to the {{PROJECT_NAME}} agent system! We're excited to collaborate with you.**

