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
```text

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
```text

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

Welcome to {{PROJECT_NAME}}! 🏄‍♂️✨

