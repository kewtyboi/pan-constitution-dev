# GitHub Issue Template for Constitution Update

## Issue Title
Constitution Update to v1.1.1 and Infrastructure Setup

## Issue Body

**Type**: Documentation Update  
**Initiative**: pan-governance-foundation  
**Priority**: Medium

### Summary

Updated Pan Constitution to version 1.1.1 with formatting improvements and created required constitutional infrastructure files.

### Changes Made

1. **Constitution Formatting** (commit f146d0f)
   - Changed smart quotes (`"` `"`) to straight quotes (`"`)
   - Changed em dashes (`—`) to regular dashes (`---`)
   - Fixed YAML formatting consistency throughout document

2. **Workflow Cleanup** (commit 0edf169)
   - Deleted `.github/workflows/update-pan.yml` - was too long and not working properly

3. **Infrastructure Creation** (new)
   - Created `.github/pull_request_template.md` with required constitutional fields
   - Created `profile.yaml` with tool configurations and thresholds
   - Created `.specify/memory/cdl.md` for Constitution Decision Log
   - Updated `docs/ops/change-log.md` with v1.1.1 changes

### Constitutional Standards Affected

- **A6** (Order of operations) - Process deviation documented in CDL
- **T1** (Linkage) - This issue provides required PR linkage
- **T2** (CDL) - Process deviation recorded in CDL-001
- **T4** (CHANGELOG lifecycle) - Changelog updated with changes
- **T6/T7** (Front matter) - All new files have proper front matter

### Process Notes

- Manual process was necessary due to missing infrastructure
- Process deviation documented in Constitution Decision Log
- Future updates will follow proper constitutional workflow now that infrastructure exists

### Acceptance Criteria

- [x] Constitution updated to v1.1.1 with formatting improvements
- [x] Non-functional workflow file removed
- [x] Required infrastructure files created
- [x] Process deviation documented in CDL
- [x] Changelog updated with changes
- [x] All new files have proper front matter

### Related

- Constitution Decision Log: CDL-001
- Changelog: docs/ops/change-log.md v1.1.1