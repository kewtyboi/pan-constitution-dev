#!/bin/bash

# Pan Constitution Template Bootstrap Script
# This script initializes a new project from the pan-constitution-template
# Version: 1.0.0

set -e  # Exit on error

# Colors for output
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
NC="\033[0m" # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Functions
print_header() {
    echo -e "\\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  Pan Constitution Template Bootstrap${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\\n"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Prompt for project information
prompt_project_info() {
    echo -e "${BLUE}Project Information${NC}"
    echo -e "Please provide the following information:\\n"
    
    # Project name (kebab-case)
    while true; do
        read -p "Project name (kebab-case, e.g., my-awesome-project): " PROJECT_NAME
        if [[ $PROJECT_NAME =~ ^[a-z0-9-]+$ ]]; then
            break
        else
            print_error "Project name must be lowercase with hyphens only (kebab-case)"
        fi
    done
    
    # Project display name
    read -p "Project display name (e.g., My Awesome Project): " PROJECT_DISPLAY_NAME
    if [ -z "$PROJECT_DISPLAY_NAME" ]; then
        # Convert kebab-case to Title Case
        PROJECT_DISPLAY_NAME=$(echo "$PROJECT_NAME" | sed \'s/-/ /g\' | sed \'s/\\b\\(.\\)/\\u\\1/g\')
    fi
    
    # GitHub organization
    read -p "GitHub organization/username (e.g., myorg): " GITHUB_ORG
    if [ -z "$GITHUB_ORG" ]; then
        print_error "GitHub organization is required"
        exit 1
    fi
    
    # Project team
    read -p "Project team name (default: $PROJECT_DISPLAY_NAME Team): " PROJECT_TEAM
    if [ -z "$PROJECT_TEAM" ]; then
        PROJECT_TEAM="$PROJECT_DISPLAY_NAME Team"
    fi
    
    # Initial initiative
    read -p "Initial initiative name (default: foundation): " INITIAL_INITIATIVE
    if [ -z "$INITIAL_INITIATIVE" ]; then
        INITIAL_INITIATIVE="foundation"
    fi
    
    # Creation date
    CREATION_DATE=$(date +%Y-%m-%d)
    
    # Project description
    read -p "Project description (one line): " PROJECT_DESCRIPTION
    if [ -z "$PROJECT_DESCRIPTION" ]; then
        PROJECT_DESCRIPTION="A project following the Pan Constitution governance framework"
    fi
    
    echo "\\n"
}

# Display configuration summary
display_summary() {
    echo -e "\\n${BLUE}Configuration Summary${NC}"
    echo -e "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "Project Name:        ${GREEN}$PROJECT_NAME${NC}"
    echo -e "Display Name:        ${GREEN}$PROJECT_DISPLAY_NAME${NC}"
    echo -e "GitHub Org:          ${GREEN}$GITHUB_ORG${NC}"
    echo -e "Team:                ${GREEN}$PROJECT_TEAM${NC}"
    echo -e "Initiative:          ${GREEN}$INITIAL_INITIATIVE${NC}"
    echo -e "Creation Date:       ${GREEN}$CREATION_DATE${NC}"
    echo -e "Description:         ${GREEN}$PROJECT_DESCRIPTION${NC}"
    echo -e "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n"
    
    read -p "Proceed with these settings? (y/n): " CONFIRM
    if [[ ! $CONFIRM =~ ^[Yy]$ ]]; then
        print_error "Bootstrap cancelled"
        exit 1
    fi
}

# Replace placeholders in files
replace_placeholders() {
    echo -e "\\n${BLUE}Replacing Placeholders${NC}"
    
    # Find all text files (excluding .git, node_modules, binary files)
    FILES=$(find "$SCRIPT_DIR" -type f \
        -not -path "*/\\.git/*" \
        -not -path "*/node_modules/*" \
        -not -path "*/\\.next/*" \
        -not -path "*/dist/*" \
        -not -path "*/build/*" \
        -not -name "*.png" \
        -not -name "*.jpg" \
        -not -name "*.jpeg" \
        -not -name "*.gif" \
        -not -name "*.ico" \
        -not -name "*.pdf" \
        -not -name "bootstrap.sh")
    
    local count=0
    for file in $FILES; do
        # Check if file contains any placeholders
        if grep -q "{{" "$file" 2>/dev/null; then
            # Replace placeholders
            sed -i "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" "$file"
            sed -i "s/{{PROJECT_DISPLAY_NAME}}/$PROJECT_DISPLAY_NAME/g" "$file"
            sed -i "s/{{GITHUB_ORG}}/$GITHUB_ORG/g" "$file"
            sed -i "s/{{PROJECT_TEAM}}/$PROJECT_TEAM/g" "$file"
            sed -i "s/{{INITIAL_INITIATIVE}}/$INITIAL_INITIATIVE/g" "$file"
            sed -i "s/{{CREATION_DATE}}/$CREATION_DATE/g" "$file"
            sed -i "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" "$file"
            
            ((count++))
        fi
    done
    
    print_success "Replaced placeholders in $count files"
}

# Initialize git repository
initialize_git() {
    echo -e "\\n${BLUE}Git Initialization${NC}"
    
    if [ -d "$SCRIPT_DIR/\\.git" ]; then
        read -p "Git repository already exists. Reinitialize? (y/n): " REINIT
        if [[ $REINIT =~ ^[Yy]$ ]]; then
            rm -rf "$SCRIPT_DIR/\\.git"
            git init
            print_success "Git repository reinitialized"
        else
            print_info "Keeping existing git repository"
            return
        fi
    else
        git init
        print_success "Git repository initialized"
    fi
    
    # Set up initial commit
    git add .
    git commit -m "chore: initialize project from pan-constitution-template\\n\\nProject: $PROJECT_DISPLAY_NAME\\nOrganization: $GITHUB_ORG\\nInitiative: $INITIAL_INITIATIVE\\n\\nInitialized from pan-constitution-template with:\\n- Pan Constitution governance framework\\n- Agent system with 19 role profiles\\n- Diátaxis documentation structure\\n- CI/CD workflows\\n- Issue and PR templates"
    
    print_success "Initial commit created"
    
    # Set up remote if requested
    read -p "Set up GitHub remote? (y/n): " SETUP_REMOTE
    if [[ $SETUP_REMOTE =~ ^[Yy]$ ]]; then
        REMOTE_URL="https://github.com/$GITHUB_ORG/$PROJECT_NAME.git"
        git remote add origin "$REMOTE_URL"
        print_success "Remote added: $REMOTE_URL"
        print_info "Push with: git push -u origin main"
    fi
}

# Install dependencies
install_dependencies() {
    echo -e "\\n${BLUE}Installing Dependencies${NC}"
    
    if [ -f "$SCRIPT_DIR/package.json" ]; then
        if command -v npm &> /dev/null; then
            npm install
            print_success "Dependencies installed"
        else
            print_warning "npm not found. Please install Node.js and run: npm install"
        fi
    fi
}

# Generate documentation index
generate_index() {
    echo -e "\\n${BLUE}Generating Documentation Index${NC}"
    
    if [ -f "$SCRIPT_DIR/package.json" ] && command -v npm &> /dev/null; then
        npm run docs:index
        print_success "INDEX.md generated"
    else
        print_warning "Skipping INDEX.md generation. Run \'npm run docs:index\' manually"
    fi
}

# Create IDE integration
setup_ide_integration() {
    echo -e "\\n${BLUE}IDE Integration${NC}"
    
    read -p "Which IDE are you using? (cursor/codex/none): " IDE_CHOICE
    
    case $IDE_CHOICE in
        cursor)
            mkdir -p "$SCRIPT_DIR/\\.cursor/commands"
            cp "$SCRIPT_DIR/\\.agent/agent-prompt/"* "$SCRIPT_DIR/\\.cursor/commands/"
            print_success "Cursor IDE integration set up"
            ;;
        codex)
            mkdir -p "$SCRIPT_DIR/\\.codex/prompts"
            cp "$SCRIPT_DIR/\\.agent/agent-prompt/"* "$SCRIPT_DIR/\\.codex/prompts/"
            print_success "Codex IDE integration set up"
            ;;
        none)
            print_info "Skipping IDE integration"
            ;;
        *)
            print_warning "Unknown IDE. Skipping integration"
            ;;
    esac
}

