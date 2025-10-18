# GitHub Actions Workflows

This directory contains GitHub Actions workflows that automate various aspects of the project's CI/CD pipeline.

## Available Workflows

### 1. Documentation Validation (`docs-validation.yml`)

**Purpose:** Validates the documentation structure and content.

**Triggers:**
- Pull requests that modify documentation files
- Push to the default branch (main/master)
- Manual workflow dispatch

**Checks:**
- INDEX.md is current and matches actual documentation structure
- Markdown formatting is valid
- Spelling is correct
- Constitutional compliance is verified
- No placeholders remain

**Actions on failure:**
- Comments on pull requests with specific issues
- Fails the workflow to prevent merging

### 2. Dependency Updates (`dependency-update.yml`)

**Purpose:** Automatically checks for outdated npm packages and creates pull requests for safe updates.

**Triggers:**
- Weekly on Monday at 9:00 AM UTC
- Manual workflow dispatch

**Features:**
- Checks for outdated dependencies
- Applies patch and minor updates automatically
- Runs validation checks before proposing updates
- Creates pull requests for review

**Configuration:**
- Can be manually triggered with specific update types (all, patch, minor, major)

### 3. Update Pan Constitution (`update-pan.yml`)

**Purpose:** Updates the Pan Constitution to the latest version.

**Triggers:**
- Manual workflow dispatch only

**Features:**
- Creates or updates tracking issue
- Downloads latest constitution from source
- Creates draft pull request for review

## Workflow Best Practices

### For Contributors

1. **Always check workflow status** before merging pull requests
2. **Review automated PR comments** for actionable feedback
3. **Run validation locally** before pushing:
   ```bash
   npm run validate
   npm run check:constitution
   npm run check:placeholders
   ```

### For Maintainers

1. **Monitor weekly dependency updates** and review/merge PRs promptly
2. **Review workflow runs** in the Actions tab regularly
3. **Update workflows** when project structure or requirements change
4. **Test workflow changes** in a feature branch before merging to main

## Customizing Workflows

### Adding New Workflows

When adding a new workflow:

1. Create a new `.yml` file in this directory
2. Add clear comments explaining the workflow's purpose
3. Use descriptive job and step names
4. Include appropriate triggers
5. Set minimal required permissions
6. Add documentation to this README

### Modifying Existing Workflows

When modifying workflows:

1. Test changes in a feature branch
2. Use `workflow_dispatch` trigger for manual testing
3. Update documentation if behavior changes
4. Consider backward compatibility

### Common Workflow Patterns

**Checkout with full history:**
```yaml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    fetch-depth: 0
```

**Setup Node.js with caching:**
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'
```

**Conditional steps:**
```yaml
- name: Run only on PR
  if: github.event_name == 'pull_request'
  run: echo "This is a PR"
```

## Troubleshooting

### Workflow fails with "Permission denied"

**Solution:** Check the `permissions` section of the workflow and ensure it has the necessary permissions.

### Workflow doesn't trigger

**Solution:** Verify the trigger conditions in the `on` section. For `paths` filters, ensure the paths match the files being changed.

### npm ci fails

**Solution:** Ensure `package-lock.json` is committed and up to date. Run `npm install` locally and commit the lockfile.

### Validation checks fail

**Solution:** Run the checks locally to see detailed error messages:
```bash
npm run validate
npm run check:constitution
```

## Security Considerations

1. **Use `secrets.GITHUB_TOKEN`** for GitHub API operations (automatically provided)
2. **Never hardcode secrets** in workflow files
3. **Use minimal permissions** required for each job
4. **Review third-party actions** before using them
5. **Pin action versions** to specific commits or tags

## Further Reading

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

---

*This documentation is part of the Pan Constitution Template project.*

