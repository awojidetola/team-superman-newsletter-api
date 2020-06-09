/* eslint-disable newline-per-chained-call */
import Joi from '@hapi/joi';

export default {
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true }
    })
    .trim()
    .required(),
  username: Joi.string().min(3).max(20).required(),
  name: Joi.string().min(3).required(),
  // Some should use regex to make the password include special character and uppercase letters
  password: Joi.string().min(8).required()
};
