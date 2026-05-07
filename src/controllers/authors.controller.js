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

module.exports = {
    createAuthor,
    getAuthors
};