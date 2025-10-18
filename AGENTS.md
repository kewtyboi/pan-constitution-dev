---
topic: agent-collaboration
name: AI Agent Collaboration Guide
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Comprehensive guide for AI agents collaborating on {{PROJECT_NAME}}
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - agents
  - collaboration
  - onboarding
  - ai-human-collaboration
---

# AI Agent Collaboration Guide

Welcome, AI agents! This document provides comprehensive guidance for effective collaboration on {{PROJECT_DISPLAY_NAME}}. The Pan Constitution framework enables structured human-AI collaboration through clear roles, processes, and communication protocols.

## Quick Start for New Agents

If you're joining this project as an AI agent, follow these steps in order:

1. **Read the Constitution**: Review [`.specify/memory/constitution.md`](.specify/memory/constitution.md) to understand the governance framework and core principles
2. **Complete Onboarding**: Work through the [agent onboarding guide](.agent/agent-onboarding/onboarding-guide.md) to understand project context and expectations
3. **Introduce Yourself**: Post an introduction in [`.agent/agent-hub/agent-communication.md`](.agent/agent-hub/agent-communication.md) following the introduction protocol
4. **Review Your Role**: Study your assigned [role profile](.agent/agent-role-profiles/) to understand your responsibilities and collaboration patterns
5. **Check Current Work**: Review the agent communication hub to understand ongoing work and avoid duplication

## Agent System Structure

The `.agent/` directory contains all agent-related files and is organised as follows:

```
.agent/
├── agent-hub/              # Communication and collaboration
│   └── agent-communication.md
├── agent-onboarding/       # Templates and guides for new agents
│   ├── onboarding-guide.md
│   ├── personality-template.md
│   ├── memory-system-template.md
│   ├── project-brief-template.md
│   ├── task-template.md
│   ├── handoff-template.md
│   ├── learning-log-template.md
│   ├── decision-log-template.md
│   └── communication-template.md
└── agent-role-profiles/    # Pre-configured agent profiles
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
    ├── orchestrator.md
    ├── product-manager.md
    ├── qa-engineer.md
    ├── security-specialist.md
    ├── technical-writer.md
    ├── ui-designer.md
    ├── ux-researcher.md
    └── validation-specialist.md
```

### Directory Purposes

**`agent-hub/`**: Central communication hub where agents coordinate work, share insights, request help, and hand off tasks. This is the primary collaboration space.

**`agent-onboarding/`**: Templates and guides for new agents. These templates provide structure for common agent activities like task planning, handoffs, and decision logging.

**`agent-role-profiles/`**: Pre-configured profiles for 19 different agent roles. Each profile defines responsibilities, collaboration patterns, and success criteria for that role.

## Core Principles for Agents

### 1. Documentation-First Development

**Always document before implementing**. Documentation is not an afterthought but a primary deliverable that guides implementation.

**Use the Diátaxis structure**: Organise documentation into getting-started (tutorials), how-to (guides), reference (specifications), and explanation (concepts).

**Maintain YAML front matter**: All markdown files must include YAML front matter with metadata. Use the templates in `.agent/agent-onboarding/` as examples.

**Update the documentation index**: After creating or modifying documentation, regenerate the index:

```bash
npm run docs:index
```

**Document decisions**: Create ADRs for architectural decisions and BDRs for business decisions. Use the templates in `docs/decisions/adr/TEMPLATE.md` and `docs/decisions/bdr/TEMPLATE.md`.

### 2. Transparent Communication

**Post introductions**: When joining the project, introduce yourself in the agent communication hub following the introduction protocol below.

**Share insights**: Document learnings and insights in your memory files and share relevant discoveries with other agents.

**Coordinate before major changes**: Check the agent communication hub before starting significant work to avoid conflicts and duplication.

**Use conventional commits**: Follow the conventional commits standard for clear, parseable commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Handoff clearly**: When completing work or going offline, post a handoff message following the handoff protocol below.

### 3. Quality Assurance

**Run validation before committing**: Always run the full validation suite before committing changes:

```bash
npm run validate
```

**Follow linting rules**: Adhere to markdown linting rules, UK English spelling, and formatting standards.

**Test your changes**: Verify that your changes work as intended and don't break existing functionality.

**Review your own work**: Before requesting review, review your changes as if you were a peer reviewer.

### 4. Sustainable Practices

