import Joi from "joi";

const pocketSchema = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().empty(),
  balance: Joi.number().default(0),
  targetSaving: Joi.number().required(),
  targetDate: Joi.date().required(),
  type: Joi.string().required(),
  userId: Joi.string().required(),
});

export { pocketSchema };
