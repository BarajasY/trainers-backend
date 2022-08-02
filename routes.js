const express = require('express');
const { getAllTrainers, getPokemons } = require('./trainerController.js');
const route = express.Router();

route.get('/', getAllTrainers);
route.get('/:name', getPokemons);


module.exports = route