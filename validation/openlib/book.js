const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    isbn: Joi.string().required()
  });

  Joi.validate({
    isbn: req.body.isbn
  },
  schema, (validateErr) => {
    if (validateErr) {
      return next({
        status: 422,
        message: 'Invalid request.',
        error: validateErr.details,
      });
    }

    return next();
  });
};