const express = require('express');
const cors = require('cors');
const db = require('./database.js')
const router = require('./routes.js');

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());

app.use('/trainers', router)

app.get('/', (req, res) => {
    res.send('Hola')
})

app.listen(PORT, () => {
    console.log("Server running succesfully!")
})