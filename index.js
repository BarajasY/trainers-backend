import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3200;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hola");
})

app.listen(PORT, () => {
    console.log("Server running succesfully!")
})