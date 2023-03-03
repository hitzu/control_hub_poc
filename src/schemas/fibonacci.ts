import { Joi } from '../services/validation';

export const fibonacciResquesSchema = Joi.object().keys({
  index: Joi.number().required()
});

export const fibonacciResponseSchema = Joi.object().keys({
  value: Joi.number().required()
});
