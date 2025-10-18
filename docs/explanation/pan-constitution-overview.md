---
topic: explanation
name: Pan Constitution Overview
author: Manus AI
version: 1.0.0
date: 2025-10-17
description: High-level overview of the Pan AI Project Constitution and its core principles
initiative: pan-governance-foundation
related_issues: ['#6']
status: active
tags:
  - explanation
  - constitution
  - governance
---

# Pan Constitution Overview

This document provides a high-level overview of the Pan AI Project Constitution, the foundational governance document for all projects developed using this template. A full understanding of the constitution is essential for ensuring compliance and maintaining operational excellence.

## What is the Pan Constitution

The Pan Constitution is a project-agnostic framework that governs how AI agents deliver development work under the supervision of a single Senior Responsible Person (SRP). It establishes a baseline set of rules and standards that ensure consistency, traceability, and quality across all AI-driven projects.

It is designed to be a **living document**. While the core principles are fixed, projects can extend the constitution with their own stricter, project-specific rules.

## Core Principles

The constitution is built upon a set of core principles, each enforced by specific, machine-testable standards. These principles are the bedrock of the governance model.

### I. Authority, Scope & Refusal

This principle establishes clear lines of authority and defines the operational boundaries for AI agents. Key standards include:

- **A1: SRP Named**: Every project must have a named SRP.
- **A2: Scope of Action**: Agents can only act on repository artifacts (code, docs, etc.), not on live infrastructure.
- **A4: Refuse on Ambiguity**: Agents must refuse tasks that are unclear or lack sufficient information.
- **A5: History Safety**: Agents are forbidden from rewriting mainline Git history without explicit, single-use instructions.

### II. Traceability & Provenance

Full traceability is a non-negotiable aspect of the constitution. Every action taken by an AI agent must be auditable and linked to a clear source.

- **T1: Linkage**: Every Pull Request (PR) must be linked to an issue.
- **T3: AI Provenance**: PRs must include the AI model/version and a prompt hash or intent.
- **T4/T5: CHANGELOG Lifecycle**: A strict, PR-driven process for maintaining the `CHANGELOG.md`.
- **T6/T7: Front Matter**: All Markdown files must contain a standardized YAML front matter block.

### III. Evidence-First Development

This principle mandates a development process grounded in empirical evidence, primarily through a test-first approach.

- **E1: TDD Path**: New features must follow a Test-Driven Development (TDD) path (fail -> pass -> refactor).
- **E2: Contract Tests**: Code that interacts with external services must have contract tests.
- **E3: Docs with Code**: Documentation must be updated in the same PR as the code it describes.
- **E4/E5: Quality Gates**: All code must pass quality gates, including linting, security scans, and code coverage targets.

### IV. Data & Security

Protecting data and ensuring security are paramount. This principle sets strict rules for handling data and managing secrets.

- **D1: Synthetic Data**: Tests must use synthetic, non-personal data.
- **D3: Secrets Management**: Secrets must be managed through a designated secrets provider and never hard-coded.
- **D5: Data Minimisation**: Agents must adhere to the principle of data minimization, only accessing the data necessary for the task.

## Structure and Bindings

The constitution is more than just a set of rules; it's a machine-readable system. Each standard is defined with a `knobs` block, which specifies how it can be enforced by CI/CD pipelines and other automation.

- **Part IV: Bindings**: This section defines a stable API for agents, mapping abstract check names (e.g., `lint:md`) to concrete tool commands (e.g., `npm run lint:md`). This allows projects to swap out underlying tools without breaking constitutional compliance.
- **Part V: How to Extend**: Provides clear instructions for adding project-specific rules below the core constitution, ensuring local needs can be met without compromising the universal baseline.

## Why It Matters

The Pan Constitution provides a robust framework for building reliable, secure, and maintainable software with AI agents. By enforcing a documentation-first, evidence-driven, and highly-auditable process, it enables scalable collaboration between humans and AI, ensuring that every project starts on a foundation of quality and trust.

For the complete and normative text, please refer to the full constitution file:

- **[Pan AI Project Constitution](../../.specify/memory/constitution.md)**

