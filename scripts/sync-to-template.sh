#!/bin/bash

# sync-to-template.sh
# Sync changes from pan-constitution-dev to pan-constitution-template repository
# with automatic placeholder transformation

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
DRY_RUN=false
TRANSFORM=false
FULL_SYNC=false
TARGET_REPO="../pan-constitution-template"
FILES_TO_SYNC=""

# Template-relevant paths
TEMPLATE_PATHS=(
  ".specify/memory/constitution.md"
  ".specify/rules/"
  ".specify/templates/"
  ".github/workflows/"
  ".github/ISSUE_TEMPLATE/"
  ".github/PULL_REQUEST_TEMPLATE.md"
  ".agent/"
  "scripts/"
  "docs/how-to/"
  "docs/reference/"
  "docs/getting-started/"
  ".markdownlint.yml"
  ".cspell.json"
  ".prettierrc.yml"
  ".editorconfig"
  ".gitignore"
  "package.json"
  "LICENCE"
)

# Placeholder transformations
declare -A TRANSFORMATIONS=(
  ["pan-constitution-dev"]="{{PROJECT_NAME}}"
  ["Pan Constitution"]="{{PROJECT_DISPLAY_NAME}}"
  ["kewtyboi"]="{{GITHUB_ORG}}"
)

# Print usage
usage() {
  cat << EOF
Usage: $0 [OPTIONS]

Sync changes from pan-constitution-dev to pan-constitution-template repository.

OPTIONS:
  --dry-run           Preview changes without applying
  --files <paths>     Sync specific files or directories (comma-separated)
  --full              Sync all template-relevant files
  --transform         Apply placeholder transformations
  --target <path>     Path to template repository (default: ../pan-constitution-template)
  --help              Show this help message

EXAMPLES:
  # Preview full sync with transformations
  $0 --dry-run --full --transform

  # Sync only constitution file
  $0 --files ".specify/memory/constitution.md" --transform

  # Sync workflows to custom location
  $0 --files ".github/workflows/" --target "/path/to/template"

EOF
  exit 0
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --transform)
      TRANSFORM=true
      shift
      ;;
    --full)
      FULL_SYNC=true
      shift
      ;;
    --files)
      FILES_TO_SYNC="$2"
      shift 2
      ;;
    --target)
      TARGET_REPO="$2"
      shift 2
      ;;
    --help)
      usage
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      usage
      ;;
  esac
done

# Print header
echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Pan Constitution → Template Repository Sync              ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Validate source repository
if [ ! -f ".specify/memory/constitution.md" ]; then
  echo -e "${RED}Error: Must run from pan-constitution-dev repository root${NC}"
  exit 1
fi

# Validate target repository
if [ ! -d "$TARGET_REPO" ]; then
  echo -e "${YELLOW}Warning: Target repository not found: $TARGET_REPO${NC}"
  echo -e "${YELLOW}Please clone pan-constitution-template first${NC}"
  exit 1
fi

# Determine files to sync
if [ "$FULL_SYNC" = true ]; then
  SYNC_FILES=("${TEMPLATE_PATHS[@]}")
elif [ -n "$FILES_TO_SYNC" ]; then
  IFS=',' read -ra SYNC_FILES <<< "$FILES_TO_SYNC"
else
  echo -e "${RED}Error: Must specify --full or --files${NC}"
  usage
fi

# Print configuration
echo -e "${GREEN}Configuration:${NC}"
echo -e "  Source: $(pwd)"
echo -e "  Target: $TARGET_REPO"
echo -e "  Dry Run: $DRY_RUN"
echo -e "  Transform: $TRANSFORM"
echo -e "  Files: ${#SYNC_FILES[@]} items"
echo ""

# Sync files
echo -e "${GREEN}Syncing files...${NC}"
SYNCED_COUNT=0
SKIPPED_COUNT=0