# Clean up bootstrap script
cleanup() {
    echo -e "\\n${BLUE}Cleanup${NC}"
    
    read -p "Remove bootstrap.sh after completion? (y/n): " REMOVE_BOOTSTRAP
    if [[ $REMOVE_BOOTSTRAP =~ ^[Yy]$ ]]; then
        rm "$SCRIPT_DIR/bootstrap.sh"
        print_success "Bootstrap script removed"
    else
        print_info "Bootstrap script kept for reference"
    fi
}

# Display next steps
display_next_steps() {
    echo -e "\\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}  Bootstrap Complete!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\\n"
    
    echo -e "${BLUE}Next Steps:${NC}\\n"
    echo "1. Review and customize:"
    echo "   - README.md - Update project-specific information"
    echo "   - AGENTS.md - Customize for your team"
    echo "   - docs/ops/governance.md - Define your governance"
    echo "\\n"
    echo "2. Set up GitHub repository:"
    echo "   - Create repository: https://github.com/new"
    echo "   - Push code: git push -u origin main"
    echo "   - Enable GitHub Actions"
    echo "   - Configure branch protection"
    echo "\\n"
    echo "3. Start development:"
    echo "   - Create your first issue"
    echo "   - Set up project board"
    echo "   - Invite team members"
    echo "   - Review .specify/memory/constitution.md"
    echo "\\n"
    echo "4. Documentation:"
    echo "   - Add getting-started guides"
    echo "   - Document your architecture"
    echo "   - Create ADRs for key decisions"
    echo "\\n"
    echo -e "${BLUE}Resources:${NC}"
    echo "   - Constitution: .specify/memory/constitution.md"
    echo "   - Agent System: .agent/"
    echo "   - Documentation: docs/"
    echo "   - Scripts: scripts/"
    echo "\\n"
    echo -e "${GREEN}Happy building! 🚀${NC}\\n"
}

# Main execution
main() {
    print_header
    
    # Check if already bootstrapped
    if ! grep -q "{{" "$SCRIPT_DIR/README.md" 2>/dev/null; then
        print_warning "This project appears to already be bootstrapped."
        read -p "Continue anyway? (y/n): " CONTINUE
        if [[ ! $CONTINUE =~ ^[Yy]$ ]]; then
            print_error "Bootstrap cancelled"
            exit 1
        fi
    fi
    
    prompt_project_info
    display_summary
    replace_placeholders
    initialize_git
    install_dependencies
    generate_index
    setup_ide_integration
    cleanup
    display_next_steps
}

# Run main function
main

