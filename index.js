const express = require('express');
const cors = require('cors');
const db = require('./queries.js')

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());

app.get('/', db.getTrainers)

app.get('/trainers/:id', db.getTrainerById)

app.listen(PORT, () => {
    console.log("Server running succesfully!")
})