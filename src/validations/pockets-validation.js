import Joi from "joi";
import express from "express";

const pocketSchema = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().empty(),
  balance: Joi.number().default(0),
  targetDate: Joi.date().required(),
});

export { pocketSchema };
