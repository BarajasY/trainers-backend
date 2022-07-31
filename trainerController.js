const pool = require("./database.js");

const getAllTrainers = (request, response) => {
    pool.query('SELECT * FROM trainers ORDER BY id ASC', (err, res) => {
        console.log(process.env.DATABASE_URL)
        if (err) console.log(err)
        response.status(200).json(res.rows);
    })
}

module.exports = getAllTrainers