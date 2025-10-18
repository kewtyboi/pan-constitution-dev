# GitHub Workflows Reference

This document provides comprehensive documentation for all GitHub Actions workflows in the Pan Constitution Template project.

## Overview

GitHub Actions workflows automate various aspects of the project's CI/CD pipeline, including documentation validation, dependency management, and constitution updates. All workflows are defined in the `.github/workflows/` directory.

## Workflow Architecture

The project uses a multi-workflow approach, with each workflow focused on a specific aspect of project maintenance:

| Workflow | Purpose | Trigger | Frequency |
|----------|---------|---------|-----------|
| Documentation Validation | Validate docs structure and content | PR, Push, Manual | On demand |
| Dependency Updates | Check and update npm packages | Schedule, Manual | Weekly |
| Update Pan Constitution | Update constitution to latest version | Manual | As needed |

## Detailed Workflow Documentation

### Documentation Validation Workflow

**File:** `.github/workflows/docs-validation.yml`

**Purpose:** This workflow ensures that all documentation is properly formatted, up to date, and compliant with project standards.

**Triggers:**
- Pull requests that modify documentation files (`docs/**`, `INDEX.md`, `*.md`)
- Push to the default branch (main/master) with documentation changes
- Manual workflow dispatch

**Permissions Required:**
- `contents: read` - To checkout the repository
- `pull-requests: write` - To comment on pull requests

**Jobs and Steps:**

1. **Checkout repository** - Checks out the code with full history
2. **Setup Node.js** - Installs Node.js 18 with npm caching
3. **Install dependencies** - Runs `npm ci` to install exact versions
4. **Check INDEX.md is current** - Generates a new index and compares it with the existing one
5. **Validate Markdown formatting** - Runs `markdownlint` to check formatting
6. **Check spelling** - Runs `cspell` to check for spelling errors
7. **Validate constitutional compliance** - Runs the constitutional validation script
8. **Check for placeholders** - Ensures no template placeholders remain
9. **Comment on PR if INDEX.md is out of date** - Posts a comment with instructions if the index needs updating
10. **Fail if INDEX.md is out of date** - Fails the workflow to prevent merging

**Exit Codes:**
- `0` - All checks passed
- `1` - One or more checks failed

**Customization:**

To modify which files trigger this workflow, edit the `paths` section:

```yaml
on:
  pull_request:
    paths:
      - 'docs/**'
      - 'INDEX.md'
      - '*.md'
      - 'your-custom-path/**'
```

To add additional validation steps, add new steps after the existing checks:

```yaml
- name: Custom validation
  run: npm run your-custom-script
```

---

### Dependency Update Workflow

**File:** `.github/workflows/dependency-update.yml`

**Purpose:** This workflow automatically checks for outdated npm packages and creates pull requests for safe updates, serving as an alternative to Dependabot with more control.

**Triggers:**
- Scheduled: Every Monday at 9:00 AM UTC
- Manual workflow dispatch with optional update type selection

**Permissions Required:**
- `contents: write` - To create branches and commit changes
- `pull-requests: write` - To create pull requests

**Jobs and Steps:**

1. **Checkout repository** - Checks out the code
2. **Setup Node.js** - Installs Node.js 18 with npm caching
3. **Install dependencies** - Runs `npm ci`
4. **Check for outdated packages** - Runs `npm outdated` and saves results
5. **Parse outdated packages** - Categorizes updates by type (patch, minor, major)
6. **Create branch for updates** - Creates a new branch with timestamp
7. **Apply patch and minor updates** - Runs `npm update` to apply safe updates
8. **Run validation** - Runs project validation checks
9. **Commit changes** - Commits the updated package files
10. **Push changes** - Pushes the branch to the remote repository
11. **Create pull request** - Creates a PR for review

**Update Types:**

- **Patch updates** (1.0.0 → 1.0.1) - Bug fixes, applied automatically
- **Minor updates** (1.0.0 → 1.1.0) - New features, backward compatible, applied automatically
- **Major updates** (1.0.0 → 2.0.0) - Breaking changes, reported but not applied automatically

**Customization:**

To change the schedule, modify the `cron` expression:

```yaml
on:
  schedule:
    # Run every day at 2:00 AM UTC
    - cron: '0 2 * * *'
```

To exclude specific packages from updates, add a script to filter them:

```yaml
- name: Filter packages
  run: |
    # Add logic to exclude specific packages
    npm outdated --json | jq 'del(.["package-name"])' > outdated.json
```

---

### Update Pan Constitution Workflow

**File:** `.github/workflows/update-pan.yml`

**Purpose:** This workflow updates the Pan Constitution to the latest version from the source repository.

