---
topic: reference
name: Template Structure Reference
author: Manus AI
version: 1.0.0
date: 2025-10-17
description: Complete reference to files and directories in pan-constitution-template
initiative: pan-governance-foundation
related_issues: ['#6']
status: active
tags:
  - reference
  - structure
  - architecture
---

# Template Structure Reference

This document provides a complete reference to the files and directories in the Pan Constitution Template. It is designed to help you understand the purpose and organization of each component.

## Overview

The template is organized into several top-level directories, each serving a specific purpose:

```
pan-constitution-template/
├── .agent/               # AI agent system files
├── .github/              # GitHub configuration
├── .specify/             # Core rules and constitution
├── docs/                 # All project documentation
├── scripts/              # Utility scripts
└── [Root files]          # Core project files
```

### Key Root Files

- **`AGENTS.md`**: The central guide for AI agent collaboration, outlining roles, communication protocols, and best practices.
- **`ARCHITECTURE.md`**: Provides a high-level overview of the technical and conceptual architecture of the template.
- **`bootstrap.sh`**: The interactive script that configures the template for a new project by replacing placeholders.
- **`package.json`**: Defines Node.js dependencies and scripts for validation, formatting, and documentation generation.

## `.github/` Directory

This directory contains all GitHub-related configurations.

- **`ISSUE_TEMPLATE/`**: Templates for creating new GitHub Issues (e.g., bug reports, feature requests).
- **`pull_request_template.md`**: A template for creating new Pull Requests.
- **`workflows/`**: CI/CD workflows for GitHub Actions, such as linting, testing, and automated documentation checks.

## `.agent/` Directory

This is the core of the AI agent system, containing everything needed to manage and onboard AI agents.

- **`agent-hub/`**: A central place for agent communication and coordination.
- **`agent-onboarding/`**: Contains templates and guides for onboarding new AI agents to the project.
- **`agent-prompt/`**: Custom prompts for IDE integrations like Cursor and Codex.
- **`agent-role-profiles/`**: A collection of pre-configured profiles for various AI agent roles (e.g., `ai-engineer.md`, `technical-writer.md`).

## `.specify/` Directory

This directory holds the core rules, specifications, and memory for the project, acting as its constitutional foundation.

- **`memory/`**: Contains the `constitution.md`, the central governing document for the project.
- **`rules/`**: A set of machine-readable rules (`.mdc` files) that enforce project standards.
- **`templates/`**: Standard templates for project artifacts like plans, specs, and checklists.

## `docs/` Directory

All project documentation resides here, organized according to the Diátaxis framework.

- **`getting-started/`**: Tutorials and guides for new users, such as the `quick-start.md` and `bootstrap-guide.md`.
- **`how-to/`**: Practical guides for performing specific tasks, like `customize-template.md` and `add-new-agent.md`.
- **`reference/`**: Technical reference material, including this `template-structure.md` and the `placeholder-reference.md`.
- **`explanation/`**: In-depth explanations of project concepts, such as the `pan-constitution-overview.md`.
- **`decisions/`**: Contains Architectural Decision Records (`adr/`) and Business Decision Records (`bdr/`).
- **`ops/`**: Documentation related to project operations and governance.

## `scripts/` Directory

This directory contains utility scripts for automating tasks.

- **`generate-docs-index-v2.js`**: A script to automatically generate an `INDEX.md` file for the `docs` directory, providing a complete, searchable index of all documentation.
- **`utils/`**: Helper scripts and modules used by the main scripts.

