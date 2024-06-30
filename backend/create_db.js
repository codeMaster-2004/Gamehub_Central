const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database (creates the file if it doesn't exist)
const db = new sqlite3.Database('mydatabase.db');

// Create the users table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      high_score1 INTEGER DEFAULT NULL,
      high_score2 INTEGER DEFAULT NULL,
      high_score3 INTEGER DEFAULT NULL,
      high_score4 INTEGER DEFAULT NULL,
      time_spent INTEGER DEFAULT NULL
    )
    `, (err) => {
        if (err) {
        console.error('Error creating users table:', err);
        } else {
        console.log('Users table created or already exists');
        }
    });
});

// Close the database connection
db.close();
