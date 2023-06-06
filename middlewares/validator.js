// const Joi = require("joi");

// const validator = (schema) => (payload) =>
//   schema.validate(payload, { abortEarly: false });
// //validate function will take a schema and return a function. The function is going to take payload(name,email,pass etc) which we want to validate

// const signupSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().min(7).max(15).required(),
// });

// exports.validateSignup = validator(signupSchema);

const Joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(15).required(),
});

exports.validateSignup = validator(signupSchema);
