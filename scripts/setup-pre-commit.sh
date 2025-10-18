#!/bin/bash

# Pre-commit Hook Setup Script
# This script sets up Git pre-commit hooks for validation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_error "Not a git repository. Please run this script from the project root."
    exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Create pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

# Pre-commit validation hook
# Runs validation checks before allowing commit

set -e

echo "Running pre-commit validation..."

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "Error: npm not found. Please install Node.js and npm."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Run markdown linting
echo "→ Checking markdown formatting..."
if ! npm run lint:md --silent; then
    echo "✗ Markdown linting failed. Fix the issues or run 'npm run format' to auto-fix."
    exit 1
fi

# Run spell checking
echo "→ Checking spelling..."
if ! npm run lint:spelling --silent; then
    echo "✗ Spell check failed. Fix typos or add words to .cspell.json"
    exit 1
fi

# Run prettier check
echo "→ Checking code formatting..."
if ! npx prettier --check '**/*.{md,json,yml,yaml}' --log-level silent; then
    echo "✗ Formatting check failed. Run 'npm run format' to auto-fix."
    exit 1
fi

# Validate YAML front matter (if script exists)
if [ -f "scripts/validate-frontmatter.js" ]; then
    echo "→ Validating YAML front matter..."
    if ! npm run validate:frontmatter --silent; then
        echo "✗ Front matter validation failed. Check YAML syntax in markdown files."
        exit 1
    fi
fi

echo "✓ All pre-commit checks passed!"
exit 0
EOF

# Make pre-commit hook executable
chmod +x .git/hooks/pre-commit

print_success "Pre-commit hook installed successfully"

# Create commit-msg hook for conventional commits
cat > .git/hooks/commit-msg << 'EOF'
#!/bin/bash

# Commit message validation hook
# Ensures commit messages follow conventional commit format

commit_msg_file=$1
commit_msg=$(cat "$commit_msg_file")

# Conventional commit pattern: type(scope): description
# type: feat, fix, docs, style, refactor, test, chore
# scope: optional
# description: required

pattern='^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\([a-z0-9-]+\))?: .{1,100}$'

if ! echo "$commit_msg" | grep -qE "$pattern"; then
    echo "Error: Commit message does not follow conventional commit format"
    echo ""
    echo "Format: type(scope): description"
    echo ""
    echo "Valid types: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert"
    echo "Scope: optional, lowercase with hyphens"
    echo "Description: required, 1-100 characters"
    echo ""
    echo "Examples:"
    echo "  feat(agent): add troubleshooting section"
    echo "  fix(docs): correct typo in README"
    echo "  docs: update onboarding guide"
    echo ""
    echo "Your message:"
    echo "$commit_msg"
    exit 1
fi

exit 0
EOF

# Make commit-msg hook executable
chmod +x .git/hooks/commit-msg

print_success "Commit message validation hook installed successfully"

# Create pre-push hook
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash

# Pre-push validation hook
# Runs comprehensive validation before allowing push

set -e

echo "Running pre-push validation..."

# Run full validation suite
if ! npm run validate; then
    echo "✗ Validation failed. Fix issues before pushing."
    exit 1
fi

# Check if documentation index is up to date
if [ -f "scripts/generate-docs-index-v2.js" ]; then
    echo "→ Checking documentation index..."
    npm run docs:index:output > /dev/null
    if ! git diff --exit-code INDEX.md > /dev/null; then
        echo "✗ INDEX.md is out of date. Run 'npm run docs:index' and commit the changes."
        exit 1
    fi
fi

echo "✓ All pre-push checks passed!"
exit 0
EOF

# Make pre-push hook executable
chmod +x .git/hooks/pre-push

print_success "Pre-push validation hook installed successfully"

# Print summary
echo ""
print_info "Git hooks installed:"
echo "  • pre-commit: Runs linting and formatting checks"
echo "  • commit-msg: Validates conventional commit format"
echo "  • pre-push: Runs full validation suite"
echo ""
print_info "To bypass hooks (not recommended):"
echo "  git commit --no-verify"
echo "  git push --no-verify"
echo ""
print_success "Setup complete! Your commits will now be validated automatically."

