---
topic: project-overview
name: {{PROJECT_DISPLAY_NAME}} - README
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Main README for {{PROJECT_NAME}} - A project governed by the Pan Constitution
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - overview
  - getting-started
  - project-information
---

# {{PROJECT_DISPLAY_NAME}}

> A project governed by the [Pan Constitution](https://github.com/kewtyboi/pan-constitution-dev) - ensuring sustainable, collaborative, and principled development.

## Overview

{{PROJECT_DISPLAY_NAME}} is [brief description of what this project does - replace this placeholder with your project's purpose].

This project follows the **Pan Constitution** governance framework, which provides a comprehensive foundation for sustainable software development. The constitution establishes core principles, processes, and standards that enable effective collaboration between human developers and AI agents whilst maintaining high quality and long-term maintainability.

### Key Features

[Customise this section with your project's key features. Examples below:]

- **Feature 1**: [Description of your first key feature]
- **Feature 2**: [Description of your second key feature]
- **Feature 3**: [Description of your third key feature]

### Pan Constitution Benefits

By adopting the Pan Constitution framework, this project benefits from:

- **Documentation-First Development**: Comprehensive Diátaxis-structured documentation that serves both humans and AI agents
- **AI Agent Collaboration**: Structured onboarding and role profiles enabling effective AI-human collaboration
- **Quality Assurance**: Automated validation including markdown linting, spell-checking, and link verification
- **Transparent Governance**: Architectural Decision Records (ADRs) and Business Decision Records (BDRs) for all significant decisions
- **Sustainable Practices**: Long-term maintainability prioritised over short-term convenience
- **Standardised Workflows**: Consistent Git workflows, commit standards, and contribution processes

## Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 22.x or later ([download](https://nodejs.org/))
- **Package Manager**: npm (included with Node.js) or pnpm
- **Git**: Version control system ([download](https://git-scm.com/))
- [Add any project-specific prerequisites here]

### Installation

```bash
# Clone the repository
git clone https://github.com/{{GITHUB_ORG}}/{{PROJECT_NAME}}.git
cd {{PROJECT_NAME}}

# Install dependencies
npm install

# Run validation to ensure setup is correct
npm run validate
```

### First Steps

After installation, follow these steps to familiarise yourself with the project:

1. **Read the Constitution**: Review [`.specify/memory/constitution.md`](.specify/memory/constitution.md) to understand the governance framework
2. **Explore Documentation**: Browse [`docs/getting-started/`](docs/getting-started/) for tutorials and onboarding materials
3. **Join as Agent**: If you're an AI agent, follow [`.agent/agent-onboarding/onboarding-guide.md`](.agent/agent-onboarding/onboarding-guide.md)
4. **Review Governance**: Understand decision-making processes in [`docs/ops/governance.md`](docs/ops/governance.md)
5. **Check Architecture**: Review system design in [`ARCHITECTURE.md`](ARCHITECTURE.md)

### Development Workflow

```bash
# Create a feature branch
git checkout -b feat/your-feature-name

# Make your changes and test them
npm run validate

# Commit using conventional commits
git commit -m "feat(scope): description of your change"

# Push and create a pull request
git push -u origin feat/your-feature-name
gh pr create
```

## Project Structure

The project follows a standardised structure defined by the Pan Constitution:

```
{{PROJECT_NAME}}/
├── .agent/                  # AI agent collaboration system
│   ├── agent-hub/          # Communication and coordination
│   ├── agent-onboarding/   # Onboarding templates and guides
│   ├── agent-prompt/       # Custom IDE prompts
│   └── agent-role-profiles/ # Pre-configured agent roles
├── .github/                 # GitHub workflows and templates
│   ├── workflows/          # CI/CD automation
│   └── ISSUE_TEMPLATE/     # Issue templates
├── .specify/                # Project governance and memory
│   ├── memory/             # Project constitution and context
│   └── rules/              # Governance rules and standards
├── docs/                    # Diátaxis documentation
│   ├── getting-started/    # Tutorials for learning
│   ├── how-to/             # Step-by-step guides
│   ├── reference/          # Technical specifications
│   ├── explanation/        # Conceptual documentation
│   ├── decisions/          # ADRs and BDRs
│   └── ops/                # Operational documentation
├── scripts/                 # Automation and utilities
├── AGENTS.md                # Agent coordination guide
├── ARCHITECTURE.md          # System architecture overview
├── CHANGELOG.md             # Version history
├── CONTRIBUTING.md          # Contribution guidelines
└── INDEX.md                 # Auto-generated documentation index
```

### Directory Purposes

**`.agent/`**: Contains all AI agent-related files including role profiles, onboarding templates, and communication hubs. This enables effective human-AI collaboration.

**`.github/`**: GitHub-specific configuration including CI/CD workflows for validation, issue templates, and pull request templates.

**`.specify/`**: Governance and project memory. The constitution defines core principles, whilst rules provide specific guidance on standards and practices.

**`docs/`**: All project documentation following the Diátaxis framework, which separates content into tutorials, how-to guides, reference material, and explanations.

**`scripts/`**: Automation scripts for documentation generation, validation, and project maintenance.

## Documentation

Our documentation follows the [Diátaxis](https://diataxis.fr/) framework, which organises content by user needs:

### Documentation Categories

**[Getting Started](docs/getting-started/)** - Learning-oriented tutorials
- New user onboarding
- Step-by-step learning paths
- Hands-on examples

**[How-To Guides](docs/how-to/)** - Problem-oriented guides
- Specific task instructions
- Best practices
- Common workflows

**[Reference](docs/reference/)** - Information-oriented specifications
- API documentation
- Configuration options
- Technical specifications

**[Explanation](docs/explanation/)** - Understanding-oriented discussions
- Architectural concepts
- Design decisions
- Background context

See [`INDEX.md`](INDEX.md) for a complete, auto-generated documentation index.

### Generating Documentation Index

The documentation index is automatically generated from YAML front matter:

```bash
npm run docs:index
```

## Contributing

We welcome contributions from both human developers and AI agents. Please read the following before contributing:

1. **[CONTRIBUTING.md](CONTRIBUTING.md)** - Comprehensive contribution guidelines
2. **[docs/how-to/git-workflow-and-commit-standards.md](docs/how-to/git-workflow-and-commit-standards.md)** - Git workflow and commit message standards
3. **[AGENTS.md](AGENTS.md)** - AI agent collaboration guide

### For Human Contributors

- Follow the conventional commits standard for all commit messages
- Ensure all validation passes before submitting pull requests
- Update documentation alongside code changes
- Create ADRs for significant architectural decisions

### For AI Agents

If you're an AI agent joining this project:

1. Complete the [agent onboarding guide](.agent/agent-onboarding/onboarding-guide.md)
2. Review your [role profile](.agent/agent-role-profiles/) to understand your responsibilities
3. Introduce yourself in the [agent communication hub](.agent/agent-hub/agent-communication.md)
4. Follow the collaboration protocols defined in [AGENTS.md](AGENTS.md)

## Governance

This project is governed by the **Pan Constitution**, which establishes a comprehensive framework for sustainable development.

### Core Principles

**Documentation-First**: All significant work is documented before implementation. Documentation is treated as a first-class deliverable, not an afterthought.

**Sustainable Development**: Long-term maintainability is prioritised over short-term gains. Code and documentation are written for future contributors.

**Transparent Decision-Making**: All architectural and business decisions are recorded in ADRs and BDRs with clear rationale and context.

**Quality Assurance**: Automated validation ensures consistency and quality across all project artefacts.

**Collaborative Excellence**: Effective collaboration between humans and AI agents is enabled through structured processes and clear communication protocols.

### Decision Records

**Architectural Decision Records (ADRs)**: Document significant architectural decisions, alternatives considered, and consequences. See [`docs/decisions/adr/`](docs/decisions/adr/).

**Business Decision Records (BDRs)**: Document business and strategic decisions affecting the project. See [`docs/decisions/bdr/`](docs/decisions/bdr/).

### Constitution

The full Pan Constitution is available at [`.specify/memory/constitution.md`](.specify/memory/constitution.md). This document defines the principles, processes, and standards that govern this project.

## Validation and Quality

The project includes automated validation to ensure quality and consistency:

```bash
# Run all validation checks
npm run validate

# Individual checks
npm run lint:md         # Markdown linting
npm run lint:spelling   # Spell checking
npm run lint:links      # Link verification
npm run format          # Code formatting
```

### Validation Standards

- **Markdown Linting**: Ensures consistent markdown formatting
- **Spell Checking**: UK English spelling with project-specific dictionary
- **Link Verification**: Validates all internal and external links
- **Front Matter**: Validates YAML front matter on all markdown files

## Technology Stack

[Customise this section with your project's technology stack. Example below:]

- **Runtime**: Node.js 22.x
- **Package Manager**: npm/pnpm
- [Add your project-specific technologies]

## Licence

[Specify your licence here - MIT, Apache 2.0, GPL, etc.]

This project is licenced under the [Licence Name]. See [LICENCE](LICENCE) for full licence text.

## Links

- **Documentation**: [{{PROJECT_URL}}/docs]({{PROJECT_URL}}/docs)
- **Issues**: [{{PROJECT_URL}}/issues]({{PROJECT_URL}}/issues)
- **Discussions**: [{{PROJECT_URL}}/discussions]({{PROJECT_URL}}/discussions)
- **Pull Requests**: [{{PROJECT_URL}}/pulls]({{PROJECT_URL}}/pulls)
- **Pan Constitution**: [https://github.com/kewtyboi/pan-constitution-dev](https://github.com/kewtyboi/pan-constitution-dev)

## Contact

- **Project Lead**: {{PROJECT_TEAM}}
- **Email**: [your-email@example.com] - Replace with your contact email
- **Chat**: [Your chat platform] - Replace with your communication platform

## Customisation Guide

This README is generated from the Pan Constitution Template. To customise it for your project:

1. **Replace all placeholders**: The `bootstrap.sh` script automatically replaces `{{PLACEHOLDER}}` values
2. **Update project description**: Replace the overview section with your project's actual purpose
3. **Add key features**: List your project's main features in the Key Features section
4. **Update prerequisites**: Add any project-specific prerequisites beyond Node.js and Git
5. **Customise technology stack**: Replace the example technology stack with your actual stack
6. **Set licence**: Specify your chosen licence and update the LICENCE file
7. **Update contact information**: Replace placeholder contact details with real information
8. **Remove this section**: Delete this "Customisation Guide" section once you've completed customisation

---

Built with the Pan Constitution framework for sustainable, collaborative development

