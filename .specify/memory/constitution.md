---
topic: governance-framework
name: Pan Constitution
author: Pan Governance Team
version: 1.0.0
date: 2025-10-11
description: Universal governance principles for all AI-agent-built projects
initiative: pan-governance-foundation
related_issues: []
status: active
tags:
  - pan-constitution
  - governance
  - universal-principles
  - ai-agents
---

# Pan Constitution

**Universal governance framework for AI-agent-built projects**

## Purpose

This Pan Constitution defines the minimum baseline governance principles, development workflows, and quality standards that apply to all AI-agent-built projects. Each project extends this baseline with project-specific principles, technical stacks, and compliance requirements.

The Pan Constitution is designed to be inherited by all projects, ensuring consistency in governance, traceability, and quality while allowing flexibility for project-specific needs.

## Core Principles

### I. Constitutional Authority (NON-NEGOTIABLE)

All projects must operate under a documented constitution that defines non-negotiable principles, governance processes, and compliance enforcement. The constitution supersedes all other practices.

**Implementation Requirements:**
- Every project must have a constitution file at `.specify/memory/constitution.md`
- Constitution must define core principles, technical standards, and governance processes
- All work must comply with constitutional principles
- Amendments require documented rationale and impact assessment
- Constitution must clearly separate Pan-inherited principles from project-specific extensions

**Validation Gates:**
- All PRs must verify constitutional compliance
- Regular governance assessment and framework review
- Human oversight and approval for constitutional changes
- Automated validation of constitution structure and completeness

**Rationale:** This meta-principle establishes the authority of the constitution itself, making all other principles enforceable. Without constitutional authority, governance becomes optional and inconsistent.

### II. Initiative-Based Organization (NON-NEGOTIABLE)

All work must be classified by both **topic** (what the work is about) and **initiative** (why the work exists) to enable cross-cutting change management and superior visibility into project evolution.

**Implementation Requirements:**
- All documentation requires enhanced YAML front matter with `topic`, `initiative`, `related_issues`, `status`
- All branches named as `[type]/[initiative]-[issue]-[slug]`
- All commits follow Conventional Commits with initiative context
- All PRs link to issues and note initiative impact
- Projects maintain an active initiatives registry with status tracking

**Validation Gates:**
- YAML front matter validation in CI pipeline
- Initiative classification validation against approved lists
- Cross-reference validation for related issues
- Documentation index regeneration on changes
- Branch naming compliance verification

**Rationale:** Initiative-based organization provides traceability for both AI agents and humans. It answers "why does this exist?" alongside "what does it do?", enabling better decision-making and change impact analysis.

### III. AI Agent Coordination Framework (NON-NEGOTIABLE)

AI agents operate under structured coordination with clear delegation rules, mandatory first steps, and human oversight requirements. Agents must demonstrate understanding of project context before executing work.

**Implementation Requirements:**
- Mandatory reading of `AGENTS.md` before any work begins
- Mandatory first steps checklist including issue/initiative assessment
- Enhanced documentation procedures with initiative context
- Human review required for all changes - AI agents cannot merge PRs
- Agent personality and memory system development where applicable
- Clear delegation rules defining which agents handle which work types

**Validation Gates:**
- Agent workflow compliance verification
- Human approval gates for all PRs
- Agent capability assessment and onboarding
- Cross-agent collaboration framework validation
- Mandatory first steps completion verification

**Rationale:** AI agents require explicit coordination frameworks to operate effectively in multi-agent environments. Without clear rules, agents may duplicate work, conflict with each other, or proceed without sufficient context.

### IV. Documentation-First Development (NON-NEGOTIABLE)

Documentation drives AI agent behaviour. All projects must maintain comprehensive, explicit documentation that agents can parse programmatically and humans can read naturally.

