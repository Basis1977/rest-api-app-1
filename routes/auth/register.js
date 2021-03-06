const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

module.exports = (req, res, next) => {
  const UserModel = mongoose.model('User');

  const passwordHash = bcrypt.hashSync(req.body.password);

  const User = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: passwordHash,
  });

  UserModel.countDocuments({ email: req.body.email }, (err, count) => {
    if (count !== 0) {
      return res.render('signup', {
        status: 401,
        message: 'Email is already taken by another user',
      });
    }

    return User.save((saveErr) => {
      if (saveErr) {
        return res.render('signup', {
          status: 500,
          message: 'Database error',
          error: [saveErr],
        });
      }

      return res.render('signup', { success: true, message: 'Registered Successfully' });
    });
  });
};
