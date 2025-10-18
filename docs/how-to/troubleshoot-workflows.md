# How to Troubleshoot GitHub Workflows

This guide provides practical solutions for common issues with GitHub Actions workflows in the Pan Constitution Template project.

## Quick Diagnostic Checklist

Before diving into specific issues, run through this checklist:

- [ ] Is the workflow file in the `.github/workflows/` directory?
- [ ] Is the workflow file on the default branch (main/master)?
- [ ] Does the workflow have the correct trigger conditions?
- [ ] Are all required permissions set in the workflow?
- [ ] Is the workflow enabled in repository settings?
- [ ] Have you checked the Actions tab for error messages?

## Common Issues and Solutions

### Issue 1: Workflow Doesn't Trigger

**Symptoms:**
- You push changes or create a PR, but the workflow doesn't run
- The workflow doesn't appear in the Actions tab

**Possible Causes and Solutions:**

#### Cause: Workflow file not on default branch

**Solution:** Ensure the workflow file is committed to the default branch (main or master):

```bash
git checkout main
git pull
ls .github/workflows/
```

#### Cause: Path filters don't match

**Solution:** Check the `paths` filter in the workflow file. For example, if the workflow only triggers on changes to `docs/**`, it won't run for changes to other files.

```yaml
on:
  pull_request:
    paths:
      - 'docs/**'  # Only triggers for changes in docs/
```

To fix, either:
1. Modify the files in the specified paths, or
2. Update the workflow to include the paths you're modifying

#### Cause: Workflow is disabled

**Solution:** Check repository settings:
1. Go to Settings → Actions → General
2. Ensure "Allow all actions and reusable workflows" is selected
3. Check that the specific workflow is not disabled

---

### Issue 2: npm ci Fails

**Symptoms:**
- Workflow fails at the "Install dependencies" step
- Error message: "npm ci can only install packages when your package.json and package-lock.json are in sync"

**Solutions:**

#### Solution 1: Update package-lock.json

```bash
# Delete existing lockfile and node_modules
rm package-lock.json
rm -rf node_modules

# Reinstall dependencies
npm install

# Commit the new lockfile
git add package-lock.json
git commit -m "chore: update package-lock.json"
git push
```

#### Solution 2: Ensure lockfile is not ignored

Check your `.gitignore` file and ensure `package-lock.json` is not listed:

```bash
# This should NOT be in .gitignore
# package-lock.json
```

#### Solution 3: Use npm install instead of npm ci

If you're frequently updating dependencies, you can change the workflow to use `npm install`:

```yaml
- name: Install dependencies
  run: npm install
```

**Note:** `npm ci` is preferred for CI/CD as it ensures reproducible builds.

---

### Issue 3: Permission Denied Errors

**Symptoms:**
- Workflow fails with "Permission denied" or "403 Forbidden" errors
- Cannot create branches, PRs, or comments

**Solutions:**

#### Solution 1: Check workflow permissions

Ensure the workflow has the necessary permissions:

```yaml
permissions:
  contents: write        # For creating branches and commits
  pull-requests: write   # For creating and commenting on PRs
  issues: write          # For creating and updating issues
```

#### Solution 2: Check repository settings

1. Go to Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Ensure "Read and write permissions" is selected
4. Check "Allow GitHub Actions to create and approve pull requests"

#### Solution 3: Use GITHUB_TOKEN correctly

Ensure you're using the token correctly in the workflow:

```yaml
env:
  GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Or with the GitHub CLI:

```yaml
- name: Create PR
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  run: gh pr create --title "..." --body "..."
```

---

### Issue 4: Validation Checks Fail

**Symptoms:**
- Markdown linting fails
- Spelling checks fail
- Constitutional compliance check fails

**Solutions:**

#### For Markdown linting errors:

1. Run the linter locally to see detailed errors:
   ```bash
   npm run lint:md
   ```

2. Fix the issues identified, or update `.markdownlint.yml` if the rule is too strict

3. Re-run the linter to confirm:
   ```bash
   npm run lint:md
   ```

#### For spelling errors:

1. Run the spell checker locally:
   ```bash
   npm run lint:spelling
   ```

2. For legitimate words, add them to `.cspell.json`:
   ```json
   {
     "words": [
       "your-technical-term",
       "project-specific-word"
     ]
   }
   ```

3. Re-run the spell checker:
   ```bash
   npm run lint:spelling
   ```

#### For constitutional compliance errors:

1. Run the validation script locally with verbose output:
   ```bash
   node scripts/validate-constitution.js --verbose
   ```

2. Fix the issues identified (missing files, directories, or front matter)

3. Re-run the validation:
   ```bash
   npm run check:constitution
   ```

---

### Issue 5: INDEX.md Out of Date

**Symptoms:**
- Documentation validation workflow fails
- Error message: "INDEX.md is out of date"

**Solution:**

1. Generate a new index:
   ```bash
   npm run docs:index
   ```

2. Review the changes:
   ```bash
   git diff INDEX.md
   ```

3. Commit the updated index:
   ```bash
   git add INDEX.md
   git commit -m "docs: update INDEX.md"
   git push
   ```

**Prevention:** Run `npm run docs:index` before committing documentation changes.

---

### Issue 6: Workflow Takes Too Long

**Symptoms:**
- Workflow runs for a long time
- Workflow times out

**Solutions:**

#### Solution 1: Use caching

Ensure Node.js setup uses caching:

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'  # This enables caching
```

