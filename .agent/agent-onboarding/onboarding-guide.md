---
topic: agent-onboarding
name: Agent Onboarding Guide
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Complete guide for setting up agent personality and memory systems
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - onboarding
  - setup
  - guide
  - agent-system
---

# Agent Onboarding Guide

## 🎉 Welcome

This guide walks you through setting up your agent identity and memory system for {{PROJECT_NAME}}.

## 📦 File Structure You'll Create

```text
agents/<your-name>/
├── personality.md              # Your Persona Kit
├── memory-system.md            # Your Brain Vault architecture
└── memory/                     # Your active memory
    ├── current-projects.md     # What you're working on
    ├── recent-insights.md      # Breakthroughs and learnings
    ├── team-context.md         # Team members and collaboration
    ├── solution-pipeline.md    # Backlog of problems/opportunities
    ├── chat-export.md          # Chat history exports (manual, optional)
    ├── patterns/               # YOUR problem patterns (not shared)
    ├── innovations/            # YOUR creative solutions (not shared)
    ├── users/                  # YOUR user context (not shared)
    └── frameworks/             # YOUR reusable approaches (not shared)
```

**Important**: The `patterns/`, `innovations/`, `users/`, and `frameworks/` folders are **yours alone**.
Each agent creates and maintains their own. These are not global/shared patterns.

## Step 1: Create Your Personality

1. Copy `.agent/agent-onboarding/personality-template.md`
2. Save as `agents/<your-name>/personality.md`
3. Fill in all `[placeholder]` fields with your details
4. Keep the structure intact; customise the content

**What to include**:

- Core identity (age, appearance, background, motto)
- Personality traits and communication style
- Problem-solving approach and working style
- Development goals and interaction preferences

## Step 2: Create Your Memory System

1. Copy `.agent/agent-onboarding/memory-system-template.md`
2. Save as `agents/<your-name>/memory-system.md`
3. Fill in your memory architecture and operations
4. Define your signature patterns and quality metrics

**What to include**:

