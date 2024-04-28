const Joi = require("joi");
const schema = Joi.object({
  id_category: Joi.string().required(),
  name: Joi.string().required(),
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
