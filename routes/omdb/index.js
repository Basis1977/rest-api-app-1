const imdb = require('express').Router();

const movie = require('./movie');

const Authentication = require('../../validation/auth/auth');
const MovieValidation = require('../../validation/omdb/movie');

imdb.post('/movie', Authentication, MovieValidation, movie);

module.exports = imdb;