**Implementation Requirements:**
- All documentation under `docs/` using Diátaxis framework (Tutorial, How-To, Reference, Explanation)
- Enhanced YAML front matter with topic, initiative, related issues for all Markdown files
- Automated `INDEX.md` generation with initiative-based grouping
- Document lifecycle enforcement: CHANGELOG, INDEX, cross-references
- Quality validation: markdownlint, spell check, link validation
- Documentation updates in same PR as code changes

**Validation Gates:**
- Markdown linting and formatting validation
- Link checking and reference validation
- YAML front matter compliance verification
- Documentation completeness assessment
- Documentation-code synchronization verification

**Rationale:** AI agents rely on documentation as their primary source of truth. Incomplete or ambiguous documentation leads to incorrect assumptions and flawed implementations. Documentation-first ensures agents have the context they need.

### V. Test-First Development (NON-NEGOTIABLE)

All code changes must be accompanied by tests written before implementation. Tests must fail first (Red), then pass after implementation (Green), then be refactored for clarity (Refactor).

**Implementation Requirements:**
- Tests written before implementation (Red-Green-Refactor cycle)
- Minimum test coverage threshold defined per project (typically 80-85%)
- Automated test execution in CI pipeline
- Test results documented in PRs
- Test types defined per project (unit, integration, contract, system, compliance)

**Validation Gates:**
- Test coverage validation in CI
- Test execution must pass before merge
- Test documentation in PR descriptions
- Coverage threshold enforcement
- Test quality assessment (no trivial tests)

**Rationale:** Test-first development ensures that requirements are understood before implementation begins. It prevents scope creep, validates assumptions, and provides regression protection. For AI agents, tests serve as executable specifications.

### VI. Human Oversight and Approval (NON-NEGOTIABLE)

AI agents cannot merge their own PRs. All changes require human review and approval to ensure quality, safety, and alignment with project goals.

**Implementation Requirements:**
- All PRs require human approval before merge
- AI agents must demonstrate constitutional compliance in PR descriptions
- Capability assessment and onboarding validation required for new agents
- Cross-agent collaboration framework adherence
- Human review focuses on correctness, safety, and alignment (not style)

**Validation Gates:**
- Human approval gates for all PRs (enforced via GitHub branch protection)
- Agent accountability verification
- Compliance enforcement in PR reviews
- Review quality assessment (substantive, not rubber-stamp)

**Rationale:** Human oversight is the final safety mechanism in AI-agent-built projects. Agents may misinterpret requirements, introduce subtle bugs, or make decisions that conflict with unstated project goals. Human review catches these issues.

### VII. Plain Language and Traceability (NON-NEGOTIABLE)

Documentation must use plain, declarative language. Avoid vague terms like "should" without explicit rationale. Every decision must be traceable to a documented principle or requirement.

**Implementation Requirements:**
- Use "must" for non-negotiable requirements
- Use "should" only with explicit rationale for flexibility
- Document all decisions with links to principles or requirements
- Maintain change logs and decision logs
- Avoid jargon without definitions
- Use active voice and present tense

**Validation Gates:**
- Documentation review for vague language
- Traceability verification in PRs (all decisions linked to rationale)
- Change log completeness assessment
- Glossary maintenance for domain-specific terms

**Rationale:** AI agents interpret language literally. Vague terms like "should" or "consider" create ambiguity that agents cannot resolve. Plain language with explicit rationale ensures agents make correct decisions and humans can audit those decisions.

## Universal Development Workflow

### Branch and PR Standards

**Branch Naming:**
- Format: `[type]/[initiative]-[issue]-[slug]`
- Types: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `ops`
- Example: `feat/pan-governance-foundation-1-constitution`

**Commit Messages:**
- Follow Conventional Commits specification
- Include initiative context in scope
- Example: `feat(pan-governance-foundation): add Pan Constitution v1.0.0`

