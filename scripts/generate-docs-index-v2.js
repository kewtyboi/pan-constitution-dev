#!/usr/bin/env node
/**
 * Enhanced documentation index generator with initiative and topic groupings.
 */
const fs = require('fs');
const path = require('path');
const { FIELD_ORDER, parseFrontMatter, buildFrontMatter, toTitleFromPath } = require('./utils/frontmatter');

function run() {
  const args = process.argv.slice(2);
  const outputIndex = parseArgs(args);
  const repoRoot = path.resolve(__dirname, '..');
  const indexPath = path.join(repoRoot, outputIndex);
  const today = new Date().toISOString().split('T')[0];

  const { documents, missingFrontMatter } = loadDocuments(repoRoot, indexPath);

  if (missingFrontMatter.length) {
    console.warn('⚠️  The following documents are missing YAML front matter and were excluded:');
    for (const file of missingFrontMatter) {
      console.warn(`   - ${file}`);
    }
    console.warn('   Run `node scripts/add-yaml-frontmatter-v2.js` to normalise them.');
  }

  const initiativeSummary = buildInitiativeSummary(documents);
  const topicSummary = buildTopicSummary(documents);
  const alphabeticalSection = buildAlphabeticalSection(documents);
  const statsSection = buildStatsSection(documents);

  const indexFrontMatter = {
    topic: 'documentation-index',
    name: '{{PROJECT_NAME}} Documentation Index (Auto-Generated)',
    author: 'Documentation Tooling',
    version: '2.0',
    date: today,
    description: 'Auto-generated documentation index grouped by initiatives and topics with summary statistics.',
    initiative: '{{INITIAL_INITIATIVE}}',
    related_issues: [],
    status: 'active',
    tags: ['documentation', 'index', 'automation'],
  };

  const frontMatter = buildFrontMatter(indexFrontMatter, { fieldOrder: FIELD_ORDER }).trimEnd();
  const sections = [];
  sections.push('# Documentation Index');
  sections.push('');
  sections.push(`*Generated on ${today}*`);
  sections.push('');
  sections.push('## Summary');
  sections.push('');
  sections.push(`- **Total Documents**: ${documents.length}`);
  sections.push(`- **Active Initiatives**: ${initiativeSummary.activeInitiatives}`);
  sections.push(`- **Topics**: ${topicSummary.topicCount}`);
  sections.push(`- **Authors**: ${statsSection.authorCount}`);
  sections.push('');
  sections.push('## Navigation');
  sections.push('');
  sections.push('- [By Initiative](#documents-by-initiative)');
  sections.push('- [By Topic](#documents-by-topic)');
  sections.push('- [All Documents](#all-documents-alphabetical)');
  sections.push('- [Statistics](#statistics)');
  sections.push('');
  sections.push(initiativeSummary.markdown);
  sections.push(topicSummary.markdown);
  sections.push(alphabeticalSection);
  sections.push(statsSection.markdown);
  sections.push('');
  sections.push('---');
  sections.push('');
  sections.push(
    '*This index is generated from YAML front matter. Update it with `node scripts/generate-docs-index-v2.js`.*'
  );

  const content = `${frontMatter}\n\n${sections.join('\n')}\n`;
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log(`✅ Documentation index generated -> ${outputIndex}`);
}

function parseArgs(argv) {
  if (!argv.length) {
    return 'INDEX.md';
  }
  if (argv[0] === '--output') {
    return argv[1] || 'INDEX.md';
  }
  return 'INDEX.md';
}

function loadDocuments(rootDir, ignorePath) {
  const missingFrontMatter = [];
  const results = [];
  const files = collectMarkdownFiles(rootDir);
  for (const filePath of files) {
    if (path.resolve(filePath) === path.resolve(ignorePath)) {
      continue;
    }
    const relPath = path.relative(rootDir, filePath).split(path.sep).join('/');
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, hasFrontMatter } = parseFrontMatter(raw);

    if (!hasFrontMatter) {
      missingFrontMatter.push(relPath);
      continue;
    }

    results.push({
      path: relPath,
      meta: enrichMetadata(data, filePath),
    });
  }

  return { documents: results, missingFrontMatter };
}

