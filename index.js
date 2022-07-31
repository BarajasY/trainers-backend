const express = require('express');
const router = require('./routes.js');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3200;

app.use(express.json());
app.use(cors());

app.use('/trainers', router)

app.get('/', (req, res) => {
    res.send('Hola')
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} succesfully!`)
})