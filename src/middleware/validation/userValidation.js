const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string(),
  user_type: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validate = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = validate;
