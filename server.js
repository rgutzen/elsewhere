/**
 * Elsewhere — Backend API
 * Node.js + Express
 * GET /api/health
 * GET /api/prompt/:mode          → random prompt for mode
 * GET /api/prompts/:mode         → all prompts for mode
 * GET /api/prompts               → all prompts (all modes)
 */

const express  = require('express');
const cors     = require('cors');
const prompts  = require('./prompts');

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ─────────────────────────────────────
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static('.'));   // serve HTML/CSS/JS files

// ── Routes ────────────────────────────────────────

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

// Single random prompt
app.get('/api/prompt/:mode', (req, res) => {
  const { mode } = req.params;
  if (!prompts[mode]) {
    return res.status(400).json({ error: `Unknown mode: ${mode}. Use stranger | friend | self` });
  }
  const pool   = prompts[mode];
  const prompt = pool[Math.floor(Math.random() * pool.length)];
  res.json(prompt);
});

// All prompts for one mode
app.get('/api/prompts/:mode', (req, res) => {
  const { mode } = req.params;
  if (!prompts[mode]) {
    return res.status(400).json({ error: `Unknown mode: ${mode}` });
  }
  res.json(prompts[mode]);
});

// All prompts across all modes
app.get('/api/prompts', (_req, res) => {
  res.json(prompts);
});

// Modes list
app.get('/api/modes', (_req, res) => {
  res.json({
    modes: Object.keys(prompts).map(key => ({
      key,
      label: { stranger:'Stranger', friend:'Friend', self:'Self' }[key],
      count: prompts[key].length,
    }))
  });
});

// Catch-all → 404 json
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

// ── Start ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  Elsewhere server running`);
  console.log(`  → http://localhost:${PORT}/landing.html`);
  console.log(`  → http://localhost:${PORT}/app.html`);
  console.log(`  → http://localhost:${PORT}/api/prompt/stranger\n`);
});
