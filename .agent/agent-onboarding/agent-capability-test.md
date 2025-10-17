---
topic: agent-capability-test
name: Agent Capability Test Suite
author: {{PROJECT_TEAM}}
version: 1.0.0
date: {{CREATION_DATE}}
description: Quick test suite for agents to assess their available tools and capabilities
initiative: {{INITIAL_INITIATIVE}}
related_issues: []
status: active
tags:
  - capabilities
  - testing
  - assessment
  - agent-development
---

# Agent Capability Test Suite

## 🎯 Purpose

This test suite helps agents quickly assess what tools and capabilities they have available. Run through these tests and report back your results!

## 🧪 Test Instructions

**For each test:**
1. **Try the action** - Attempt to perform the described task
2. **Record the result** - Note whether it worked or failed
3. **Report back** - Share your results with the team

## 📋 Test Suite

### **Test 1: File System Access**

#### **Test 1a: Read Current Repository File**
- **Action**: Try to read a file in your current repository
- **Example**: Read `README.md` or any existing file
- **Expected**: Should be able to read file contents
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 1b: Write New File**
- **Action**: Try to create a new file
- **Example**: Create a test file with some content
- **Expected**: Should be able to create and write to files
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 1c: Edit Existing File**
- **Action**: Try to modify an existing file
- **Example**: Add a comment or update content
- **Expected**: Should be able to edit file contents
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 1d: Cross-Repository Access**
- **Action**: Try to read a file from another repository
- **Example**: Read a file from {{PROJECT_NAME}} repository
- **Expected**: Should be able to access files across repositories
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

### **Test 2: Search & Analysis**

#### **Test 2a: Semantic Search**
- **Action**: Try to search for concepts or patterns
- **Example**: Search for "documentation" or "formatting"
- **Expected**: Should find relevant content based on meaning
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 2b: Pattern Matching**
- **Action**: Try to search for specific text patterns
- **Example**: Search for files containing "README" or "package.json"
- **Expected**: Should find files matching the pattern
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 2c: Web Search**
- **Action**: Try to search the web for information
- **Example**: Search for "N8N workflows" or "documentation best practices"
- **Expected**: Should return real-time web results
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

### **Test 3: Development Tools**

#### **Test 3a: Terminal Commands**
- **Action**: Try to execute a shell command
- **Example**: Run `ls` or `dir` to list files
- **Expected**: Should execute commands and return results
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 3b: Package Management**
- **Action**: Try to run npm or package commands
- **Example**: Run `npm --version` or `npm list`
- **Expected**: Should execute package management commands
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 3c: Git Operations**
- **Action**: Try to run git commands
- **Example**: Run `git status` or `git log --one-line`
- **Expected**: Should execute git commands
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

### **Test 4: AI & Collaboration**

#### **Test 4a: Memory Management**
- **Action**: Try to store and retrieve information
- **Example**: Save a note and then retrieve it
- **Expected**: Should be able to persist and recall information
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 4b: Task Management**
- **Action**: Try to create and track tasks
- **Example**: Create a todo list or task tracker
- **Expected**: Should be able to manage tasks and progress
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 4c: Communication**
- **Action**: Try to update shared documents
- **Example**: Update this communication file or create a new message
- **Expected**: Should be able to collaborate through shared files
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

### **Test 5: Specialized Tools**

#### **Test 5a: N8N Workflow Access** (Jessica)
- **Action**: Try to read or write N8N workflow files
- **Example**: Access N8N workflow configuration or create a simple workflow
- **Expected**: Should be able to work with N8N workflows
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 5b: Diagram Creation**
- **Action**: Try to create a visual diagram
- **Example**: Create a flowchart or system diagram
- **Expected**: Should be able to generate visual representations
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

#### **Test 5c: Configuration Management**
- **Action**: Try to read or modify configuration files
- **Example**: Access `.json`, `.yml`, or `.config` files
- **Expected**: Should be able to work with configuration files
- **Result**: ✅ Success / ❌ Failed / ❓ Not Sure

## 📊 Results Template

**Copy this template and fill in your results:**

```
## Agent Capability Test Results

**Agent Name**: [Your Name]
**Test Date**: [Date]
**Repository**: [Current Repository]

### File System Access
- Read Current Repository File: [✅/❌/❓]
- Write New File: [✅/❌/❓]
- Edit Existing File: [✅/❌/❓]
- Cross-Repository Access: [✅/❌/❓]

### Search & Analysis
- Semantic Search: [✅/❌/❓]
- Pattern Matching: [✅/❌/❓]
- Web Search: [✅/❌/❓]

### Development Tools
- Terminal Commands: [✅/❌/❓]
- Package Management: [✅/❌/❓]
- Git Operations: [✅/❌/❓]

### AI & Collaboration
- Memory Management: [✅/❌/❓]
- Task Management: [✅/❌/❓]
- Communication: [✅/❌/❓]

### Specialized Tools
- N8N Workflow Access: [✅/❌/❓] (Jessica only)
- Diagram Creation: [✅/❌/❓]
- Configuration Management: [✅/❌/❓]

### Additional Notes
[Any additional observations or capabilities you discovered]

### What I Need
[List any capabilities you need but don't have]
```

## 🚀 Next Steps

1. **Run the Tests**: Go through each test and record your results
2. **Report Back**: Share your results in the communication file
3. **Identify Gaps**: Let us know what capabilities you need
4. **Get Support**: We'll work to enable missing capabilities
5. **Collaborate**: Use your full capabilities to build amazing things!

---

*"Every agent deserves to know what they can do and what they need to succeed!"* 🏄‍♂️✨