for file in "${SYNC_FILES[@]}"; do
  if [ ! -e "$file" ]; then
    echo -e "${YELLOW}  ⊘ Skipped: $file (not found)${NC}"
    ((SKIPPED_COUNT++))
    continue
  fi

  if [ "$DRY_RUN" = true ]; then
    echo -e "${BLUE}  → Would sync: $file${NC}"
  else
    # Create target directory if needed
    TARGET_DIR="$TARGET_REPO/$(dirname "$file")"
    mkdir -p "$TARGET_DIR"

    # Copy file or directory
    if [ -d "$file" ]; then
      cp -r "$file" "$TARGET_DIR/"
    else
      cp "$file" "$TARGET_REPO/$file"
    fi

    echo -e "${GREEN}  ✓ Synced: $file${NC}"
  fi

  ((SYNCED_COUNT++))
done

echo ""
echo -e "${GREEN}Summary:${NC}"
echo -e "  Synced: $SYNCED_COUNT"
echo -e "  Skipped: $SKIPPED_COUNT"
echo ""

# Apply transformations
if [ "$TRANSFORM" = true ] && [ "$DRY_RUN" = false ]; then
  echo -e "${GREEN}Applying placeholder transformations...${NC}"

  for search in "${!TRANSFORMATIONS[@]}"; do
    replace="${TRANSFORMATIONS[$search]}"
    echo -e "${BLUE}  → Replacing '$search' with '$replace'${NC}"

    # Find and replace in all markdown files
    find "$TARGET_REPO" -type f -name "*.md" -not -path "*/node_modules/*" -exec sed -i "s/$search/$replace/g" {} \;

    # Find and replace in YAML files
    find "$TARGET_REPO" -type f -name "*.yml" -not -path "*/node_modules/*" -exec sed -i "s/$search/$replace/g" {} \;
    find "$TARGET_REPO" -type f -name "*.yaml" -not -path "*/node_modules/*" -exec sed -i "s/$search/$replace/g" {} \;

    # Find and replace in JSON files
    find "$TARGET_REPO" -type f -name "*.json" -not -path "*/node_modules/*" -exec sed -i "s/$search/$replace/g" {} \;
  done

  echo -e "${GREEN}  ✓ Transformations applied${NC}"
  echo ""
fi

# Validation
if [ "$DRY_RUN" = false ]; then
  echo -e "${GREEN}Running validation in target repository...${NC}"

  cd "$TARGET_REPO"

  # Check if node_modules exists
  if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}  Installing dependencies...${NC}"
    npm install --silent
  fi

  # Run markdown linting
  if npm run lint:md > /dev/null 2>&1; then
    echo -e "${GREEN}  ✓ Markdown linting passed${NC}"
  else
    echo -e "${RED}  ✗ Markdown linting failed${NC}"
    echo -e "${YELLOW}  Run 'cd $TARGET_REPO && npm run lint:md' for details${NC}"
  fi

  # Run spell checking
  if npm run lint:spelling > /dev/null 2>&1; then
    echo -e "${GREEN}  ✓ Spell checking passed${NC}"
  else
    echo -e "${RED}  ✗ Spell checking failed${NC}"
    echo -e "${YELLOW}  Run 'cd $TARGET_REPO && npm run lint:spelling' for details${NC}"
  fi

  cd - > /dev/null
  echo ""
fi

# Next steps
if [ "$DRY_RUN" = true ]; then
  echo -e "${YELLOW}This was a dry run. No changes were made.${NC}"
  echo -e "${YELLOW}Run without --dry-run to apply changes.${NC}"
else
  echo -e "${GREEN}✓ Sync complete!${NC}"
  echo ""
  echo -e "${BLUE}Next steps:${NC}"
  echo -e "  1. Review changes: cd $TARGET_REPO && git status"
  echo -e "  2. Test manually: cd $TARGET_REPO && npm test"
  echo -e "  3. Commit: cd $TARGET_REPO && git add . && git commit"
  echo -e "  4. Create PR: cd $TARGET_REPO && gh pr create"
  echo -e "  5. Update sync log: docs/ops/template-sync-log.md"
fi

echo ""

