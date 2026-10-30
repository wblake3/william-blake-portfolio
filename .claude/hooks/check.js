#!/usr/bin/env node
// Two hook events, one script:
//   PostToolUse (Edit|Write): note which files changed this session.
//   Stop: run `eslint --fix` once over the changed JS/TS files (a run takes ~12s on OneDrive, so
//         not after every edit). Errors left over go back to Claude (exit 2) once to fix.

const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => (raw += c));
process.stdin.on('end', () => {
  let input = {};
  try { input = JSON.parse(raw); } catch { process.exit(0); }
  const log = path.join(os.tmpdir(), `claude-edits-${input.session_id || 'x'}.txt`);

  if (input.hook_event_name === 'PostToolUse') {
    const f = input.tool_input && input.tool_input.file_path;
    if (f) fs.appendFileSync(log, f + '\n');
    return;
  }

  if (input.hook_event_name !== 'Stop' || !fs.existsSync(log)) return;
  const root = path.resolve(__dirname, '..', '..');
  const files = [...new Set(fs.readFileSync(log, 'utf8').split('\n').filter(Boolean))]
    .filter((f) => /\.(ts|tsx|js|jsx|mjs)$/.test(f) && fs.existsSync(f) && !path.relative(root, f).startsWith('..'));
  fs.unlinkSync(log);
  if (!files.length) return;

  const eslint = path.join(root, 'node_modules', 'eslint', 'bin', 'eslint.js');
  const r = spawnSync(process.execPath, [eslint, '--fix', ...files], { cwd: root, encoding: 'utf8' });
  if (r.status === 0) return;

  const out = ((r.stdout || '') + (r.stderr || '')).trim().slice(-3000);
  if (input.stop_hook_active) {
    process.stdout.write(JSON.stringify({ systemMessage: 'ESLint errors remain:\n' + out }));
    return;
  }
  process.stderr.write(`ESLint (after --fix) still reports problems:\n${out}\nFix these before finishing.`);
  process.exit(2);
});