**Pull Requests:**
- Must link to issues with "Closes #XXX" or "Relates to #XXX"
- Must note initiative impact and cross-cutting changes
- Must include testing evidence (test results, screenshots, validation output)
- Must update documentation in same PR as code changes
- Must demonstrate constitutional compliance

**Human Review Requirements:**
- All PRs require at least one human approval
- AI agents cannot approve or merge PRs
- Review focuses on correctness, safety, alignment (not style)
- Reviewers verify constitutional compliance

### Mandatory First Steps (AI Agents)

Before beginning any work, AI agents must complete these steps in order:

1. **Read `AGENTS.md` completely** - Contains agent roles, delegation rules, and mandatory procedures
2. **Identify initiative context** - Determine which initiative the work belongs to
3. **Create or locate GitHub issue** - Document scope, context, deliverables
4. **Plan documentation updates** - Assess impact across topics AND initiatives
5. **Use enhanced YAML front matter** - All new/modified docs require enhanced metadata
6. **Verify constitutional compliance** - Confirm work aligns with Pan and project principles
7. **Never proceed without completing this checklist**

### Quality Assurance Process

**Pre-Commit:**
- Code formatting (project-specific formatter)
- Linting (project-specific linter)
- YAML front matter validation
- Documentation link checking

**CI Pipeline:**
- Comprehensive test suite execution
- Test coverage validation (project-specific threshold)
- Performance benchmark validation (project-specific thresholds)
- Documentation validation (linting, link checking, YAML validation)
- Security scanning (dependency vulnerabilities, secrets detection)

**Pre-Merge:**
- Human review and approval
- All CI checks passing
- Documentation updated
- Change log updated

## Universal File Structure

All projects must maintain this minimum file structure:

```
.specify/
  memory/
    constitution.md          # Project constitution (Pan + Project layers)
  rules/
    orchestrator-startup.mdc # Orchestrator agent startup protocol
    initiative-tracking.mdc  # Initiative classification rules
    project-structure.mdc    # Repository structure standards
    testing-standards.mdc    # Testing requirements
    privacy-security.mdc     # Privacy and security baseline
  templates/
    plan-template.md         # Initiative planning template
    spec-template.md         # Specification template
    tasks-template.md        # Task breakdown template

docs/
  getting-started/           # Diátaxis: Tutorials
  how-to/                    # Diátaxis: How-To Guides
  reference/                 # Diátaxis: Reference Material
  explanation/               # Diátaxis: Explanations
  ops/                       # Operations and governance
    governance.md            # Project-specific governance
    change-log.md            # Change log
  index.md                   # Auto-generated documentation index

.github/
  ISSUE_TEMPLATE/            # Issue templates
  pull_request_template.md   # PR template

README.md                    # Project overview and quick start
AGENTS.md                    # Agent coordination and workflow
CONTRIBUTING.md              # Contributor guidelines
```

Projects may add additional directories and files as needed, but must maintain this baseline.

## Universal Metadata Standards

### Enhanced YAML Front Matter

All Markdown documents in `docs/` require enhanced YAML front matter:

```yaml
---
topic: <Subject Area>        # What the document is about
initiative: <Initiative Name> # Why the document exists
related_issues: ['#70', '#93'] # GitHub issue connections
status: active               # Document lifecycle status
author: <Author Name>        # Document author
version: <Semantic Version>  # Document version (optional)
date: YYYY-MM-DD            # Last updated date
description: <Brief summary> # One-sentence description
tags:                        # Searchable tags
  - tag1
  - tag2
---
```

**Required Fields:**
- `topic`: Subject area classification
- `initiative`: Initiative classification
- `status`: One of `active`, `deprecated`, `archived`, `draft`
- `date`: Last updated date in ISO format (YYYY-MM-DD)

**Optional Fields:**
- `related_issues`: GitHub issue references
- `author`: Document author
- `version`: Semantic version (for versioned documents)
- `description`: Brief summary
- `tags`: Searchable tags

