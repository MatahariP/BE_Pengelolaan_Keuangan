const Joi = require("joi");
const schema = Joi.object({
  timestamp: Joi.string().required(),
  date: Joi.string().required(),
  category: Joi.string().required(),
  name: Joi.string().required(),
  nominal: Joi.number().required(),
  description: Joi.string().required(),
  media: Joi.string().required(),
  id_management_types: Joi.string().required(),
  id_expenses: Joi.string().required(),
});

const validate = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    console.log("tes");
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = validate;
