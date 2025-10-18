---
topic: governance
name: Project Governance
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Governance structure and processes for {{PROJECT_NAME}}
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - governance
  - process
  - organization
---

# Project Governance

This document describes the governance structure and decision-making processes for {{PROJECT_NAME}}.

## Governance Framework

This project follows the **Pan Constitution** governance framework, which establishes:

1. **Documentation-First Development**
2. **Quality Assurance Standards**
3. **Sustainable Practices**
4. **Transparent Governance**
5. **Plain Language and Traceability**

See [Constitution](.specify/memory/constitution.md) for full details.

## Decision-Making

### Architectural Decisions

Architectural decisions are documented in **ADRs** (Architectural Decision Records):
- Location: [`docs/decisions/adr/`](../decisions/adr/)
- Template: [`docs/decisions/adr/TEMPLATE.md`](../decisions/adr/TEMPLATE.md)
- Process: Create ADR → Review → Approve → Implement

### Business Decisions

Business decisions are documented in **BDRs** (Business Decision Records):
- Location: [`docs/decisions/bdr/`](../decisions/bdr/)
- Template: [`docs/decisions/bdr/TEMPLATE.md`](../decisions/bdr/TEMPLATE.md)
- Process: Create BDR → Stakeholder review → Approve → Execute

## Roles and Responsibilities

### Project Team

[Define your project team structure]

### Contributors

[Define contributor roles and expectations]

### Maintainers

[Define maintainer responsibilities]

## Contribution Process

1. **Identify need** - Create or find an issue
2. **Discuss approach** - Comment on issue or create discussion
3. **Create branch** - Follow naming convention
4. **Develop** - Follow coding standards and constitution
5. **Test** - Ensure all tests pass
6. **Document** - Update documentation
7. **Submit PR** - Use PR template
8. **Review** - Address feedback
9. **Merge** - Maintainer merges when approved

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for details.

## Quality Standards

### Code Quality

- Follow project coding standards
- Maintain test coverage
- Pass all CI/CD checks
- Use conventional commits

### Documentation Quality

- Use Diátaxis structure
- Include YAML front matter
- Keep INDEX.md updated
- Follow UK English spelling

### Review Process

- All changes require PR review
- At least one approval required
- CI/CD must pass
- Constitutional compliance verified

## Communication

### Channels

- **GitHub Issues**: Bug reports, feature requests
- **GitHub Discussions**: Questions, ideas, community
- **Pull Requests**: Code review, technical discussion
- **Agent Hub**: AI agent coordination

### Meetings

[Define any regular meetings or sync processes]

## Related Documents

- [Constitution](../../.specify/memory/constitution.md)
- [CONTRIBUTING](../../CONTRIBUTING.md)
- [ADRs](../decisions/adr/)
- [BDRs](../decisions/bdr/)
