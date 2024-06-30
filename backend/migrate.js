const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
const db = new sqlite3.Database('mydatabase.db');

// Update the users table schema
db.serialize(() => {
  // Check if columns already exist and alter them
  db.run(`PRAGMA foreign_keys=off;`);

  db.run(`CREATE TABLE IF NOT EXISTS users_temp (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    high_score1 INTEGER DEFAULT NULL,
    high_score2 INTEGER DEFAULT NULL,
    high_score3 INTEGER DEFAULT NULL,
    high_score4 INTEGER DEFAULT NULL,
    time_spent INTEGER DEFAULT NULL
  );`);

  db.run(`INSERT INTO users_temp (id, username, password, high_score1, high_score2, high_score3, high_score4, time_spent)
          SELECT id, username, password, high_score1, high_score2, high_score3, high_score4, time_spent FROM users;`);

  db.run(`DROP TABLE users;`);
  db.run(`ALTER TABLE users_temp RENAME TO users;`);

  db.run(`PRAGMA foreign_keys=on;`);
});

// Close the database connection
db.close();