function collectMarkdownFiles(rootDir) {
  const entries = [];
  walk(rootDir, entries);
  return entries;
}

function walk(currentDir, results) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.git')) {
      continue;
    }
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      if (shouldSkipDirectory(entry.name)) {
        continue;
      }
      walk(fullPath, results);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      results.push(fullPath);
    }
  }
}

function shouldSkipDirectory(name) {
  return ['node_modules', '.git', '.github', '.idea', 'dist', 'build'].includes(name);
}

function enrichMetadata(meta, filePath) {
  const fallbackName = toTitleFromPath(filePath);
  return {
    name: meta.name || fallbackName,
    topic: meta.topic || 'unspecified',
    initiative: meta.initiative || null,
    status: meta.status || 'active',
    tags: Array.isArray(meta.tags) ? meta.tags : [meta.tags].filter(Boolean),
    date: meta.date || '',
    description: meta.description || '',
    author: meta.author || '{{PROJECT_TEAM}}',
    version: meta.version || '',
  };
}

function buildInitiativeSummary(documents) {
  const grouped = {};
  const initiativeTotals = {};

  for (const doc of documents) {
    const key = doc.meta.initiative && doc.meta.initiative !== 'unspecified' ? doc.meta.initiative : '__core__';
    if (!grouped[key]) {
      grouped[key] = {};
    }
    const topicKey = doc.meta.topic || 'unspecified';
    if (!grouped[key][topicKey]) {
      grouped[key][topicKey] = [];
    }
    grouped[key][topicKey].push(doc);
  }

  const sections = [];
  sections.push('## Documents by Initiative');
  sections.push('');
  sections.push('*Grouped by cross-cutting change events, transformations, or project phases*');
  sections.push('');

  const initiatives = Object.keys(grouped).sort();
  for (const initiative of initiatives) {
    const humanName =
      initiative === '__core__'
        ? 'Core Project'
        : initiative
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');

    const topics = Object.keys(grouped[initiative]).sort();
    const docs = topics.flatMap(topic => grouped[initiative][topic]);
    initiativeTotals[initiative] = docs.length;

    sections.push(`### ${humanName}`);
    sections.push('');
    sections.push('| Document | Initiative | Topic | Status | Version | Last Updated | Author | Tags |');
    sections.push('| --- | --- | --- | --- | --- | --- | --- | --- |');

    for (const topic of topics) {
      const entries = grouped[initiative][topic];
      for (const item of entries) {
        const tags = (item.meta.tags || []).join(', ');
        const status = item.meta.status || 'active';
        const version = item.meta.version || '';
        const updated = item.meta.date || '';
        const initiativeName =
          item.meta.initiative && item.meta.initiative !== 'unspecified'
            ? item.meta.initiative
            : initiative === '__core__'
              ? 'core-project'
              : initiative;
        const link = `[${item.meta.name}](${item.path})`;
        const author = item.meta.author || '';
        sections.push(
          `| ${link} | ${initiativeName} | ${topic} | ${status} | ${version} | ${updated} | ${author} | ${tags} |`
        );
      }
    }

    sections.push('');
  }

  return {
    markdown: sections.join('\n'),
    activeInitiatives: initiatives.filter(key => key !== '__core__').length,
  };
}

