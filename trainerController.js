const client = require("./database.js");

const getAllTrainers = (request, res) => {
    client.query('SELECT * FROM trainers ORDER BY id ASC', (err, res) => {
        if (err) console.log(err)
        res.stats(200).json(res.rows);
    })
}

module.exports = getAllTrainers