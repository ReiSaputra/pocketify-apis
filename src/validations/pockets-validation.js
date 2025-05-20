import Joi from "joi";

const pocketSchema = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().empty(),
  balance: Joi.number().default(0),
  targetDate: Joi.date().required(),
  type: Joi.array().items(Joi.string().valid("RECREATION", "EMERGENCY_FUND", "EDUCATION", "INVESTMENT", "OTHER")).required(),
});

export { pocketSchema };
