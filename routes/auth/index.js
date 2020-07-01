const auth = require('express').Router();

const register = require('./register');
const login = require('./login');
const reset = require('./reset');

const RegisterValidation = require('../../validation/auth/register');
const LoginValidation = require('../../validation/auth/login');

auth.post('/register', RegisterValidation, register);
auth.post('/login', LoginValidation, login);
auth.post('/rester-password', reset);

module.exports = auth;
