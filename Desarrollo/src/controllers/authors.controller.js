const pool = require('../db');

const createAuthor = async (req, res) => {

    const { name, email, bio } = req.body;

    if (!name || !email) {
        return res.status(400).json({ // nos envia la respuesta y detiene la funcion
            error: 'Name and email are required'
        });
    }

    try {

        const result = await pool.query( //Nos ayuda a ejecutar el sql en postgre
            'INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *',
            [name, email, bio]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });

    }

};

const getAuthors = async (req, res) => {
    try {

        const result = await pool.query(
            'SELECT * FROM authors'
        );

        res.status(200).json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });

    }

};

const getAuthorsById = async (req, res) => {
    const { id } = req.params; // => ayuda a obtener parametros de la URL

    try {

        const result = await pool.query(
            'SELECT * FROM authors WHERE id = $1', // => Buscamos autor especifico
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Author not found'
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

const updateAuthor = async (req, res) => {
    
    const { id } = req.params; //=> obtenemos el Id

    const { name, email, bio } = req.body; //=> obtenemos nuevos datos

    if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required'
        });
    }

    try {

        const result = await pool.query(
            `UPDATE authors
            SET name = $1, email = $2, bio = $3
            WHERE id = $4
            RETURNING *`, // => Devuelve el autor actualizado
            [name, email, bio, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Author not found'
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

const deleteAuthor = async (req, res) => {

    const { id } = req.params;  

    try {

        const result = await pool.query(
            'DELETE FROM authors WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Author not found'
            });
        }

        res.status(200).json({
            message: 'Author deleted succesfully'
        });
 
    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Internal server error'
        });
    }

};

module.exports = {
    createAuthor,
    getAuthors,
    getAuthorsById,
    updateAuthor,
    deleteAuthor
};