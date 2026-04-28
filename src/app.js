const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('API MiniBlog iniciado');
});

module.exports = app;

const pool = require('./db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error conectando a DB', err);
  } else {
    console.log('DB conectada:', res.rows);
  }
});