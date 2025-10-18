---
topic: how-to
name: How to Customize the Template
author: Manus AI
version: 1.0.0
date: 2025-10-17
description: Guide for customizing the pan-constitution-template for your project
initiative: pan-governance-foundation
related_issues: ['#6']
status: active
tags:
  - how-to
  - customization
  - setup
---

# How to Customize the Template

After running the `bootstrap.sh` script, your project is initialized with the standard Pan Constitution framework. However, to make the project truly your own, you will need to customize several files with project-specific information.

This guide outlines the key files you should review and edit.

## 1. Core Project Files

These files are located in the root directory and define your project's identity.

- **`README.md`**: This is the front page of your project. The bootstrap script fills in the basic details, but you should expand on it with:
  - A more detailed project description
  - Key features and goals
  - Links to important resources (website, documentation, etc.)
  - Contribution guidelines

- **`AGENTS.md`**: This file describes the AI agent roles and responsibilities for your project. You should:
  - Review the default agent profiles and adapt them to your team's structure.
  - Add or remove agent roles as needed.
  - Update the communication and collaboration protocols.

- **`PROJECT_STATUS.md`**: This document tracks the project's overall status, milestones, and current focus. Update it regularly to keep stakeholders informed.

## 2. Governance and Operations

The `docs/ops/` directory contains documents related to your project's operational and governance model.

- **`docs/ops/governance.md`**: This file outlines your project-specific governance model, which should align with the high-level principles of the Pan Constitution. You may need to define:
  - Decision-making processes
  - Roles and responsibilities of your project team
  - Communication channels

- **`docs/ops/onboarding.md`**: Customize this document to provide a clear onboarding path for new human and AI team members joining your project.

## 3. Documentation

While the template provides a Diátaxis-based documentation structure, the content is largely placeholder. You will need to create the actual documentation for your project, including:

- **Tutorials** in `docs/getting-started/`
- **How-to guides** in `docs/how-to/`
- **Reference material** in `docs/reference/`
- **Explanations** of your project's architecture and concepts in `docs/explanation/`

## 4. CI/CD Workflows

The `.github/workflows/` directory contains CI/CD pipelines for linting, testing, and validation. You may need to customize these workflows to:

- Add project-specific build steps
- Integrate with different testing frameworks
- Configure deployment to your target environments

## 5. Issue and PR Templates

The `.github/` directory also contains templates for GitHub Issues and Pull Requests. Review and adapt these templates to fit your project's development workflow.

By customizing these key areas, you can adapt the Pan Constitution Template to meet the unique needs of your project while still benefiting from a standardized, governance-compliant foundation.

