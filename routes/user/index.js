const user = require('express').Router();

const profile = require('./profile');
const update = require('./update');
const remove = require('./delete');

const Authentication = require('../../validation/auth/auth');
const UpdateValidation = require('../../validation/user/update');
const DeleteValidation = require('../../validation/user/delete');

user.get('/me', Authentication, profile);
user.put('/me', Authentication, UpdateValidation, update);
user.delete('/me', Authentication, DeleteValidation, remove);

module.exports = user;
