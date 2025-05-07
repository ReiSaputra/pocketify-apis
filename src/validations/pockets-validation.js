import Joi from "joi";

const pocketSchema = Joi.object({
  name: Joi.string().min(15).max(255).required(),
  balance: Joi.number().default(0),
});
