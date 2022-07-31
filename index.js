const express = require('express');
const router = require('./routes.js');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3200;

app.use(express.json());

app.use('/trainers', router)

app.get('/', (req, res) => {
    res.send('Hola')
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} succesfully!`)
})