import Express from 'express';
const api = Express.Router();
import {
  swPostFibonacciValue,
  fibonacciValue
} from '../controllers/fibonacci.controller';
import { validateSchema } from '../middlewares/validate-input-schema';
import { fibonacciResquesSchema } from '../schemas/index';

export const swReportRouter = {
  '/fibonacci/value': {
    get: {
      ...swPostFibonacciValue
    }
  }
};

api.post('/value', validateSchema(fibonacciResquesSchema, 'body'), fibonacciValue);


export default api;
