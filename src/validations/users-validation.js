import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(7).max(255),
  email: Joi.string().min(7).max(255).email().required(),
  password: Joi.string().min(7).max(50).required(),
});

export { userSchema };
