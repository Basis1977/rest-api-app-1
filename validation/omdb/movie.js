const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    year: Joi.string().allow(''),
    plotVersion: Joi.string().allow(''),
  });

  Joi.validate({
    title: req.body.title,
    year: req.body.year,
    plotVersion: req.body.plotVersion,
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