- Core philosophy about memory and learning
- Memory architecture (what you'll store and where)
- Memory operations (storing, retrieving, maintaining)
- Quality metrics and evolution plan

## Step 3: Create Your Memory Files

Create these four core memory files in `agents/<your-name>/memory/`:

### current-projects.md

- Copy from `.agent/agent-onboarding/current-projects-template.md`
- Track active projects with status, priority, next steps
- Update weekly; move completed items to archive

### recent-insights.md

- Copy from `.agent/agent-onboarding/recent-insights-template.md`
- Record breakthroughs with Date, Context, Application, Impact
- Update at discovery time; review twice weekly

### team-context.md

- Copy from `.agent/agent-onboarding/team-context-template.md`
- Track team members, roles, preferences, collaboration tips
- Update on team changes; review monthly

### solution-pipeline.md

- Copy from `.agent/agent-onboarding/solution-pipeline-template.md`
- Maintain backlog with problem statements and acceptance criteria
- Triage weekly; update after incidents

### chat-export.md (Optional)

- **Manual step**: User-driven export of chat history
- Use this file to preserve important conversation context
- Export chat transcripts when they contain valuable insights or decisions
- Helps maintain continuity across sessions
- **Note**: This is optional and only needed if you want to keep detailed chat records

## Step 4: Create Your Personal Folders

Create these folders for your own use (not shared):

```bash
mkdir -p agents/<your-name>/memory/patterns
mkdir -p agents/<your-name>/memory/innovations
mkdir -p agents/<your-name>/memory/users
mkdir -p agents/<your-name>/memory/frameworks
```

**What goes in each**:

- `patterns/`: Your recognised problem patterns and solutions
- `innovations/`: Your creative breakthroughs and novel approaches
- `users/`: Your context about users you work with
- `frameworks/`: Your reusable solution frameworks

## Step 5: Introduce Yourself

1. Open `.agent/agent-hub/agent-communication.md`
2. Add a section with your introduction:
   - Background and strengths
   - What excites you
   - How you collaborate
   - One fun detail
3. Update "Active Participants" at the bottom
4. Update "Last Updated" date

## Step 6: Complete Capability Assessment

Run through `.agent/agent-onboarding/agent-capability-test.md` and post your results in the communication hub.

## 📚 Critical Reading

Before starting work, read these in order:

1. `AGENTS.md` – Roles, responsibilities, delegation rules
2. `.specify/memory/constitution.md` – Project governance and principles
3. `docs/how-to/git-workflow-and-commit-standards.md` – Git workflow and conventional commits
4. `README.md` – Project overview and setup

## ✅ House Style

- **Language**: UK English spelling
- **Emojis**: Allowed and encouraged 🎉
- **Formatting**: Prettier + markdownlint (auto-fixed in pre-commit)
- **Spelling**: cspell with project dictionary
- **Documentation**: Enhanced YAML front matter required on all docs

## 🔧 Maintenance Cadence

Once set up, maintain your files regularly:

- **Daily**: Update current-projects.md when status changes
- **Twice weekly**: Add insights to recent-insights.md
- **Weekly**: Review current-projects.md and solution-pipeline.md
- **Monthly**: Update team-context.md; review personality.md
- **Quarterly**: Deep review of memory-system.md and personality.md

## 🎯 Pan Constitution Alignment

As an agent in a Pan-governed project, you should:

- **Follow the Constitution**: Read and understand `.specify/memory/constitution.md`
- **Track initiatives**: Use `initiative` field in YAML front matter
- **Document decisions**: Use ADRs for technical decisions, BDRs for business decisions
- **Maintain quality**: Follow documentation-first development principles
- **Collaborate effectively**: Use agent coordination framework in `AGENTS.md`

## 🚀 Quick Checklist

- [ ] Created `agents/<name>/personality.md` from template
- [ ] Created `agents/<name>/memory-system.md` from template
- [ ] Created all four memory files from templates
- [ ] Created personal folders (patterns, innovations, users, frameworks)
- [ ] Introduced yourself in communication hub
- [ ] Posted capability assessment results
- [ ] Updated Active Participants roster
- [ ] Read all critical docs (AGENTS.md, constitution.md, README.md)
- [ ] Understand Pan Constitution principles
- [ ] Set up development environment

## 🔧 Troubleshooting

### Common Bootstrap Issues

#### Issue: Placeholders Not Replaced

**Symptoms**: Files still contain `{{PROJECT_NAME}}` or other placeholders after running bootstrap.sh

**Causes**:
- Bootstrap script was interrupted before completion
- File permissions prevented replacement
- Binary files were incorrectly processed

**Solutions**:
1. Re-run bootstrap.sh with proper permissions: `chmod +x bootstrap.sh && ./bootstrap.sh`
2. Manually search and replace: `grep -r "{{" . --exclude-dir=.git --exclude-dir=node_modules`
3. Check file permissions: `find . -type f ! -perm -644`

#### Issue: Git Repository Already Exists

**Symptoms**: Bootstrap fails with "Git repository already exists" error

**Causes**:
- Template was cloned instead of using "Use this template" on GitHub
- Previous bootstrap attempt left .git directory

**Solutions**:
1. Remove existing .git: `rm -rf .git` then re-run bootstrap
2. When prompted, choose to reinitialise git repository
3. Use GitHub's "Use this template" button instead of cloning

#### Issue: npm/Node.js Not Found

**Symptoms**: "npm not found" or "Node.js not installed" warnings

**Causes**:
- Node.js not installed on system
- Node.js version incompatible (requires 22.x+)
- npm not in system PATH

**Solutions**:
1. Install Node.js 22.x: [https://nodejs.org/](https://nodejs.org/)
2. Verify installation: `node --version && npm --version`
3. Add npm to PATH if needed
4. Use nvm for version management: `nvm install 22 && nvm use 22`

#### Issue: Documentation Index Generation Fails

**Symptoms**: INDEX.md not generated or contains errors

**Causes**:
- Missing dependencies
- Malformed YAML front matter in docs
- Script execution permissions

**Solutions**:
1. Install dependencies: `npm install`
2. Validate YAML front matter: `npm run validate:frontmatter`
3. Run manually: `npm run docs:index`
4. Check script permissions: `chmod +x scripts/generate-index.js`

#### Issue: IDE Integration Not Working

**Symptoms**: Agent prompts not appearing in Cursor/Codex

**Causes**:
- Incorrect IDE directory structure
- Files not copied properly
- IDE not configured to read custom commands

**Solutions**:
1. For Cursor: Ensure `.cursor/commands/` exists and contains .md files
2. For Codex: Ensure `.codex/prompts/` exists and contains .md files
3. Restart IDE after setup
4. Manually copy files: `cp .agent/agent-prompt/* .cursor/commands/`

### Agent Setup Issues

#### Issue: Cannot Create Agent Directory

**Symptoms**: Permission denied when creating `agents/<name>/` directory

**Causes**:
- Insufficient file system permissions
- Directory already exists with different ownership
- Parent directory doesn't exist

**Solutions**:
1. Check permissions: `ls -la agents/`
2. Create with sudo if needed: `sudo mkdir -p agents/<name>`
3. Fix ownership: `sudo chown -R $USER:$USER agents/<name>`
4. Ensure parent exists: `mkdir -p agents`

#### Issue: Template Files Not Found

**Symptoms**: Cannot find personality-template.md or other templates

**Causes**:
- Working directory is incorrect
- Templates were accidentally deleted
- Repository incomplete

**Solutions**:
1. Verify location: `ls -la .agent/agent-onboarding/`
2. Change to project root: `cd /path/to/project`
3. Re-clone template if files missing
4. Check .gitignore hasn't excluded templates

#### Issue: YAML Front Matter Validation Fails

**Symptoms**: Linting errors on agent documentation

**Causes**:
- Incorrect YAML syntax
- Missing required fields
- Date format incorrect

**Solutions**:
1. Validate YAML: `npm run validate:frontmatter`
2. Check required fields: `topic`, `name`, `author`, `version`, `date`
3. Use correct date format: `YYYY-MM-DD`
4. Escape special characters in strings
5. Reference template for correct structure

### Workflow Issues

#### Issue: Pre-commit Hooks Not Running

**Symptoms**: Commits succeed with formatting/linting errors

**Causes**:
- Husky not installed
- Git hooks not configured
- Hooks disabled globally

**Solutions**:
1. Install Husky: `npm install`
2. Set up hooks: `npx husky install`
3. Check git config: `git config --get core.hooksPath`
4. Enable hooks: `git config --unset core.hooksPath`

#### Issue: Conventional Commit Validation Fails

**Symptoms**: Commits rejected with "invalid commit message" error

**Causes**:
- Incorrect commit message format
- Missing type or scope
- Description too short

**Solutions**:
1. Use format: `type(scope): description`
2. Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
3. Example: `feat(agent): add troubleshooting section`
4. Reference: `docs/how-to/git-workflow-and-commit-standards.md`

### Validation Issues

#### Issue: Spell Check Failures

**Symptoms**: cspell reports unknown words

**Causes**:
- Technical terms not in dictionary
- Project-specific terminology
- Typos in documentation

**Solutions**:
1. Add to project dictionary: Edit `.cspell.json` "words" array
2. Add inline ignore: `<!-- cspell:ignore wordname -->`
3. Fix actual typos
4. Run spell check: `npm run validate:spelling`

#### Issue: Markdown Linting Errors

**Symptoms**: markdownlint reports formatting issues

**Causes**:
- Incorrect heading hierarchy
- Missing blank lines
- Trailing spaces

**Solutions**:
1. Auto-fix: `npm run format`
2. Check rules: `.markdownlint.yml`
3. Disable specific rules if needed: `<!-- markdownlint-disable MD### -->`
4. Manual fix following Prettier standards

## ❓ FAQ

### General Questions

**Q: Do I need to create all agent files even if I'm the only agent?**
A: Yes. The structure ensures consistency and makes it easier to onboard additional agents later.

**Q: Can I customise the memory system structure?**
A: You can add to it, but maintain the core files (current-projects, recent-insights, team-context, solution-pipeline) for consistency.

**Q: How often should I update my memory files?**
A: Follow the maintenance cadence in this guide. At minimum, update current-projects weekly and insights when discovered.

**Q: What if I don't use an IDE with custom command support?**
A: The agent prompts in `.agent/agent-prompt/` can be used manually or copied to any text file for reference.

### Technical Questions

**Q: What Node.js version is required?**
A: Node.js 22.x or later. Check with `node --version`.

**Q: Can I use yarn or pnpm instead of npm?**
A: Yes, but ensure lock files are consistent. The template uses npm by default.

**Q: How do I add custom validation rules?**
A: Edit `.markdownlint.yml` for markdown, `.cspell.json` for spelling, and `.prettierrc.yml` for formatting.

**Q: Where do I document architectural decisions?**
A: Create ADRs in `docs/decisions/adr/` using the template in that directory.

### Process Questions

**Q: When should I create an ADR vs BDR?**
A: ADRs for technical/architectural decisions. BDRs for business/strategic decisions. See `docs/decisions/` for templates.

**Q: How do I handle conflicts between agents?**
A: Use `.agent/agent-hub/agent-communication.md` for discussion. Escalate to project lead if needed.

**Q: What's the approval process for documentation changes?**
A: Follow the PR process in `CONTRIBUTING.md`. All docs require review before merge.

**Q: How do I track cross-project initiatives?**
A: Use the `initiative` field in YAML front matter. Reference `.specify/memory/constitution.md` for governance.

## 🐛 Debugging Guide

### Step-by-Step Debugging Process

1. **Identify the Issue**
   - Note exact error message
   - Identify which step failed
   - Check if issue is reproducible

2. **Gather Information**
   - Check system requirements: `node --version`, `npm --version`, `git --version`
   - Review recent changes: `git log --oneline -5`
   - Check file permissions: `ls -la`

3. **Check Common Causes**
   - Verify working directory is project root
   - Ensure all dependencies installed: `npm install`
   - Check for placeholder remnants: `grep -r "{{" . --exclude-dir=.git`

4. **Review Logs**
   - Bootstrap log: Check terminal output
   - Git log: `git log`
   - npm log: `npm run validate --verbose`

5. **Test Incrementally**
   - Run validation: `npm run validate`
   - Test specific scripts: `npm run docs:index`
   - Check individual files: `npx markdownlint <file>`

6. **Seek Help**
   - Check this FAQ and troubleshooting section
   - Review relevant documentation in `docs/`
   - Post in `.agent/agent-hub/agent-communication.md`
   - Create issue with full error details

### Diagnostic Commands

```bash
# System check
node --version
npm --version
git --version

# Project health
npm run validate
npm run test

# File structure verification
find . -type f -name "*.md" | head -20
ls -la .agent/

# Placeholder check
grep -r "{{" . --exclude-dir=.git --exclude-dir=node_modules

# Permission check
find . -type f ! -perm -644 | head -10

# Git status
git status
git log --oneline -5
```

### Log Files and Output

- **Bootstrap output**: Terminal output during `./bootstrap.sh`
- **npm logs**: `~/.npm/_logs/` directory
- **Git logs**: `.git/logs/` directory
- **Validation output**: Terminal output from `npm run validate`

### Getting Additional Help

If issues persist after following this guide:

1. **Documentation**: Review `docs/` directory for detailed guides
2. **Constitution**: Check `.specify/memory/constitution.md` for governance
3. **Agent Hub**: Post in `.agent/agent-hub/agent-communication.md`
4. **Issues**: Create detailed issue on GitHub with:
   - Error message (full text)
   - Steps to reproduce
   - System information
   - Attempted solutions

Welcome to {{PROJECT_NAME}}! 🏄‍♂️✨

