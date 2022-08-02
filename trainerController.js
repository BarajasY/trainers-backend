const pool = require("./database.js");

const getAllTrainers = (request, response) => {
    pool.query('SELECT * FROM trainers ORDER BY id ASC', (err, res) => {
        if (err) console.log(err)
        response.status(200).json(res.rows);
    })
}

const getPokemons = (request, response) => {
    const name = request.params.name;
    pool.query(`SELECT * FROM pokemon WHERE trainer = '${name}' `, (err, res) => {
        if (err) console.log(err)
        response.status(200).json(res.rows);
    })
}

exports.getAllTrainers = getAllTrainers;
exports.getPokemons = getPokemons;