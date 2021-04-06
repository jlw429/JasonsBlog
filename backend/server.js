const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'jason123',
  database: 'jasons_blog',
});

db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${db.threadId}`);
});

app.get('/blogs', (req, res) => {
  db.query('SELECT * FROM blog;', (err, data) => {
    if (err) {
      return res.status(500).end();
    }
    console.log(data);
    return res.send(data);
  });
});

app.get('/blogs/:id', (req, res) => {
  db.query('SELECT * FROM blog where id = ?', [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).end();
    }
    console.log(data);
    return res.send(data);
  });
});

app.post('/create', (req, res) => {
  const author = req.body.author;
  const blog_body = req.body.blog_body;
  const title = req.body.title;

  db.query(
    'INSERT INTO blog (author, title, blog_body) VALUES (?, ?, ?)',
    [author, title, blog_body],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.delete('/blogs/:id', (req, res) => {
  console.log('id = ' + req.params.id);
  db.query('DELETE FROM blog WHERE id = ?', [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).end();
    } else {
      return res.redirect('/blogs');
    }
  });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
