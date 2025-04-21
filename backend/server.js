// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// === Insert User ===
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields (name, email, password) are required' });
  }

  try {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await db.query(query, [name, email, password]);
    res.status(201).json({ message: 'User inserted', user: result.rows[0] });
  } catch (err) {
    console.error('Insert error:', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// === Login User ===
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const query = `
      SELECT * FROM users
      WHERE email = $1 AND password = $2;
    `;
    const result = await db.query(query, [email, password]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login error:', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