function buildTopicSummary(documents) {
  const grouped = {};
  for (const doc of documents) {
    const topic = doc.meta.topic || 'unspecified';
    if (!grouped[topic]) {
      grouped[topic] = [];
    }
    grouped[topic].push(doc);
  }

  const sections = [];
  sections.push('## Documents by Topic');
  sections.push('');
  sections.push('*Grouped by subject area*');
  sections.push('');

  const topics = Object.keys(grouped).sort();
  for (const topic of topics) {
    sections.push(`### ${titleCase(topic)}`);
    sections.push('');
    sections.push('| Document | Initiative | Status | Version | Last Updated | Author | Description |');
    sections.push('| --- | --- | --- | --- | --- | --- | --- |');

    for (const doc of grouped[topic]) {
      const link = `[${doc.meta.name}](${doc.path})`;
      const initiative =
        doc.meta.initiative && doc.meta.initiative !== 'unspecified' ? doc.meta.initiative : 'core-project';
      const status = doc.meta.status || 'active';
      const updated = doc.meta.date || '';
      const description = (doc.meta.description || '').replace(/\|/g, '\\|');
      const version = doc.meta.version || '';
      const author = doc.meta.author || '';
      sections.push(`| ${link} | ${initiative} | ${status} | ${version} | ${updated} | ${author} | ${description} |`);
    }
    sections.push('');
  }

  return {
    markdown: sections.join('\n'),
    topicCount: topics.length,
  };
}

function buildAlphabeticalSection(documents) {
  const sorted = [...documents].sort((a, b) => a.meta.name.localeCompare(b.meta.name));
  const lines = [];
  lines.push('## All Documents (Alphabetical)');
  lines.push('');
  lines.push('| Document | Topic | Initiative | Status | Version | Last Updated | Author |');
  lines.push('| --- | --- | --- | --- | --- | --- | --- |');
  for (const doc of sorted) {
    const link = `[${doc.meta.name}](${doc.path})`;
    const topic = doc.meta.topic || 'unspecified';
    const initiative =
      doc.meta.initiative && doc.meta.initiative !== 'unspecified' ? doc.meta.initiative : 'core-project';
    const status = doc.meta.status || 'active';
    const updated = doc.meta.date || '';
    const version = doc.meta.version || '';
    const author = doc.meta.author || '';
    lines.push(`| ${link} | ${topic} | ${initiative} | ${status} | ${version} | ${updated} | ${author} |`);
  }
  lines.push('');
  return lines.join('\n');
}

function buildStatsSection(documents) {
  const initiativeCounts = {};
  const topicCounts = {};
  const statusCounts = {};
  const authorCounts = {};

  for (const doc of documents) {
    const initiative =
      doc.meta.initiative && doc.meta.initiative !== 'unspecified' ? doc.meta.initiative : 'core-project';
    initiativeCounts[initiative] = (initiativeCounts[initiative] || 0) + 1;

    const topic = doc.meta.topic || 'unspecified';
    topicCounts[topic] = (topicCounts[topic] || 0) + 1;

    const status = doc.meta.status || 'active';
    statusCounts[status] = (statusCounts[status] || 0) + 1;

    const author = doc.meta.author || 'NeuroNarnia Team';
    authorCounts[author] = (authorCounts[author] || 0) + 1;
  }

  const lines = [];
  lines.push('## Statistics');
  lines.push('');
  lines.push('### Documents by Initiative');
  for (const [name, count] of Object.entries(initiativeCounts).sort((a, b) => b[1] - a[1])) {
    lines.push(`- **${name}**: ${count}`);
  }
  lines.push('');
  lines.push('### Documents by Topic');
  for (const [name, count] of Object.entries(topicCounts).sort((a, b) => b[1] - a[1])) {
    lines.push(`- **${name}**: ${count}`);
  }
  lines.push('');
  lines.push('### Documents by Status');
  for (const [name, count] of Object.entries(statusCounts).sort((a, b) => b[1] - a[1])) {
    lines.push(`- **${name}**: ${count}`);
  }
  lines.push('');
  lines.push('### Documents by Author');
  for (const [name, count] of Object.entries(authorCounts).sort((a, b) => b[1] - a[1])) {
    lines.push(`- **${name}**: ${count}`);
  }
  lines.push('');

  return {
    markdown: lines.join('\n'),
    authorCount: Object.keys(authorCounts).length,
  };
}

function titleCase(value) {
  return value
    .split(/[-_]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

if (require.main === module) {
  run();
}

module.exports = {
  run,
  loadDocuments,
  collectMarkdownFiles,
  buildInitiativeSummary,
  buildTopicSummary,
  buildAlphabeticalSection,
  buildStatsSection,
};