**Validation:**
- Initiative must exist in project's initiative registry
- Related issues must exist in GitHub
- Status must be one of the allowed values
- Date must be in ISO format

## Project-Specific Extensions

Each project must extend this Pan Constitution with project-specific principles and standards. The project constitution must clearly separate Pan-inherited principles from project-specific extensions.

### Required Project-Specific Sections

1. **Technical Stack and Architecture**
   - Programming languages, frameworks, libraries
   - Infrastructure and deployment platforms
   - Data storage and processing systems
   - External integrations and APIs

2. **Privacy and Compliance Requirements**
   - Regulatory context (GDPR, CCPA, industry-specific regulations)
   - Data handling and retention policies
   - Access control and least-privilege requirements
   - Consent and lawful basis for data processing
   - Logging and audit requirements

3. **Performance and Quality Standards**
   - Performance targets (latency, throughput, uptime)
   - Test coverage thresholds
   - Quality gates in CI pipeline
   - Monitoring and alerting requirements

4. **Accessibility Requirements**
   - Accessibility standards (WCAG, Section 508, etc.)
   - Validation procedures
   - Compliance testing requirements
   - Or explicit statement of "Not Applicable" with rationale

5. **Agent Roster and Specializations**
   - List of project-specific agents
   - Agent roles and responsibilities
   - Delegation rules
   - Agent coordination procedures

6. **Domain-Specific Terminology**
   - Glossary of project-specific terms
   - Acronyms and abbreviations
   - Domain concepts and models

### Project Constitution Structure

Project constitutions should follow this structure:

```markdown
# [Project Name] Constitution

## Pan Principles (Inherited from Pan Constitution v1.0.0)

This project inherits the following universal principles from the Pan Constitution:

1. Constitutional Authority
2. Initiative-Based Organization
3. AI Agent Coordination Framework
4. Documentation-First Development
5. Test-First Development
6. Human Oversight and Approval
7. Plain Language and Traceability

For full details, see [Pan Constitution v1.0.0](https://github.com/kewtyboi/pan-constitution).

## Project-Specific Principles

[Project-specific principles and standards]

## Technical Standards

[Project-specific technical stack, performance requirements, etc.]

## Development Workflow

[Project-specific workflow extensions beyond Pan baseline]

## Governance

[Project-specific governance extensions beyond Pan baseline]

**Version**: [X.Y.Z] | **Ratified**: [YYYY-MM-DD] | **Last Amended**: [YYYY-MM-DD]
```

## Governance

### Pan Constitution Authority

This Pan Constitution supersedes all project-specific constitutions. Projects may extend but not contradict Pan principles.

If a project requires an exception to a Pan principle, it must:
1. Document the exception with detailed rationale
2. Propose an alternative approach that achieves the same goal
3. Submit the exception for Pan Governance Team approval
4. Document the approved exception in the project constitution

### Amendment Process

Amendments to the Pan Constitution require:
1. Documented rationale and impact assessment
2. Cross-project impact analysis (all projects using Pan Constitution)
3. Pan Governance Team approval
4. Version tracking and ratification documentation
5. Migration plan for existing projects

**Version Numbering:**
- MAJOR: Backward-incompatible changes (projects must update)
- MINOR: New principles or sections added (projects should review)
- PATCH: Clarifications, wording, typo fixes (no action required)

### Compliance Enforcement

All projects must demonstrate Pan compliance:
- Constitutional compliance verification in all PRs
- Regular governance audits (quarterly recommended)
- Human oversight for constitutional changes
- Automated validation where possible

### Pan Governance Team

The Pan Governance Team is responsible for:
- Maintaining the Pan Constitution
- Reviewing and approving amendments
- Conducting cross-project impact analysis
- Providing guidance to projects on Pan compliance
- Resolving conflicts between Pan and project-specific principles

**Version**: 1.0.0 | **Ratified**: 2025-10-11 | **Last Amended**: 2025-10-11