**Keep memory files updated**: Maintain your agent memory files to preserve context across sessions.

**Archive completed work**: Move completed tasks and decisions to appropriate archive locations.

**Document decisions in ADRs/BDRs**: Don't make significant decisions without documenting the rationale, alternatives, and consequences.

**Leave clear handoff notes**: Enable the next agent to continue your work without confusion or duplication.

**Think long-term**: Prioritise maintainability and clarity over short-term convenience.

## Agent Roles

The Pan Constitution Template provides 19 pre-configured agent role profiles. Each role has specific responsibilities, collaboration patterns, and success criteria.

### Development Roles

**AI Engineer** ([`.agent/agent-role-profiles/ai-engineer.md`](.agent/agent-role-profiles/ai-engineer.md))
- Designs and implements AI/ML features
- Integrates LLM APIs and AI services
- Optimises model performance and costs

**Backend Architect** ([`.agent/agent-role-profiles/backend-architect.md`](.agent/agent-role-profiles/backend-architect.md))
- Designs system architecture and data models
- Makes technology stack decisions
- Ensures scalability and performance

**Backend Developer** ([`.agent/agent-role-profiles/backend-developer.md`](.agent/agent-role-profiles/backend-developer.md))
- Implements backend services and APIs
- Writes database queries and migrations
- Ensures code quality and testing

**Frontend Developer** ([`.agent/agent-role-profiles/frontend-developer.md`](.agent/agent-role-profiles/frontend-developer.md))
- Implements user interfaces
- Ensures responsive design and accessibility
- Integrates with backend APIs

**Full-Stack Developer** ([`.agent/agent-role-profiles/fullstack-developer.md`](.agent/agent-role-profiles/fullstack-developer.md))
- Works across frontend and backend
- Implements end-to-end features
- Bridges frontend-backend integration

### Operations Roles

**DevOps Engineer** ([`.agent/agent-role-profiles/devops-engineer.md`](.agent/agent-role-profiles/devops-engineer.md))
- Manages CI/CD pipelines
- Handles deployment and infrastructure
- Monitors system health and performance

**QA Engineer** ([`.agent/agent-role-profiles/qa-engineer.md`](.agent/agent-role-profiles/qa-engineer.md))
- Designs and implements test strategies
- Ensures quality through automated testing
- Validates functionality and performance

**Security Specialist** ([`.agent/agent-role-profiles/security-specialist.md`](.agent/agent-role-profiles/security-specialist.md))
- Identifies and mitigates security risks
- Implements security best practices
- Conducts security audits and reviews

### Product and Design Roles

**Product Manager** ([`.agent/agent-role-profiles/product-manager.md`](.agent/agent-role-profiles/product-manager.md))
- Defines product vision and roadmap
- Prioritises features and requirements
- Coordinates stakeholder communication

**UX Researcher** ([`.agent/agent-role-profiles/ux-researcher.md`](.agent/agent-role-profiles/ux-researcher.md))
- Conducts user research and testing
- Analyses user behaviour and feedback
- Informs design decisions with data

**UI Designer** ([`.agent/agent-role-profiles/ui-designer.md`](.agent/agent-role-profiles/ui-designer.md))
- Creates visual designs and prototypes
- Maintains design systems and tokens
- Ensures brand consistency

### Specialised Roles

**Data Scientist** ([`.agent/agent-role-profiles/data-scientist.md`](.agent/agent-role-profiles/data-scientist.md))
- Analyses data and builds models
- Provides insights and recommendations
- Implements data pipelines

**ML Engineer** ([`.agent/agent-role-profiles/ml-engineer.md`](.agent/agent-role-profiles/ml-engineer.md))
- Implements machine learning systems
- Optimises model training and inference
- Manages ML infrastructure

**Technical Writer** ([`.agent/agent-role-profiles/technical-writer.md`](.agent/agent-role-profiles/technical-writer.md))
- Creates and maintains documentation
- Ensures clarity and consistency
- Follows Diátaxis framework

**Documentation Specialist** ([`.agent/agent-role-profiles/documentation-specialist.md`](.agent/agent-role-profiles/documentation-specialist.md))
- Maintains documentation quality
- Organises and structures content
- Ensures documentation standards

**Governance Specialist** ([`.agent/agent-role-profiles/governance-specialist.md`](.agent/agent-role-profiles/governance-specialist.md))
- Ensures constitutional compliance
- Maintains governance processes
- Facilitates decision-making

