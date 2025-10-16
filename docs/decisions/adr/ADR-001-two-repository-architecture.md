---
topic: architecture-decision
name: ADR-001 - Two-Repository Architecture for Pan Constitution
author: Manus AI
version: 1.0.0
date: 2025-10-14
description: Decision to use separate repositories for Pan Constitution development and template distribution
initiative: pan-governance-foundation
related_issues:
  - '#5'
  - '#6'
  - '#7'
status: accepted
tags:
  - adr
  - architecture
  - repository-structure
---

# ADR-001: Two-Repository Architecture for Pan Constitution

**Status:** Accepted  
**Date:** 2025-10-14  
**Deciders:** Pan Governance Team  
**Technical Story:** Epic #5, Research #6, Decisions #7

## Context and Problem Statement

The Pan Constitution needs to be both developed and distributed to new projects. We need to decide whether to:
1. Use a single repository with template subdirectory
2. Use two separate repositories (development and template)
3. Use branches within a single repository

The solution must balance:
- **Clarity** for teams adopting the template
- **Maintainability** for Pan Governance Team
- **GitHub best practices** for template repositories
- **Simplicity** to reduce errors and confusion

## Decision Drivers

- **User Experience:** Teams using the template should have a clean, simple starting point
- **GitHub Template Feature:** GitHub's native "Use this template" feature requires a clean repository
- **Development History:** Pan Constitution development history should not pollute project repositories
- **Maintenance Overhead:** Solution should be easy to maintain and update
- **Best Practices:** Should follow industry-standard patterns for template repositories
- **Complexity:** Simpler solutions reduce risk of errors and confusion

## Considered Options

### Option 1: Single Repository with /template Subdirectory

**Approach:** Create a `/template` directory within `pan-constitution-dev` containing all template files.

**Pros:**
- Single repository to maintain
- Easy to keep template in sync with development
- All Pan Constitution work in one place

**Cons:**
- Cannot use GitHub's "Use this template" feature
- Users must manually copy files from subdirectory
- Development history and files visible to template users
- Confusing structure for contributors
- Not standard practice for template repositories
- Higher risk of errors (copying wrong files, including dev artifacts)

**Implementation Effort:** Medium (2-3 days)

### Option 2: Two Separate Repositories (CHOSEN)

**Approach:** 
- `pan-constitution-dev` - Development repository for Pan Constitution itself
- `pan-constitution-template` - Clean template repository for new projects

**Pros:**
- Uses GitHub's native "Use this template" feature
- Clean, professional template repository
- No development history in template
- Clear separation of concerns
- Follows industry best practices
- Easier for users to understand and adopt
- Can mark template repo as "template" in GitHub

**Cons:**
- Two repositories to maintain
- Updates require syncing from dev to template
- Slightly more complex release process

**Implementation Effort:** Medium (3-4 days including sync workflow)

### Option 3: Branch-Based Approach

**Approach:** Use `main` branch for development, `template` branch for template distribution.

**Pros:**
- Single repository
- Git branching is familiar to developers

**Cons:**
- Cannot use GitHub's "Use this template" feature
- Confusing for users (which branch to use?)
- Branch history still contains development commits
- Not standard practice
- Harder to maintain separate content
- Risk of accidental merges

**Implementation Effort:** Low (1-2 days)

## Decision Outcome

**Chosen option: "Two Separate Repositories"** because it:

1. **Follows GitHub best practices** for template repositories
2. **Provides cleanest user experience** with native "Use this template" button
3. **Separates concerns** clearly (development vs. distribution)
4. **Eliminates confusion** about what files belong where
5. **Enables professional template presentation** without development artifacts
6. **Reduces error risk** by providing clean, tested template

The additional maintenance overhead is acceptable given the significant benefits in clarity, usability, and adherence to best practices.

### Implementation Strategy

**Phase 1: Create Template Repository (Week 1)**
1. Create new `pan-constitution-template` repository
2. Enable GitHub template repository feature
3. Scaffold complete structure (~99 files)
4. Add all configuration, documentation, and infrastructure files

**Phase 2: Content Population (Weeks 2-6)**
5. Transform content from dev repo to project-centric templates
6. Add placeholders and customisation markers
7. Create bootstrap script (`setup.sh`)
8. Test with sample projects

**Phase 3: Release and Sync Workflow (Week 7)**
9. Document sync process from dev to template
10. Create release workflow
11. Tag v1.0.0
12. Announce availability

### Positive Consequences

- **Clear user experience:** Teams immediately understand what to do
- **Professional presentation:** Template looks polished and complete
- **GitHub integration:** "Use this template" button provides seamless onboarding
- **Separation of concerns:** Development work doesn't impact template users
- **Flexibility:** Can evolve dev repo without affecting template until ready

### Negative Consequences

- **Sync overhead:** Updates to Pan Constitution require manual sync to template
- **Two repos to monitor:** Issues and PRs may be split across repositories
- **Release coordination:** Must coordinate releases between dev and template

### Mitigation Strategies

**For sync overhead:**
- Create documented sync workflow
- Use automation where possible (scripts to copy files)
- Schedule regular sync reviews (quarterly)

**For split issues:**
- Clear guidance in both repos on where to file issues
- Link between repos in README
- Template issues should reference dev repo for governance questions

**For release coordination:**
- Use semantic versioning in both repos
- Template version tracks Pan Constitution version
- Release notes clearly state compatibility

## Alternatives Considered Summary

| Criterion | Single Repo + Subdir | Two Repos | Branch-Based |
|-----------|---------------------|-----------|--------------|
| GitHub Template Feature | ❌ | ✅ | ❌ |
| User Clarity | ⚠️ | ✅ | ❌ |
| Maintenance Overhead | ✅ | ⚠️ | ✅ |
| Best Practices | ❌ | ✅ | ❌ |
| Error Risk | ⚠️ | ✅ | ⚠️ |
| **Overall** | **Not Recommended** | **✅ Chosen** | **Not Recommended** |

## References

- GitHub Template Repositories: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository
- Epic #5: Pan Constitution Template Repository
- Issue #6: Research and design solution for Pan Constitution template repository
- Issue #7: Make key architectural decisions for template repository
- Cross-project analysis: `docs/analysis/cross-project-file-inventory.md`

---

**Version:** 1.0.0 | **Last Updated:** 2025-10-14 | **Status:** Accepted

