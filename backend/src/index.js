const express = require('express');
const db = require('./db');

const app = express();

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

app.get('/api/users', async (_, res) => {
  const [rows] = await db.query('SELECT * FROM users');
  res.json(rows);
});

app.listen(3000, () => console.log('Backend running'));
