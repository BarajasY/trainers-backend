const Client = require('pg');
require('dotenv').config();

if (process.env.DATABASE_URL) {
    Client.defaults.ssl = true
}


const connString = process.env.DATABASE_URL;

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: connString,
    ssl: false
});

pool.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
})

module.exports = pool 