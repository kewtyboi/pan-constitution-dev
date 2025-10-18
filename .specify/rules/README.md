---
topic: project-rules
name: Project Rules Overview
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Overview and guidelines for managing project-specific and Pan-wide rules within the .specify/rules directory.
initiative: pan-constitution-template
related_issues: []
status: active
tags:
  - project-rules
  - governance
  - standards
  - pan-constitution
---

# Project Rules Overview

This `README.md` serves as the entry point and overview for the `.specify/rules/` directory within projects built using the **Pan Constitution Template**. This directory is dedicated to defining and managing both project-specific rules and references to Pan-wide governance standards.

## Purpose of `.specify/rules/`

The `.specify/rules/` directory is designed to:

-   **Centralize Governance**: Provide a single, well-defined location for all rules governing the project.
-   **Ensure Compliance**: Facilitate adherence to the Pan Constitution and other relevant standards.
-   **Guide Agent Behavior**: Explicitly define rules that can be consumed and enforced by AI agents and human contributors.
-   **Promote Consistency**: Ensure a consistent approach to development, documentation, and operations across the project.
-   **Enable Customization**: Allow projects to define their unique rules while maintaining a baseline of Pan-wide standards.

## Structure and Content

This directory contains individual Markdown files (`.mdc` extension is recommended for rule documents) where each file typically defines a specific set of rules or guidelines. Examples include:

-   `ai-agent-compliance.mdc`: Rules for AI agent behavior and documentation.
-   `initiative-tracking.mdc`: Guidelines for managing project initiatives and change tracking.
-   `orchestrator-startup.mdc`: Protocol for the Orchestrator Agent during session startup.
-   `privacy-security.mdc`: Project-specific privacy and security requirements.
-   `project-structure.mdc`: Guidelines for project directory structure and organization.
-   `testing-standards.mdc`: Standards and expectations for testing within the project.

Each rule document should:

-   Be project-agnostic where possible, using placeholders (`{{...}}`) for project-specific values.
-   Include a comprehensive YAML front matter for metadata and traceability.
-   Provide clear, actionable rules and guidance.
-   Reference relevant external standards or Pan Constitution documents.

## Pan-wide vs. Project-Specific Rules

The Pan Constitution advocates for a clear distinction between Pan-wide minimum baseline rules and project-specific additions.

-   **Pan-wide Minimum Baseline**: These are foundational rules that apply to all projects under the Pan Constitution. They are typically referenced or imported from a central Pan Constitution repository.
-   **Project-Specific Additions**: These are rules tailored to the unique needs, technologies, or compliance requirements of a particular project. They build upon the Pan-wide baseline.

**Customization Guidance**: When creating or adapting rule documents, clearly delineate which parts are Pan-wide standards and which are project-specific. Consider using a `{{PAN_CONSTITUTION_REFERENCE}}` placeholder for links to the central Pan Constitution documents.

## Managing Rules

-   **Version Control**: All rule documents must be under version control (`git`).
-   **Review Process**: Significant changes to rules should undergo a review process (e.g., Pull Requests) involving relevant stakeholders.
-   **Automation**: Projects are encouraged to implement automation to enforce rules (e.g., CI/CD checks, pre-commit hooks).
-   **Accessibility**: Rules should be easily discoverable and understandable by all contributors, both human and AI.

## Automation Scripts (Example)

Projects can develop scripts to validate and enforce rules defined in this directory. Examples include:

```bash
# Example: Validate all rule documents for correct YAML front matter and formatting
./scripts/validate-rules.sh

# Example: Generate a consolidated rules report for compliance checks
./scripts/generate-rules-report.sh

# Example: Check for adherence to specific coding standards defined in rules
./scripts/check-coding-standards.sh
```

**Customization Guidance**: Adapt these scripts to your project's specific needs. Ensure they are integrated into your development workflow and CI/CD pipelines.

**Mission:** To provide a transparent, enforceable, and adaptable framework for managing project rules, ensuring alignment with the Pan Constitution and fostering a high-quality, compliant, and efficient development environment.
