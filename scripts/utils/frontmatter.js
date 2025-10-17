const path = require('path');

const FIELD_ORDER = [
  'topic',
  'name',
  'author',
  'version',
  'date',
  'description',
  'initiative',
  'related_issues',
  'status',
  'tags',
];

const FRONT_MATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function parseFrontMatter(content) {
  const match = content.match(FRONT_MATTER_PATTERN);
  if (!match) {
    return { data: {}, body: content, hasFrontMatter: false };
  }

  const raw = match[1];
  const body = content.slice(match[0].length);
  const data = parseMetadata(raw);

  return { data, body, hasFrontMatter: true };
}

function parseMetadata(raw) {
  const lines = raw.replace(/\r/g, '').split('\n');
  const data = {};
  let currentKey = null;
  let mode = null; // 'array' | 'multiline'

  for (const line of lines) {
    if (!line.trim()) {
      if (mode === 'multiline' && currentKey && typeof data[currentKey] === 'string') {
        data[currentKey] += '\n';
      }
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (keyMatch) {
      const key = keyMatch[1];
      const valuePortion = keyMatch[2];
      currentKey = key;

      if (valuePortion === '') {
        // Value to be determined by following indented lines.
        data[key] = undefined;
        mode = null;
      } else {
        data[key] = parseScalar(valuePortion);
        mode = Array.isArray(data[key]) ? 'array' : null;
      }
      continue;
    }

    if (line.startsWith('  - ')) {
      if (!currentKey) {
        continue;
      }
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      data[currentKey].push(parseScalar(line.slice(4)));
      mode = 'array';
      continue;
    }

    if (line.startsWith('  ')) {
      if (!currentKey) {
        continue;
      }

      if (mode === 'array') {
        const arr = data[currentKey];
        if (arr.length === 0) {
          arr.push(line.slice(2));
        } else {
          arr[arr.length - 1] += '\n' + line.slice(2);
        }
        continue;
      }

      const fragment = line.slice(2);
      const existing = typeof data[currentKey] === 'string' ? data[currentKey] : '';
      data[currentKey] = existing ? `${existing}\n${fragment}` : fragment;
      mode = 'multiline';
      continue;
    }
  }

  return data;
}

function parseScalar(value) {
  let trimmed = value.trim();

  if (trimmed === '[]') {
    return [];
  }
  if (trimmed === '{}') {
    return {};
  }

  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    trimmed = trimmed.slice(1, -1);
  }

  return trimmed;
}

function stringifyMetadata(metadata, options = {}) {
  const { fieldOrder = FIELD_ORDER } = options;
  const lines = [];

  for (const key of fieldOrder) {
    if (!(key in metadata)) {
      continue;
    }
    const value = metadata[key];
    lines.push(formatField(key, value));
  }

  for (const key of Object.keys(metadata)) {
    if (fieldOrder.includes(key)) {
      continue;
    }
    lines.push(formatField(key, metadata[key]));
  }

  return lines.filter(Boolean).join('\n');
}

function formatField(key, value) {
  if (value === undefined || value === null) {
    return `${key}:`;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return `${key}: []`;
    }
    const entries = value.map(item => `  - ${formatScalarValue(item)}`);
    return `${key}:\n${entries.join('\n')}`;
  }

  if (typeof value === 'string') {
    if (value.includes('\n')) {
      const indented = value
        .split('\n')
        .map(line => (line.length ? `  ${line}` : ''))
        .join('\n');
      return `${key}:\n${indented}`;
    }
    return `${key}: ${formatScalarValue(value)}`;
  }

  return `${key}: ${String(value)}`;
}

function formatScalarValue(raw) {
  const value = String(raw);

  if (value === '') {
    return "''";
  }

  if (value.includes('\n')) {
    return value;
  }

  const needsQuotes =
    /^[\s]|[\s]$/.test(value) ||
    value.includes(':') ||
    value.includes('#') ||
    value.includes('*') ||
    value.includes('!') ||
    value.includes('?') ||
    value.includes('{') ||
    value.includes('}') ||
    value.includes('[') ||
    value.includes(']') ||
    value.includes(',') ||
    value.includes('&') ||
    value.includes('%') ||
    value.includes('@') ||
    value.includes('>') ||
    value.includes('<') ||
    value.includes('|') ||
    value.includes('"') ||
    value.includes("'");

  if (!needsQuotes) {
    return value;
  }

  const escaped = value.replace(/'/g, "''");
  return `'${escaped}'`;
}

function ensureMetadata(metadata, defaults) {
  const result = { ...metadata };
  for (const [key, value] of Object.entries(defaults)) {
    if (result[key] === undefined) {
      result[key] = typeof value === 'function' ? value(metadata) : value;
    }
  }
  return result;
}

function buildFrontMatter(metadata, options = {}) {
  const yaml = stringifyMetadata(metadata, options);
  return `---\n${yaml}\n---\n`;
}

function toTitleFromPath(filePath) {
  const base = path.basename(filePath, path.extname(filePath));
  return base
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(token => (token ? token[0].toUpperCase() + token.slice(1) : ''))
    .join(' ')
    .trim();
}

module.exports = {
  FIELD_ORDER,
  FRONT_MATTER_PATTERN,
  parseFrontMatter,
  stringifyMetadata,
  ensureMetadata,
  buildFrontMatter,
  toTitleFromPath,
};
