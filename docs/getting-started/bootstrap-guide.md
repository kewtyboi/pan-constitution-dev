---
topic: getting-started
name: Bootstrap Guide - Detailed Walkthrough
author: Manus AI
version: 1.0.0
date: 2025-10-17
description: Comprehensive walkthrough of the bootstrap.sh script for pan-constitution-template
initiative: pan-governance-foundation
related_issues: ['#6']
status: active
tags:
  - getting-started
  - bootstrap
  - setup
---

# Bootstrap Guide: A Detailed Walkthrough

This guide provides a comprehensive walkthrough of the `bootstrap.sh` script included in the Pan Constitution Template. The script is designed to automate the setup of a new project, ensuring it is fully configured and compliant with the Pan Constitution from the very beginning.

## Purpose

The primary purpose of the bootstrap script is to transform the generic template into a project-specific repository. It achieves this by systematically replacing placeholder values across all relevant files with the information you provide. This automation saves significant time and reduces the risk of manual configuration errors.

## How It Works

The script executes a series of functions in a specific order to ensure a smooth and predictable setup process. Below is a step-by-step breakdown of its operations.

### 1. Project Information Prompt (`prompt_project_info`)

The script begins by interactively prompting you for essential project details. These details are used to populate the template files.

| Prompt                     | Variable                 | Description                                                                                             | Default Value                                  |
| -------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Project name               | `PROJECT_NAME`           | The kebab-case name for the project (e.g., `my-awesome-project`). Used for the repository name.           | (None)                                         |
| Project display name       | `PROJECT_DISPLAY_NAME`   | The user-friendly, title-case name for the project (e.g., "My Awesome Project").                        | (Derived from `PROJECT_NAME`)                  |
| GitHub organization/username | `GITHUB_ORG`             | The GitHub organization or username where the repository will reside.                                   | (None)                                         |
| Project team name          | `PROJECT_TEAM`           | The name of the team responsible for the project.                                                       | `{{PROJECT_DISPLAY_NAME}} Team`                |
| Initial initiative name    | `INITIAL_INITIATIVE`     | The initial high-level goal or area of focus for the project.                                           | `foundation`                                   |
| Project description        | `PROJECT_DESCRIPTION`    | A concise, one-line summary of the project.                                                             | "A project following the Pan Constitution..." |

### 2. Configuration Summary (`display_summary`)

After you provide the project information, the script displays a summary of the configuration. You will be asked to confirm whether to proceed. This is a safety check to ensure all details are correct before any files are modified.

### 3. Placeholder Replacement (`replace_placeholders`)

This is the core function of the script. It searches through all text-based files in the repository for placeholders and replaces them with the values you provided. Binary files and directories like `.git` and `node_modules` are automatically excluded.

The script replaces the following placeholders:

- `{{PROJECT_NAME}}`
- `{{PROJECT_DISPLAY_NAME}}`
- `{{GITHUB_ORG}}`
- `{{PROJECT_TEAM}}`
- `{{INITIAL_INITIATIVE}}`
- `{{CREATION_DATE}}` (Automatically generated)
- `{{PROJECT_DESCRIPTION}}`

### 4. Git Initialization (`initialize_git`)

The script handles the setup of the Git repository. If a `.git` directory already exists, it will ask for confirmation before re-initializing it. It then creates an initial commit with a detailed message summarizing the bootstrap process.

You will also be prompted to set up a GitHub remote, which makes it easy to push your newly configured project to GitHub.

### 5. Dependency Installation (`install_dependencies`)

If a `package.json` file is present and `npm` is installed on your system, the script will automatically run `npm install` to fetch all required Node.js dependencies.

### 6. Documentation Index Generation (`generate_index`)

To help with documentation navigation, the script attempts to run `npm run docs:index`, a command that should generate a master `INDEX.md` file for the `docs` directory.

### 7. IDE Integration (`setup_ide_integration`)

The template includes support for integrating agent prompts with specific IDEs. The script will ask for your preferred IDE (`cursor` or `codex`) and copy the relevant prompt files into the appropriate configuration directory (`.cursor/commands` or `.codex/prompts`).

### 8. Cleanup (`cleanup`)

Finally, the script will ask if you want to remove the `bootstrap.sh` file itself. It is recommended to remove it after a successful setup to keep the repository clean.

### 9. Next Steps (`display_next_steps`)

Upon completion, the script prints a list of recommended next steps, such as customizing the `README.md`, setting up your GitHub repository, and beginning development.

## Usage

To run the script, navigate to the root of your new project repository and execute the following command:

```bash
./bootstrap.sh
```

If you encounter a permission error, you may need to make the script executable first:

```bash
chmod +x bootstrap.sh
./bootstrap.sh
```

## Related Documents

- [Quick Start](./quick-start.md): For a faster, less detailed setup guide.
- [Template Structure](../reference/template-structure.md): For a complete reference of all files in the template.
- [Placeholder Reference](../reference/placeholder-reference.md): For a comprehensive list of all available placeholders.

