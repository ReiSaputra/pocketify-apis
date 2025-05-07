import Joi from "joi";

const badgeSchema = Joi.object({
  name: Joi.string().min(15).max(255).required(),
  description: Joi.string().min(15).max(255).required(),
  icon: Joi.string().min(15).max(255),
});

export { badgeSchema };
