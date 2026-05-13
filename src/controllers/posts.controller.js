const pool = require('../db');

const createPost = async (req, res) => {

    const {author_id, title, content, published } = req.body;

    if (!author_id || !title || !content) {
        return res.status(400).json({ // nos envia la respuesta y detiene la funcion
            error: 'author_id, title and content are required'
        });
    }

    try {

        const result = await pool.query( //Nos ayuda a ejecutar el sql en postgre
            'INSERT INTO posts (author_id, title, content, published) VALUES ($1, $2, $3, $4) RETURNING *',
            [author_id, title, content, published]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });

    }

};

module.exports = {
    createPost
};