**Integration Specialist** ([`.agent/agent-role-profiles/integration-specialist.md`](.agent/agent-role-profiles/integration-specialist.md))
- Integrates external services and APIs
- Manages third-party dependencies
- Ensures reliable integrations

**Validation Specialist** ([`.agent/agent-role-profiles/validation-specialist.md`](.agent/agent-role-profiles/validation-specialist.md))
- Maintains validation infrastructure
- Ensures quality standards
- Automates quality checks

**Orchestrator** ([`.agent/agent-role-profiles/orchestrator.md`](.agent/agent-role-profiles/orchestrator.md))
- Coordinates multi-agent work
- Assigns tasks to appropriate agents
- Ensures coherent project progress

## Communication Protocols

### Introducing Yourself

When joining the project, post an introduction in `.agent/agent-hub/agent-communication.md` following this format:

```markdown
## [Your Name] - [Date]

**Role**: [Your primary role from the profiles above]
**Capabilities**: [Key skills, tools, and technologies you work with]
**Focus**: [What you'll be working on initially]
**Availability**: [When you're active - e.g., "Weekdays 9-17 GMT" or "On-demand"]
**Collaboration Preferences**: [How you prefer to work with other agents]

**Introduction**: [Brief introduction about your approach and any relevant context]
```

### Handoff Protocol

When completing work or going offline, post a handoff message to enable smooth continuation:

```markdown
## Handoff: [Your Name] → [Next Agent/General] - [Date]

**Completed**:
- [Specific task 1 with outcome]
- [Specific task 2 with outcome]
- [Reference to commits, PRs, or documentation]

**In Progress**:
- [Current work state and what's been done]
- [What remains to be completed]
- [Any blockers or dependencies]

**Next Steps**:
- [Immediate next action required]
- [Subsequent actions in priority order]
- [Estimated effort or complexity]

**Notes**:
- [Important context or decisions made]
- [Known issues or concerns]
- [Suggestions for the next agent]

**Files Modified**:
- [List of files changed with brief description of changes]

**Related Issues/PRs**:
- [Links to relevant issues or pull requests]
```

### Requesting Help

When you need assistance from other agents or humans:

```markdown
## Help Needed: [Topic] - [Date]

**Requested By**: [Your Name]
**Role**: [Your role]
**Issue**: [Clear, concise description of the problem]
**Context**: [Relevant background and what you've tried]
**Urgency**: [Low/Medium/High with justification]
**Preferred Expertise**: [What type of agent or human would be best suited to help]

**Additional Information**:
- [Any error messages, logs, or relevant data]
- [Links to related files or documentation]
```

### Sharing Insights

When you discover something valuable for the project:

```markdown
## Insight: [Topic] - [Date]

**Shared By**: [Your Name]
**Category**: [Technical/Process/Documentation/Other]
**Summary**: [Brief summary of the insight]

**Details**:
[Detailed explanation of what you learned and why it's valuable]

**Recommendations**:
- [Specific actions or changes suggested]
- [Who should be aware of this]

**References**:
- [Links to relevant documentation, code, or external resources]
```

## Memory Management

Agents are encouraged to maintain their own memory systems to preserve context across sessions. The template provides structure for this in `.agent/agent-onboarding/`.

### Memory File Structure

**`personality.md`**: Your persona, approach, and working style. Helps maintain consistency across sessions.

**`memory-system.md`**: Your memory architecture and how you organise information.

**`memory/current-projects.md`**: Active projects and their current state.

**`memory/recent-insights.md`**: Recent learnings and discoveries.

**`memory/team-context.md`**: Information about team members and collaboration patterns.

**`memory/solution-pipeline.md`**: Planned solutions and approaches.

**`memory/chat-export.md`**: Optional export of important conversations.

### Memory Best Practices

**Update regularly**: Keep memory files current to maintain context across sessions.

**Be specific**: Include concrete details, not just general statements.

**Link to evidence**: Reference commits, PRs, issues, and documentation.

**Archive old content**: Move completed or outdated information to archive files.

**Share relevant insights**: Post valuable discoveries to the agent communication hub.

## Collaboration Best Practices

### Before Starting Work

1. **Check the agent communication hub** for ongoing work and recent updates
2. **Review related issues and PRs** to understand context and avoid duplication
3. **Verify your role alignment** - ensure the work matches your role profile
4. **Announce your intention** if the work is significant or might affect other agents

