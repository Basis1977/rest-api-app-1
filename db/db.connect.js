const mongoose = require('mongoose');

const UserSchema = require.main.require('../models/user');

const db = require('./db.config');

mongoose.connect(`mongodb://${db.host}/${db.name}`, db.opts);

mongoose.connection.on('connected', () => {
  mongoose.model('User', UserSchema);
});
