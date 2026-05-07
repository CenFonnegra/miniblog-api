const express = require('express');

const router = express.Router();

const { createAuthor } = require('../controllers/authors.controller');

router.post('/', createAuthor);

module.exports = router;