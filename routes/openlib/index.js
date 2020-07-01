const openlib = require('express').Router();

const book = require('./book');

const Authentication = require('../../validation/auth/auth');
const BookValidation = require('../../validation/openlib/book');

openlib.post('/book', Authentication, BookValidation, book);

module.exports = openlib;