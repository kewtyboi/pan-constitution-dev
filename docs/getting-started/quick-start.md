---
topic: getting-started
name: Quick Start - 5-Minute Setup
author: Manus AI
version: 1.0.0
date: 2025-10-17
description: Fast 5-minute setup guide for pan-constitution-template
initiative: pan-governance-foundation
related_issues: ['#6']
status: active
tags:
  - getting-started
  - quick-start
  - setup
---

# Quick Start: 5-Minute Setup

Welcome to the Pan Constitution Template! This guide will get you up and running with a new project in under 5 minutes.

## Prerequisites

- A GitHub account
- `git` installed on your local machine

## Steps

1. **Create a New Repository from the Template**

   - Click the "Use this template" button on the `pan-constitution-template` repository page.
   - Choose a name for your new repository and click "Create repository from template."

2. **Clone Your New Repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
   cd YOUR-REPOSITORY-NAME
   ```

3. **Run the Bootstrap Script**

   The bootstrap script will automatically configure your project by replacing all placeholder values.

   ```bash
   ./bootstrap.sh
   ```

4. **Commit and Push Your Changes**

   ```bash
   git add .
   git commit -m "Initial project setup via bootstrap"
   git push origin main
   ```

## Next Steps

Congratulations! Your new project is now set up and compliant with the Pan Constitution. You can now start developing your project-specific code.

For more detailed information, please refer to the following documents:

- [Bootstrap Guide](./bootstrap-guide.md): A detailed walkthrough of the bootstrap script.
- [Template Structure](../reference/template-structure.md): A complete reference to the files and directories in this template.

