# Repository Guidelines

## Project Structure and Module Organization

The Pan Constitution repository is documentation-driven. Use these anchors:

- `.specify/memory/` - Pan Constitution and core governance assets
- `.specify/rules/` - Pan-wide orchestrator rules (coming soon)
- `.specify/templates/` - Pan-wide templates for planning, specs, tasks (coming soon)
- `docs/` - Canonical knowledge base following Diátaxis layout (getting-started, how-to, reference, explanation, ops)
- `.github/` - Shared issue, PR, and workflow templates

## Build, Test, and Development Commands

There is no central build pipeline. Validate changes locally by:

- `code docs/<file>.md` or your editor's Markdown preview for authoring checks
- `git status` before committing to confirm only intended files changed
- Markdown linting (coming soon)
- Link validation (coming soon)

## Coding Style and Naming Conventions

- UTF-8 with LF line endings
- Trim trailing whitespace except where Markdown hard-breaks are needed
- Use descriptive file names (e.g., `docs/how-to/adopt-pan-constitution.md`)
- Mirror the Diátaxis section structure
- Keep language plain and declarative; avoid "should" per the constitution's Plain Language and Traceability principle
- Use UK English spelling throughout

## Testing Guidelines

For documentation-only updates:
- Request peer review
- Include validation notes (links checked, screenshots, examples tested) in the PR Testing section
- Verify all internal links resolve correctly
- Verify all external links are accessible

For future automation code:
- Create contract and integration tests before implementation
- Ensure tests fail first, then commit with the change
- Document test artefacts and link them into `docs/ops/change-log.md`

## Commit and Pull Request Guidelines

- Follow Conventional Commit framing (`docs: add Pan Constitution v1.0.0`, `feat: add orchestrator rules`)
- Keep commits scoped; update documentation alongside code
- PRs must use `.github/pull_request_template.md`, include a short Summary, list concrete Changes, show Testing evidence, link issues, and apply relevant labels
- Run a Constitution Check before requesting review; note any justified deviations in the PR description
- All PRs require human approval before merge

## Mandatory First Steps (AI Agents)

Before beginning any work, AI agents must complete these steps in order:

1. **Read this AGENTS.md file completely** - Contains agent roles, delegation rules, and mandatory procedures
2. **Read the Pan Constitution** at `.specify/memory/constitution.md` - Understand the governance framework
3. **Identify initiative context** - Determine which initiative the work belongs to (currently `pan-governance-foundation`)
4. **Create or locate GitHub issue** - Document scope, context, deliverables
5. **Plan documentation updates** - Assess impact across topics AND initiatives
6. **Use enhanced YAML front matter** - All new/modified docs require enhanced metadata
7. **Verify constitutional compliance** - Confirm work aligns with Pan principles
8. **Never proceed without completing this checklist**

## Security and Configuration Tips

- Never commit secrets or personal data; use redacted examples
- Describe new integrations and access requirements in `docs/how-to/` before enabling them
- Align all changes with the Plain Language and Traceability principle in the constitution
- Flag risks early in the PR

## Agent Roster

The Pan Constitution repository is maintained by:

- **Documentation Specialist** - Maintains Pan Constitution, guides, and reference material
- **Governance Specialist** - Reviews amendments, conducts impact analysis, ensures cross-project consistency
- **Validation Specialist** - Develops and maintains validation tools, linting, link checking
- **Integration Specialist** - Helps projects adopt Pan Constitution, provides migration support

## Cross-Project Coordination

When working on the Pan Constitution, consider impact on:

- **AwayTomate** - Event operations automation (currently migrating to Pan Constitution)
- **NeuroNarnia** - Neurodivergent community platform (planned migration)
- **Future projects** - Any project adopting Pan Constitution

All amendments must include cross-project impact analysis.

