const express = require('express');

const router = express.Router();

const {
     createAuthor,
     getAuthors,
     getAuthorsById,
     updateAuthor,
     deleteAuthor
     } = require('../controllers/authors.controller');

/**
 * @swagger
 * /authors:
 *   post:
 *      summary: Create a new author
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email: 
 *                  type: string
 *                bio:
 *                  type: string
 *      responses: 
 *        201:
 *           description: Author created succesfully
 *        400:
 *           description: Validation error  
 */

router.post('/', createAuthor);

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors
 *     responses:
 *       200:
 *         description: List of authors
 */

router.get('/', getAuthors);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get author by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Author ID
 *     responses:
 *       200:
 *         description: Author found
 *       404:
 *         description: Author not found
 */

router.get('/:id', getAuthorsById); 

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Update author by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Author ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Author updated successfully
 *       404:
 *         description: Author not found
 */

router.put('/:id', updateAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Delete author by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Author ID
 *     responses:
 *       200:
 *         description: Author deleted successfully
 *       404:
 *         description: Author not found
 */

router.delete('/:id', deleteAuthor);

module.exports = router;