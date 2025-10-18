---
topic: how-to
name: How to Add a New Agent
author: Manus AI
version: 1.0.0
date: 2025-10-17
description: Step-by-step guide for adding a new AI agent role to the project
initiative: pan-governance-foundation
related_issues: ['#6']
status: active
tags:
  - how-to
  - agents
  - setup
---

# How to Add a New Agent

This guide explains how to add a new AI agent to the project. The agent system is designed to be extensible, allowing you to define new roles and capabilities as your project evolves.

## Overview

Each agent in the system has a role profile that defines its purpose, skills, and operational guidelines. Adding a new agent involves creating a new role profile and integrating it into the existing agent collaboration framework.

## Steps to Add a New Agent

1. **Create a Role Profile**: Define the new agent's role and responsibilities.
2. **Update `AGENTS.md`**: Add the new role to the central list of agents.
3. **Create Agent-Specific Memory (Optional)**: Set up a dedicated memory space if the agent requires it.
4. **Onboard the New Agent**: Follow the standard onboarding process for the new agent.

### Step 1: Create a Role Profile

Create a new Markdown file in the `.agent/agent-role-profiles/` directory. The filename should be the kebab-case name of the role (e.g., `community-manager.md`).

Use the following template for the role profile:

```markdown
---
topic: agent-role-profile
name: [Agent Role Name] # e.g., Community Manager
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Profile for the [Agent Role Name] agent.
---

# [Agent Role Name] Profile

## 1. Purpose

- **Primary Goal**: [A concise statement of the agent's main objective.]
- **Key Responsibilities**:
  - [Responsibility 1]
  - [Responsibility 2]
  - [Responsibility 3]

## 2. Skills and Capabilities

- **Core Skills**: [List of primary skills, e.g., Natural Language Understanding, Sentiment Analysis]
- **Tools**: [List of tools the agent is proficient with, e.g., GitHub API, Discord bots]

## 3. Operational Guidelines

- **Input**: [What kind of input does the agent expect?]
- **Output**: [What kind of output does the agent produce?]
- **Communication**: [How does the agent communicate with the team?]
- **Decision-Making**: [What decisions is the agent authorized to make?]

## 4. Collaboration

- **Interacts With**: [Which other agents or team members does this agent collaborate with?]
- **Handoffs**: [What is the process for handing off tasks to or from this agent?]
```

### Step 2: Update `AGENTS.md`

Open the `AGENTS.md` file in the root directory and add the new agent role to the list under the "Agent Roles" section. Choose the appropriate category (e.g., Development, Operations, Product & Design, Specialized).

### Step 3: Create Agent-Specific Memory (Optional)

If the new agent needs to maintain its own long-term memory, create a new directory under `agents/<agent-name>/`. Inside this directory, you can create memory files such as `personality.md`, `memory-system.md`, and a `memory/` subdirectory for active memory files.

Refer to the `Memory Management` section in `AGENTS.md` for more details.

### Step 4: Onboard the New Agent

Once the role profile is created, the new agent should follow the standard onboarding process outlined in `AGENTS.md`:

1. Read the Constitution (`.specify/memory/constitution.md`)
2. Complete the onboarding guide (`.agent/agent-onboarding/onboarding-guide.md`)
3. Introduce itself in the agent communication hub (`.agent/agent-hub/agent-communication.md`)

By following these steps, you can seamlessly integrate new AI agents into your project, expanding its capabilities while maintaining a structured and collaborative environment.