### During Work

1. **Commit frequently** with clear, conventional commit messages
2. **Update documentation** alongside code changes in the same commit
3. **Run validation regularly** to catch issues early
4. **Communicate blockers** immediately rather than working around them
5. **Respect other agents' work** - coordinate before modifying their contributions

### After Completing Work

1. **Run full validation** to ensure quality
2. **Update relevant documentation** including INDEX.md if needed
3. **Post a handoff message** with clear next steps
4. **Create or update issues** to track remaining work
5. **Share insights** that might benefit other agents

### Code Review Participation

When reviewing other agents' work:

- **Be constructive**: Focus on improvement, not criticism
- **Be specific**: Reference exact lines or sections
- **Explain reasoning**: Don't just point out issues, explain why they matter
- **Suggest alternatives**: Offer concrete suggestions for improvement
- **Acknowledge good work**: Recognise quality contributions

## Tools and Automation

### Validation

The project includes comprehensive validation to ensure quality:

```bash
# Run all validation checks
npm run validate

# Individual checks
npm run lint:md         # Markdown linting
npm run lint:spelling   # Spell checking (UK English)
npm run lint:links      # Link verification
npm run format          # Code formatting
```

**Always run validation before committing**. The CI/CD pipeline will reject commits that fail validation.

### Documentation

```bash
# Generate documentation index from YAML front matter
npm run docs:index

# [Add project-specific documentation commands here]
```

### Git Workflow

```bash
# Create feature branch following naming convention
git checkout -b feat/issue-number-short-description

# Make changes and commit with conventional commits
git add .
git commit -m "feat(scope): description"

# Push and create pull request
git push -u origin feat/issue-number-short-description
gh pr create --fill
```

### GitHub CLI

```bash
# List issues
gh issue list

# View issue details
gh issue view <issue-number>

# Create new issue
gh issue create --title "Title" --body "Description"

# List pull requests
gh pr list

# Create pull request
gh pr create --fill

# Check CI status
gh pr checks
```

## Project-Specific Guidance

[Customise this section with project-specific guidance for agents. Examples below:]

### Domain Knowledge

[Add information about the project domain that agents should understand]

### Technical Constraints

[List any technical constraints or requirements specific to this project]

### Coding Standards

[Reference project-specific coding standards beyond the Pan Constitution defaults]

### Testing Requirements

[Describe testing expectations and requirements]

### Deployment Process

[Explain how deployment works for this project]

## Getting Help

If you need assistance:

- **Agent Hub**: Post in [`.agent/agent-hub/agent-communication.md`](.agent/agent-hub/agent-communication.md)
- **Documentation**: Search [`docs/`](docs/) and [`INDEX.md`](INDEX.md)
- **Issues**: Check [GitHub Issues]({{PROJECT_URL}}/issues) for existing discussions
- **Discussions**: Use [GitHub Discussions]({{PROJECT_URL}}/discussions) for questions
- **Human Review**: Tag human maintainers in PRs or issues when needed

## Related Documents

- **[Constitution](.specify/memory/constitution.md)**: Governance framework and core principles
- **[Contributing Guidelines](CONTRIBUTING.md)**: Contribution process for humans and agents
- **[Git Workflow](docs/how-to/git-workflow-and-commit-standards.md)**: Detailed Git workflow and commit standards
- **[Architecture](ARCHITECTURE.md)**: System architecture and design
- **[README](README.md)**: Project overview and quick start

## Customisation Guide

This AGENTS.md is generated from the Pan Constitution Template. To customise it for your project:

1. **Add project-specific guidance**: Fill in the "Project-Specific Guidance" section with domain knowledge, constraints, and standards
2. **Update tool commands**: Add any project-specific npm scripts or commands to the "Tools and Automation" section
3. **Customise role emphasis**: If certain roles are more important for your project, emphasise them in the "Agent Roles" section
4. **Add domain-specific protocols**: If your project requires specific communication protocols, add them to the "Communication Protocols" section
5. **Update links**: Ensure all placeholder links ({{PROJECT_URL}}) are replaced by the bootstrap script
6. **Remove this section**: Delete this "Customisation Guide" section once you've completed customisation

---

**Welcome to the team! We're excited to collaborate with you in building {{PROJECT_DISPLAY_NAME}}.**

