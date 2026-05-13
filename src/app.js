const express = require('express');
const app = express();

const authorsRoutes = require('./routes/authors.routes');

const postsRoutes = require('./routes/posts.routes');

const pool = require('./db');

app.use(express.json());

app.use('/authors', authorsRoutes);

app.use('/posts', postsRoutes);

app.get('/', (req, res) =>{
    res.send('API MiniBlog iniciado');
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error conectando a DB', err);
  } else {
    console.log('DB conectada:', res.rows);
  }
});

module.exports = app;