**Triggers:**
- Manual workflow dispatch only

**Permissions Required:**
- `contents: write` - To create branches and commit changes
- `pull-requests: write` - To create pull requests
- `issues: write` - To create or update tracking issues

**Key Features:**

- Creates or updates a tracking issue for the constitution update
- Downloads the latest constitution from the source repository
- Creates a draft pull request for review
- Handles branch management automatically

**Usage:**

1. Go to the Actions tab in GitHub
2. Select "Update Pan AI Project Constitution"
3. Click "Run workflow"
4. Review the created pull request and tracking issue

---

## Integration with Local Development

Many workflow checks can be run locally before pushing changes:

```bash
# Run all validation checks
npm run validate

# Check constitutional compliance
npm run check:constitution

# Check for placeholders
npm run check:placeholders

# Generate documentation index
npm run docs:index
```

## Workflow Permissions

All workflows follow the principle of least privilege, requesting only the permissions they need:

| Permission | Purpose | Workflows |
|------------|---------|-----------|
| `contents: read` | Read repository contents | All |
| `contents: write` | Create branches, commit changes | Dependency Updates, Update Pan |
| `pull-requests: write` | Create and comment on PRs | Documentation Validation, Dependency Updates, Update Pan |
| `issues: write` | Create and update issues | Update Pan |

## Troubleshooting Workflows

### Common Issues

#### Issue: Workflow doesn't trigger

**Symptoms:** Workflow doesn't run when expected

**Solutions:**
1. Check that the trigger conditions match your changes (e.g., `paths` filters)
2. Verify that the workflow file is in the default branch
3. Check that the workflow is not disabled in the repository settings

#### Issue: npm ci fails

**Symptoms:** "npm ci can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync"

**Solutions:**
1. Run `npm install` locally and commit the updated `package-lock.json`
2. Ensure `package-lock.json` is not in `.gitignore`
3. Delete `node_modules` and `package-lock.json`, then run `npm install` again

#### Issue: Permission denied errors

**Symptoms:** Workflow fails with permission errors

**Solutions:**
1. Check the `permissions` section of the workflow
2. Verify that the repository settings allow GitHub Actions to create PRs and issues
3. Ensure the workflow is using `secrets.GITHUB_TOKEN` correctly

#### Issue: Validation checks fail

**Symptoms:** Linting or validation steps fail

**Solutions:**
1. Run the checks locally to see detailed error messages
2. Fix the issues identified
3. Run the checks again locally to confirm they pass
4. Push the fixes

### Debugging Workflows

To debug workflow issues:

1. **Enable debug logging:**
   - Go to repository Settings → Secrets and variables → Actions
   - Add a secret named `ACTIONS_STEP_DEBUG` with value `true`

2. **Add debug steps:**
   ```yaml
   - name: Debug information
     run: |
       echo "Event name: ${{ github.event_name }}"
       echo "Ref: ${{ github.ref }}"
       echo "Actor: ${{ github.actor }}"
       env
   ```

3. **Use workflow dispatch for testing:**
   ```yaml
   on:
     workflow_dispatch:
       inputs:
         debug:
           description: 'Enable debug mode'
           required: false
           default: 'false'
   ```

## Best Practices

### For Workflow Authors

1. **Use descriptive names** for workflows, jobs, and steps
2. **Add comments** to explain complex logic
3. **Pin action versions** to specific commits or tags for security
4. **Use minimal permissions** required for each job
5. **Test workflows** in a feature branch before merging
6. **Document workflows** in this file and the workflows README

### For Contributors

1. **Run checks locally** before pushing
2. **Review workflow results** in pull requests
3. **Address workflow failures** promptly
4. **Don't bypass workflow checks** without good reason

### For Maintainers

1. **Monitor workflow runs** regularly
2. **Update actions** to their latest versions periodically
3. **Review and merge** automated PRs from dependency updates
4. **Keep documentation** up to date with workflow changes

## Security Considerations

### Secrets Management

- Never hardcode secrets in workflow files
- Use `secrets.GITHUB_TOKEN` for GitHub API operations
- Store sensitive data in repository secrets
- Rotate secrets regularly

### Third-Party Actions

- Review third-party actions before using them
- Pin actions to specific commits or tags
- Prefer official actions from verified creators
- Monitor for security advisories

### Pull Request Workflows

- Be cautious with workflows triggered by `pull_request_target`
- Don't checkout PR code in workflows with write permissions
- Validate all inputs from pull requests
- Use separate workflows for untrusted code

## Further Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Security Hardening Guide](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Marketplace for Actions](https://github.com/marketplace?type=actions)

---

*This documentation is part of the Pan Constitution Template project.*

