const Pool = require('pg').Pool

const pool = new Pool({
    user: "me",
    host: "localhost",
    database: "api",
    password: "password",
    port: 1402,
})

const getTrainers = (request, response) => {
    pool.query('SELECT * FROM trainers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getTrainerById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM trainers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = { getTrainers, getTrainerById }