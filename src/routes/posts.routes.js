const express = require('express');

const router = express.Router();

const {
     createPost,
     getPosts,
     getPostsById, 
     getPostsByAuthor,
     updatePost,
     deletePost
     } = require('../controllers/posts.controller');

router.post('/', createPost);

router.get('/', getPosts);

router.get('/author/:authorId', getPostsByAuthor);

router.get('/:id', getPostsById);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);

module.exports = router;