#### Solution 2: Reduce checkout depth

If you don't need full history, use shallow checkout:

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    fetch-depth: 1  # Only fetch the latest commit
```

#### Solution 3: Parallelize jobs

Split long-running jobs into parallel jobs:

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Lint Markdown
        run: npm run lint:md
  
  spell-check:
    runs-on: ubuntu-latest
    steps:
      - name: Check spelling
        run: npm run lint:spelling
```

---

### Issue 7: Dependency Update PR Not Created

**Symptoms:**
- Dependency update workflow runs successfully
- No pull request is created

**Possible Causes and Solutions:**

#### Cause: No updates available

**Solution:** Check the workflow logs. If all packages are up to date, no PR will be created.

#### Cause: No changes to commit

**Solution:** The workflow checks if there are changes before creating a PR. If `npm update` doesn't change anything, no PR is created.

#### Cause: Permission issues

**Solution:** Ensure the workflow has `pull-requests: write` permission and that repository settings allow Actions to create PRs.

---

## Advanced Debugging Techniques

### Enable Debug Logging

To see detailed logs for workflow runs:

1. Go to repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `ACTIONS_STEP_DEBUG`
4. Value: `true`
5. Save

This will enable debug logging for all workflow runs.

### Add Debug Steps

Add debug steps to your workflow to inspect variables and environment:

```yaml
- name: Debug information
  run: |
    echo "Event name: ${{ github.event_name }}"
    echo "Ref: ${{ github.ref }}"
    echo "Actor: ${{ github.actor }}"
    echo "Repository: ${{ github.repository }}"
    echo "Workflow: ${{ github.workflow }}"
    echo "---"
    echo "Environment variables:"
    env | sort
```

### Test Workflows Locally

Use [act](https://github.com/nektos/act) to test workflows locally:

```bash
# Install act
brew install act  # macOS
# or
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash  # Linux

# Run a workflow
act -j validate-docs
```

### Review Workflow Logs

To review logs for a failed workflow:

1. Go to the Actions tab
2. Click on the failed workflow run
3. Click on the failed job
4. Expand the failed step to see detailed logs
5. Look for error messages and stack traces

---

## Preventive Measures

### Run Checks Locally

Before pushing changes, run all checks locally:

```bash
# Install dependencies
npm install

# Run all validation checks
npm run validate

# Check constitutional compliance
npm run check:constitution

# Check for placeholders
npm run check:placeholders

# Generate documentation index
npm run docs:index
```

### Use Pre-commit Hooks

Set up a pre-commit hook to run checks automatically:

Create `.git/hooks/pre-commit`:

```bash
#!/bin/sh

echo "Running pre-commit checks..."

# Run validation
npm run validate || exit 1

# Check constitutional compliance
npm run check:constitution || exit 1

# Check for placeholders
npm run check:placeholders || exit 1

echo "✓ All pre-commit checks passed"
```

Make it executable:

```bash
chmod +x .git/hooks/pre-commit
```

### Keep Dependencies Updated

Regularly update dependencies to avoid security issues and compatibility problems:

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Commit changes
git add package.json package-lock.json
git commit -m "chore(deps): update dependencies"
```

---

## Getting Help

If you're still experiencing issues after trying these solutions:

1. **Check the workflow logs** in the Actions tab for detailed error messages
2. **Search GitHub Issues** for similar problems
3. **Review the workflow documentation** in `docs/reference/github-workflows.md`
4. **Ask for help** by creating an issue with:
   - Description of the problem
   - Steps to reproduce
   - Workflow logs (if applicable)
   - What you've already tried

---

## Further Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Troubleshooting GitHub Actions](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [GitHub Community Forum](https://github.community/)

---

*This guide is part of the Pan Constitution Template project documentation.*

