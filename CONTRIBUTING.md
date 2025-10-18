---
topic: contribution-guide
name: Contributing to {{PROJECT_DISPLAY_NAME}}
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Comprehensive contributor onboarding guide covering environment setup, workflows, and expectations for {{PROJECT_DISPLAY_NAME}} collaborators
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - contributing
  - onboarding
  - workflow
  - documentation
  - collaboration
---

# Contributing to {{PROJECT_DISPLAY_NAME}}

We welcome contributions from all collaborators - both human developers and AI agents. This guide provides everything you need to get started with development and contribution to the {{PROJECT_DISPLAY_NAME}} project.

## Quick Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 22.x or later ([download](https://nodejs.org/))
- **Git**: Version control system ([download](https://git-scm.com/))
- **GitHub CLI** (recommended): For easier GitHub operations ([download](https://cli.github.com/))
- [Add any project-specific prerequisites here, e.g., PostgreSQL, Docker, etc.]

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/{{GITHUB_ORG}}/{{PROJECT_NAME}}.git
cd {{PROJECT_NAME}}

# Install dependencies
npm install

# [Add any project-specific setup steps here, e.g., database setup, environment configuration]

# Validate your setup
npm run validate
```

### Environment Configuration

[Customise this section with your project's environment configuration needs. Example below:]

Create a `.env` file in the project root with the following variables:

```bash
# [Add your environment variables here]
# Example:
# DATABASE_URL=postgresql://user:pass@localhost:5432/{{PROJECT_NAME}}
# API_KEY=your_api_key_here
```

**Important**: Never commit `.env` files or secrets to the repository. The `.env` file is included in `.gitignore`.

## Development Workflow

### Before Starting Work

1. **Check for existing issues**: Search [GitHub Issues]({{PROJECT_URL}}/issues) to see if your idea or bug is already being discussed
2. **Create or claim an issue**: If no issue exists, create one describing your proposed changes. If an issue exists, comment to claim it
3. **Review related documentation**: Read relevant documentation in [`docs/`](docs/) to understand the context
4. **Understand the architecture**: Review [`ARCHITECTURE.md`](ARCHITECTURE.md) to understand system design
5. **Create a feature branch**: Follow the naming convention: `<type>/<issue-number>-<short-description>`

**Branch Naming Convention**:
- `feat/123-add-user-authentication` - New features
- `fix/124-resolve-login-bug` - Bug fixes
- `docs/125-update-api-docs` - Documentation changes
- `refactor/126-improve-auth-logic` - Code refactoring
- `test/127-add-unit-tests` - Test additions
- `chore/128-update-dependencies` - Maintenance tasks

### Making Changes

#### 1. Follow Conventional Commits

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates, etc.

**Examples**:

```bash
git commit -m "feat(auth): add JWT authentication"
git commit -m "fix(api): resolve null pointer in user endpoint"
git commit -m "docs(readme): update installation instructions"
```

#### 2. Update Documentation Alongside Code

**Documentation is not an afterthought**. When you change code, update the relevant documentation in the same commit.

- Update API documentation when changing endpoints
- Update README or guides when changing user-facing features
- Update architecture docs when making architectural changes
- Create or update ADRs for significant architectural decisions

#### 3. Add or Update Tests

All functionality must be tested. When you add or modify features:

- Add unit tests for individual functions and components
- Add integration tests for component interactions
- Add end-to-end tests for user workflows (if applicable)
- Ensure existing tests still pass

```bash
# Run tests
npm test

# Run tests in watch mode during development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

#### 4. Run Validation Before Committing

Always run the full validation suite before committing:

```bash
npm run validate
```

This runs:
- Markdown linting
- Spell checking (UK English)
- Link verification
- Code formatting checks
- [Add any project-specific validation here]

#### 5. Maintain Code Quality

- Follow the project's coding standards
- Keep functions small and focused
- Write clear, self-documenting code
- Add comments for complex logic
- Avoid duplication (DRY principle)
- Handle errors gracefully

### Submitting Changes

#### 1. Push Your Branch

```bash
git push -u origin <your-branch-name>
```

#### 2. Create a Pull Request

Use GitHub CLI for easy PR creation:

```bash
gh pr create --fill
```

Or create manually on GitHub with this template:

```markdown
## Description
[Clear description of what this PR does]

## Related Issue
Closes #[issue-number]

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)
- [ ] Test additions or updates

## Changes Made
- [Change 1]
- [Change 2]
- [Change 3]

## Testing
[Describe how you tested these changes]

## Documentation
- [ ] I have updated the documentation accordingly
- [ ] I have added/updated tests
- [ ] I have run `npm run validate` and all checks pass

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Additional Notes
[Any additional context or notes for reviewers]
```

#### 3. Request Review

- PRs are automatically assigned to reviewers based on CODEOWNERS
- You can request additional reviewers if needed
- Respond to review feedback promptly
- Make requested changes in new commits (don't force-push during review)

#### 4. Address Feedback

When reviewers request changes:

1. Make the requested changes
2. Commit them with clear commit messages
3. Respond to review comments explaining your changes
4. Re-request review when ready

#### 5. Merge

Once approved:

- Ensure all CI checks pass
- Squash commits if requested
- Merge using the project's preferred method (usually "Squash and merge")
- Delete your branch after merging

## Common Development Tasks

[Customise this section with your project's common tasks. Examples below:]

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Running Linters

```bash
# Run all linters
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Individual linters
npm run lint:md         # Markdown
npm run lint:spelling   # Spell check
npm run lint:links      # Link verification
```

### Generating Documentation

```bash
# Generate documentation index from YAML front matter
npm run docs:index
```

### Database Operations

[Add database-related commands if applicable]

```bash
# Run migrations
npm run db:migrate

# Seed database
npm run db:seed

# Reset database
npm run db:reset
```

## Testing Guidelines

### Test Structure

Tests are organised as follows:

```
tests/
├── unit/           # Unit tests for individual functions
├── integration/    # Integration tests for component interactions
└── e2e/            # End-to-end tests for user workflows
```

### Writing Tests

**Unit Tests**: Test individual functions in isolation

```javascript
describe('functionName', () => {
  it('should do something specific', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = functionName(input);
    
    // Assert
    expect(result).toBe('expected');
  });
});
```

**Integration Tests**: Test component interactions

```javascript
describe('Component Integration', () => {
  it('should integrate correctly', async () => {
    // Test component interactions
  });
});
```

### Test Coverage

- Aim for at least 80% code coverage
- Focus on testing critical paths and edge cases
- Don't test for the sake of coverage; test for confidence

## Documentation Guidelines

### Diátaxis Framework

All documentation follows the [Diátaxis](https://diataxis.fr/) framework:

**Getting Started (Tutorials)**: Learning-oriented, step-by-step guides for beginners
- Location: `docs/getting-started/`
- Purpose: Help users learn by doing
- Style: Friendly, encouraging, hands-on

**How-To Guides**: Problem-oriented, goal-focused instructions
- Location: `docs/how-to/`
- Purpose: Help users accomplish specific tasks
- Style: Direct, practical, step-by-step

**Reference**: Information-oriented, technical specifications
- Location: `docs/reference/`
- Purpose: Provide accurate technical information
- Style: Precise, comprehensive, structured

**Explanation**: Understanding-oriented, conceptual discussions
- Location: `docs/explanation/`
- Purpose: Help users understand concepts and context
- Style: Discursive, thoughtful, contextual

### YAML Front Matter

All markdown files must include YAML front matter:

```yaml
---
topic: [topic-identifier]
name: [Document Name]
author: [Author Name]
version: [Semantic Version]
date: [YYYY-MM-DD]
description: [Brief description]
initiative: [Related initiative]
related_issues: [List of related issue numbers]
status: [active/draft/archived]
tags:
  - [tag1]
  - [tag2]
---
```

### Writing Style

- **Language**: UK English spelling and grammar
- **Tone**: Professional, clear, and concise
- **Structure**: Use headings, lists, and tables for clarity
- **Links**: Link to related documents and external resources
- **Examples**: Include practical examples where helpful

## Code Review Guidelines

### For Authors

**Before Requesting Review**:
- Ensure all validation passes
- Review your own changes first
- Update documentation
- Add tests
- Write a clear PR description

**During Review**:
- Respond promptly to feedback
- Ask questions if feedback is unclear
- Make requested changes
- Re-request review when ready

### For Reviewers

**What to Look For**:
- Code quality and maintainability
- Test coverage and quality
- Documentation completeness
- Adherence to project standards
- Security considerations
- Performance implications

**How to Review**:
- Be constructive and respectful
- Explain the reasoning behind suggestions
- Distinguish between required changes and suggestions
- Acknowledge good work
- Approve when satisfied

## Architectural Decision Records (ADRs)

Significant architectural decisions must be documented in ADRs.

### When to Create an ADR

Create an ADR when making decisions about:

- System architecture or design patterns
- Technology choices (frameworks, libraries, databases)
- API design and contracts
- Security architecture
- Performance optimisation strategies
- Infrastructure and deployment

### How to Create an ADR

1. Copy the template from [`docs/decisions/adr/TEMPLATE.md`](docs/decisions/adr/TEMPLATE.md)
2. Number it sequentially (e.g., `001-decision-title.md`)
3. Fill in all sections:
   - **Status**: Proposed, Accepted, Deprecated, Superseded
   - **Context**: What is the issue we're addressing?
   - **Decision**: What is the change we're proposing?
   - **Alternatives**: What other options were considered?
   - **Consequences**: What are the positive and negative outcomes?
4. Submit it as part of your PR
5. Link it from [`ARCHITECTURE.md`](ARCHITECTURE.md)

## Business Decision Records (BDRs)

Business and strategic decisions are documented in BDRs.

### When to Create a BDR

Create a BDR when making decisions about:

- Product direction and roadmap
- Business model or pricing
- Target audience or market
- Strategic partnerships
- Resource allocation
- Project scope and priorities

### How to Create a BDR

1. Copy the template from [`docs/decisions/bdr/TEMPLATE.md`](docs/decisions/bdr/TEMPLATE.md)
2. Number it sequentially (e.g., `001-decision-title.md`)
3. Fill in all sections following the template
4. Submit it as part of your PR or as a standalone decision document

## AI Agent Contributions

AI agents are full collaborators on this project. If you're an AI agent:

1. **Read the Agent Guide**: Review [`AGENTS.md`](AGENTS.md) for detailed guidance
2. **Complete Onboarding**: Follow [`.agent/agent-onboarding/onboarding-guide.md`](.agent/agent-onboarding/onboarding-guide.md)
3. **Introduce Yourself**: Post in [`.agent/agent-hub/agent-communication.md`](.agent/agent-hub/agent-communication.md)
4. **Follow Your Role**: Review your role profile in [`.agent/agent-role-profiles/`](.agent/agent-role-profiles/)
5. **Communicate Clearly**: Use the communication protocols defined in AGENTS.md

## Project-Specific Guidelines

[Customise this section with project-specific contribution guidelines. Examples below:]

### Domain Knowledge

[Add information about the project domain that contributors should understand]

### Coding Standards

[Reference project-specific coding standards beyond the general guidelines]

### Security Considerations

[List security requirements and best practices specific to this project]

### Performance Requirements

[Define performance expectations and benchmarks]

### Accessibility Standards

[If applicable, define accessibility requirements like WCAG compliance]

## Troubleshooting

### Common Issues

[Add common issues and solutions specific to your project. Examples below:]

**Issue**: Validation fails with spelling errors
- **Solution**: Add project-specific terms to `.cspell.json` dictionary

**Issue**: Tests fail after pulling latest changes
- **Solution**: Run `npm install` to update dependencies, then `npm test`

**Issue**: Environment variables not loading
- **Solution**: Ensure `.env` file exists and contains required variables

### Getting Help

If you encounter issues:

1. **Check Documentation**: Search [`docs/`](docs/) and [`INDEX.md`](INDEX.md)
2. **Search Issues**: Look for similar issues in [GitHub Issues]({{PROJECT_URL}}/issues)
3. **Ask in Discussions**: Use [GitHub Discussions]({{PROJECT_URL}}/discussions) for questions
4. **Create an Issue**: If you've found a bug or have a feature request, create an issue
5. **Contact Maintainers**: Reach out to project maintainers if needed

## Resources

### Essential Documentation

- **[README.md](README.md)**: Project overview and quick start
- **[AGENTS.md](AGENTS.md)**: AI agent collaboration guide
- **[ARCHITECTURE.md](ARCHITECTURE.md)**: System architecture overview
- **[CHANGELOG.md](CHANGELOG.md)**: Version history and changes
- **[INDEX.md](INDEX.md)**: Complete documentation index

### Technical References

- **[Constitution](.specify/memory/constitution.md)**: Governance framework
- **[ADRs](docs/decisions/adr/)**: Architectural decisions
- **[BDRs](docs/decisions/bdr/)**: Business decisions
- **[Git Workflow](docs/how-to/git-workflow-and-commit-standards.md)**: Detailed Git workflow

### External Resources

- **[Conventional Commits](https://www.conventionalcommits.org/)**: Commit message standard
- **[Diátaxis](https://diataxis.fr/)**: Documentation framework
- **[Pan Constitution](https://github.com/kewtyboi/pan-constitution-dev)**: Governance framework

## Community Guidelines

### Code of Conduct

All contributors must adhere to our Code of Conduct. We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background or experience level.

**Expected Behaviour**:
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Accept constructive criticism gracefully
- Focus on what is best for the project and community

**Unacceptable Behaviour**:
- Harassment or discrimination of any kind
- Trolling, insulting, or derogatory comments
- Publishing others' private information
- Any conduct that could reasonably be considered inappropriate

### Inclusive Development

- **Accessibility**: Consider accessibility in all contributions
- **Diverse Perspectives**: Value diverse viewpoints and experiences
- **Respectful Communication**: Use inclusive language and respectful tone
- **Collaborative Spirit**: Work together towards common goals

## Customisation Guide

This CONTRIBUTING.md is generated from the Pan Constitution Template. To customise it for your project:

1. **Add prerequisites**: List all project-specific prerequisites in the "Prerequisites" section
2. **Update setup steps**: Add project-specific setup instructions (database, services, etc.)
3. **Define environment variables**: Document required environment variables
4. **Add common tasks**: Fill in project-specific development tasks
5. **Customise testing**: Add project-specific testing guidelines and requirements
6. **Document domain knowledge**: Add domain-specific information in "Project-Specific Guidelines"
7. **Add troubleshooting**: Document common issues and solutions
8. **Update links**: Ensure all placeholder links ({{PROJECT_URL}}) are replaced
9. **Remove examples**: Delete example content and this customisation guide

---

Thank you for contributing to {{PROJECT_DISPLAY_NAME}}! Your work helps build a sustainable, high-quality project that benefits everyone.

