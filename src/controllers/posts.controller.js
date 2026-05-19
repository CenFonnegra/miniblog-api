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

const getPosts = async (req, res) => {

    try {

        const result = await pool.query(
            'SELECT * FROM posts'
        );

        res.status(200).json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });

    }
};

const getPostsById = async (req, res) => {

    const { id } = req.params; // => ayuda a obtener parametros de la URL

    try {

        const result = await pool.query(
            'SELECT * FROM posts WHERE id = $1', // => Buscamos posts especificos
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Post not found'
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });

    }

};

const getPostsByAuthor = async (req, res) => {

    const {authorId} = req.params; 

    try {

        const result = await pool.query(
            'SELECT posts.id AS post_id, posts.title, posts.content, authors.name AS author_name, authors.email AS author_email FROM posts JOIN authors ON posts.author_id = authors.id WHERE authors.id = $1;', // => Buscamos posts especificos
            [authorId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Post not found'
            });
        }

        res.status(200).json(result.rows); // solo .rows ya que devuelve muchos posts

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });

    }

};

const updatePost = async (req, res) => {

    const { id } = req.params; //=> obtenemos el Id

    const { author_id, title, content, published } = req.body; //=> obtenemos nuevos datos

    if (!author_id || !title || !content) {
        return res.status(400).json({
            error: 'author_id,  title and content are required'
        });
    }

    try {

        const result = await pool.query(
            `UPDATE posts
            SET author_id = $1, title = $2, content = $3, published = $4
            WHERE id = $5
            RETURNING *`, // => Devuelve el autor actualizado
            [author_id, title, content, published, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Post not found'
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });
    }

};

const deletePost = async (req, res) => {

    const { id } = req.params;  

    try {

        const result = await pool.query(
            'DELETE FROM posts WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Post not found'
            });
        }

        res.status(200).json({
            message: 'Post deleted succesfully'
        });
 
    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });
    }

};

module.exports = {
    createPost,
    getPosts, 
    getPostsById,
    getPostsByAuthor, 
    updatePost, 
    deletePost
};