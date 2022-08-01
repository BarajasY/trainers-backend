const express = require('express');
const getAllTrainers = require('./trainerController.js');
const route = express.Router();

route.get('/', getAllTrainers);
/* route, get('/:name' getTrainer); */


module.exports = route