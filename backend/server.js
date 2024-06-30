const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
// const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3001;

// Set up the database
const db = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Database connected');
  }
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// User login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      res.status(500).send('Internal server error');
    } else if (row) {
      res.json(row);
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

// User signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  console.log('Signup request received for username:', username);
  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
    if (err) {
      res.status(500).send('Internal server error');
    } else {
      res.json({ id: this.lastID });
    }
    console.log('Confirm password:', req.body.confirmPassword);
  });
});

// Fetch user data endpoint
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
    if (err) {
      res.status(500).send('Internal server error');
    } else if (row) {
      res.json(row);
    } else {
      res.status(404).send('User not found');
    }
  });
});

// Update user high scores and time spent
app.post('/update', (req, res) => {
  const { id, high_score1, high_score2, high_score3, high_score4, time_spent } = req.body;
  db.run(
    'UPDATE users SET high_score1 = ?, high_score2 = ?, high_score3 = ?, high_score4 = ?, time_spent = ? WHERE id = ?',
    [high_score1, high_score2, high_score3, high_score4, time_spent, id],
    function(err) {
      if (err) {
        res.status(500).send('Internal server error');
      } else {
        res.send('User data updated');
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
