const Joi = require('joi');

module.exports = {
  headers: Joi.object({
    accept: Joi.string()
      .regex(/^\bapplication\/vnd\.tf961\b/)
      .required(),
  }),
};
