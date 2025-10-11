# Pan Constitution

**Universal governance framework for AI-agent-built projects**

## Overview

The Pan Constitution defines the minimum baseline governance principles, development workflows, and quality standards that apply to all AI-agent-built projects. It provides a consistent foundation while allowing projects to extend it with their specific technical stacks, compliance requirements, and operational contexts.

## Purpose

This repository serves as the single source of truth for Pan governance. All projects inherit these principles and extend them with project-specific requirements. The Pan Constitution ensures:

- **Consistency** across all AI-agent-built projects
- **Traceability** of decisions and changes
- **Quality** through enforced standards and validation
- **Flexibility** for project-specific needs
- **Safety** through human oversight and approval

## Core Principles

The Pan Constitution defines seven non-negotiable principles:

1. **Constitutional Authority** - The constitution supersedes all other practices
2. **Initiative-Based Organization** - All work classified by topic (what) and initiative (why)
3. **AI Agent Coordination Framework** - Structured coordination with clear delegation rules
4. **Documentation-First Development** - Documentation drives AI agent behaviour
5. **Test-First Development** - Tests written before implementation
6. **Human Oversight and Approval** - AI agents cannot merge their own PRs
7. **Plain Language and Traceability** - Clear, explicit documentation with decision rationale

## Quick Start

### For New Projects

1. Read the [Pan Constitution](/.specify/memory/constitution.md)
2. Create your project constitution using the [template structure](/.specify/memory/constitution.md#project-constitution-structure)
3. Inherit Pan principles and add project-specific extensions
4. Implement the [universal file structure](/.specify/memory/constitution.md#universal-file-structure)
5. Follow the [universal development workflow](/.specify/memory/constitution.md#universal-development-workflow)

### For Existing Projects

1. Read the [Pan Constitution](/.specify/memory/constitution.md)
2. Assess your current constitution against Pan principles
3. Refactor your constitution to separate Pan-inherited and project-specific sections
4. Update `.specify/rules/*.mdc` files to use Pan + Project structure
5. Submit a PR with the migration

## Structure

```
.specify/
  memory/
    constitution.md          # Pan Constitution v1.0.0
  rules/
    [Pan-wide orchestrator rules - coming soon]
  templates/
    [Pan-wide templates - coming soon]

docs/
  getting-started/
    [Tutorials for adopting Pan Constitution]
  how-to/
    [Guides for common tasks]
  reference/
    [Reference material]
  explanation/
    [Explanations of Pan principles]
  ops/
    governance.md            # Pan governance procedures
    change-log.md            # Pan Constitution change log
  index.md                   # Documentation index

README.md                    # This file
AGENTS.md                    # Agent coordination for Pan repository
CONTRIBUTING.md              # Contribution guidelines
```

## Current Status

**Version:** 1.0.0  
**Status:** Active  
**Ratified:** 2025-10-11

### What's Included

- ✅ Pan Constitution v1.0.0
- ✅ Seven core principles
- ✅ Universal development workflow
- ✅ Universal file structure
- ✅ Universal metadata standards
- ✅ Project extension guidelines

### What's Coming

- ⏳ Pan-wide orchestrator rules (`.specify/rules/*.mdc`)
- ⏳ Pan-wide templates (`.specify/templates/*.md`)
- ⏳ Adoption guides and tutorials
- ⏳ Migration guides for existing projects
- ⏳ Validation tools and scripts

## Projects Using Pan Constitution

- [AwayTomate](https://github.com/bare-leisure/AwayTomate) - Event operations automation (migrating)
- [NeuroNarnia](https://github.com/kewtyboi/NeuroNarnia) - Neurodivergent community platform (planned)

## Contributing

The Pan Constitution is a living document that evolves based on learnings from projects using it. Contributions are welcome from:

- Projects using Pan Constitution (feedback, improvement suggestions)
- Pan Governance Team (amendments, new principles)
- External reviewers (audit, validation, best practices)

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Governance

The Pan Constitution is maintained by the Pan Governance Team. All amendments require:

1. Documented rationale and impact assessment
2. Cross-project impact analysis
3. Pan Governance Team approval
4. Version tracking and migration plan

See the [Pan Constitution Governance section](/.specify/memory/constitution.md#governance) for full details.

## License

The Pan Constitution is released under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Projects may use, adapt, and extend it freely, provided they:

1. Attribute the Pan Constitution
2. Share improvements back to the Pan repository
3. Use the same license for their extensions

## Contact

- **Repository:** https://github.com/kewtyboi/pan-constitution
- **Issues:** https://github.com/kewtyboi/pan-constitution/issues
- **Discussions:** https://github.com/kewtyboi/pan-constitution/discussions

---

**Pan Constitution v1.0.0** | Ratified 2025-10-11 | Last Amended 2025-10-11

