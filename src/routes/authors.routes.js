const express = require('express');

const router = express.Router();

const {
     createAuthor,
     getAuthors,
     getAuthorsById,
     updateAuthor
     } = require('../controllers/authors.controller');

router.post('/', createAuthor);

router.get('/', getAuthors);

router.get('/:id', getAuthorsById); 

router.put('/:id', updateAuthor);

module.exports = router;