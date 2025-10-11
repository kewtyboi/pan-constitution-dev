---
status: draft
version: 0.1.0
date: 2025-10-11
---

# Contributing to [PROJECT NAME]

**For Human Contributors:** This guide is for humans providing oversight, review, and approval. If you are an AI agent, read `AGENTS.md` instead.

**For AI Agents:** Do NOT read this file. Read `AGENTS.md` for your working agreements and coordination rules.

---

## Overview

[PROJECT NAME] is built and delivered by AI agents with human oversight. This guide explains how humans contribute to the project through:

- **Strategic direction** - Setting roadmap and priorities
- **Review and approval** - Approving AI-generated changes
- **Quality assurance** - Verifying outputs meet requirements
- **Incident response** - Handling production issues and escalations

## Quick Start

**PROJECT-SPECIFIC:** Fill in setup instructions for human contributors.

### Prerequisites

- Git and GitHub account
- [PROJECT-SPECIFIC: List required tools and access]

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/[ORG]/[REPO].git
cd [REPO]

# [PROJECT-SPECIFIC: Add setup commands]
```

### Environment Configuration

**PROJECT-SPECIFIC:** Document required environment variables and configuration files.

## Understanding AI-First Delivery

### What AI Agents Do

AI agents are responsible for:

- Writing all code and documentation
- Implementing features and fixes
- Running tests and validations
- Creating pull requests
- Responding to review feedback

### What Humans Do

Humans are responsible for:

- Setting strategic direction and priorities
- Creating and triaging GitHub issues
- Reviewing and approving pull requests
- Merging approved changes
- Monitoring production systems
- Handling incidents and escalations

### What Humans Do NOT Do

Humans should NOT:

- Write code directly (let AI agents do this)
- Commit directly to main branch (use PR workflow)
- Bypass review process (all changes require approval)
- Merge AI-generated PRs without review

## GitHub Workflow

### Creating Issues

When you identify work that needs to be done:

1. **Create a GitHub issue** with clear problem statement and acceptance criteria
2. **Add labels** for categorization (bug, feature, documentation, etc.)
3. **Assign to milestone** if part of a planned release
4. **Add to project board** if using GitHub Projects for tracking
5. **Wait for AI agent** to pick up the issue and create a PR

**Issue Template:**

```markdown
## Problem Statement

[Clear description of the problem or requirement]

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Context

[Any additional context, constraints, or references]

## Related Issues

- #XX (if applicable)
```

### Reviewing Pull Requests

When an AI agent creates a PR:

1. **Read the PR description** - Understand what changed and why
2. **Review the changes** - Check code quality, documentation, tests
3. **Verify constitutional compliance** - Ensure changes align with project constitution
4. **Check for risks** - Identify any security, privacy, or operational risks
5. **Request changes** if needed - Provide clear, actionable feedback
6. **Approve** when satisfied - Use GitHub's approval workflow
7. **Merge** after approval - Squash or merge as appropriate for project

**Review Checklist:**

- [ ] Changes align with issue requirements
- [ ] Code quality meets project standards
- [ ] Tests are present and passing
- [ ] Documentation is updated
- [ ] No security or privacy risks introduced
- [ ] Constitutional compliance verified
- [ ] No breaking changes without justification

### Merging Pull Requests

**Merge Strategy:**

**PROJECT-SPECIFIC:** Define merge strategy (squash, merge commit, rebase).

**Who Can Merge:**

- Repository maintainers
- Project owners
- Designated reviewers with merge permissions

**When to Merge:**

- All required approvals received
- All CI checks passing
- No unresolved review comments
- Constitutional compliance verified

## Quality Standards

### Code Quality

**PROJECT-SPECIFIC:** Define code quality standards (linting, formatting, complexity limits).

### Documentation Quality

All changes must include updated documentation:

- README.md for user-facing changes
- AGENTS.md for AI agent workflow changes
- Technical documentation for implementation details
- Change log entries for significant changes

### Test Coverage

**PROJECT-SPECIFIC:** Define test coverage requirements and testing strategy.

## Constitutional Compliance

All contributions must comply with the project constitution:

- **Pan Constitution:** [https://github.com/kewtyboi/pan-constitution](https://github.com/kewtyboi/pan-constitution)
- **Project Constitution:** `.specify/memory/constitution.md`

**Key Principles:**

1. **Constitutional Authority** - Constitution supersedes all other practices
2. **Human Oversight and Approval** - AI agents cannot merge their own PRs
3. **Documentation-First Development** - Documentation drives AI agent behaviour
4. **Test-First Development** - Tests written before implementation
5. **Plain Language and Traceability** - Clear rationale for all decisions

## Security and Privacy

### Security Review

Changes affecting security must be reviewed for:

- Input validation and sanitization
- Authentication and authorization
- Secrets management
- Dependency vulnerabilities
- API security

### Privacy Review

Changes affecting data handling must be reviewed for:

- Data minimization
- Consent management
- Data retention and deletion
- Compliance with privacy regulations
- Third-party data sharing

**PROJECT-SPECIFIC:** Add project-specific security and privacy requirements.

## Incident Response

### Reporting Incidents

If you discover a production issue:

1. **Create a GitHub issue** with `incident` label
2. **Notify project owner** via agreed communication channel
3. **Document symptoms** and impact clearly
4. **Provide reproduction steps** if applicable

### Incident Severity

**PROJECT-SPECIFIC:** Define incident severity levels and response times.

### Post-Incident Review

After resolving an incident:

1. **Document root cause** in the incident issue
2. **Identify preventive measures** to avoid recurrence
3. **Update runbooks** with lessons learned
4. **Create follow-up issues** for preventive work

## Communication Channels

**PROJECT-SPECIFIC:** Define communication channels for human contributors.

- GitHub Issues: [Primary/Secondary]
- GitHub Discussions: [Enabled/Disabled]
- Email: [Contact email if applicable]
- Other: [Slack, Discord, etc. if applicable]

## Project-Specific Guidelines

**PROJECT-SPECIFIC:** Add any additional guidelines specific to your project:

- Deployment procedures
- Release management
- Monitoring and observability
- On-call rotation
- Escalation procedures

## Resources

### Essential Documentation

- [README.md](README.md) - Project overview and quick start
- [AGENTS.md](AGENTS.md) - AI agent working agreements (for reference only)
- [Pan Constitution](https://github.com/kewtyboi/pan-constitution) - Universal principles
- `.specify/memory/constitution.md` - Project-specific constitution

### Technical References

**PROJECT-SPECIFIC:** Link to key technical documentation.

## Getting Help

**PROJECT-SPECIFIC:** Define how human contributors can get help.

- GitHub Issues: For bug reports and feature requests
- GitHub Discussions: For questions and community interaction
- Documentation: Check resources section for detailed guides
- Project Owner: [Contact information]

---

**Document Status:** Draft v0.1.0 | **Last Updated:** 2025-10-11

**For Projects Using This Template:**

1. Replace `[PROJECT NAME]`, `[ORG]`, `[REPO]` with your project details
2. Fill in all `PROJECT-SPECIFIC` sections with your project's information
3. Remove this footer section
4. Update status to `active` and version to `1.0.0`
5. Commit to your project repository

---

Thank you for contributing to [PROJECT NAME]! Your oversight and review ensure AI-delivered software meets the highest standards of quality, security, and privacy.

