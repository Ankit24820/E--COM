// insertUser.js
const db = require('../db');

const insertUser = async (name, email, password) => {
  try {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, password];

    const result = await db.query(query, values);
    console.log('Inserted User:', result.rows[0]);
  } catch (err) {
    console.error('Insert error:', err.stack);
  } finally {
    db.end();
  }
};

// Example usage
insertUser('John Doe', 'john@example.com', '123456');
