const Pool = require('pg').Pool

const pool = new Pool({
    user: "aencuvqgkzfisr",
    host: "ec2-100-26-39-41.compute-1.amazonaws.com",
    database: "d1fds8ksh31gsr",
    password: "65780da03cd237f8ba3751b34f503e2db6758aa6a7770b227eddb3adec0638c6",
    port: 5432,
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