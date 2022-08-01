const pool = require("./database.js");

const getAllTrainers = (request, response) => {
    console.log(request);
    pool.query('SELECT * FROM trainers ORDER BY id ASC', (err, res) => {
        console.log(process.env.DATABASE_URL)
        if (err) console.log(err)
        response.status(200).json(res.rows);
    })
}

/* const getTrainer = (request, response) => {
    pool.query('SELECT * FROM ')
}
 */
module.exports = getAllTrainers