import { Response } from 'express';
import { RequestCustom } from '../interfaces/start-options.interface';
import { fibonacciResponseSchema } from '../schemas/fibonacci'

const fib = function(n) {
  const sol = [0, 1];

  for (let i = 2; i<= n; i++) {
      sol[i] = sol[i -1] + sol[i - 2];
  }

  return sol[n];
};

const swPostFibonacciValue = {
  summary: 'get fibonacci value by index',
  tags: ['fibonacci'],
  responses: {
    '200': {
      description: `correct value`,
      content: {
        'application/json': {
          schema: {
            parameters: {
              value: {
                type: "string",
                description: "value response"
              }
            }
          }
        }
      }
      
    }
  },
  parameters: [
    {
      in: 'body',
      name: 'index',
      require: true
    },
  ]
};
const fibonacciValue = async (req: RequestCustom, res: Response) => {
  try {
    const { index } = req.body;

    const fibonacciValue = {
      value: fib(index)
    }

    await fibonacciResponseSchema.validateAsync(fibonacciValue);

    res.status(200).send(fibonacciValue);
  } catch (error) {
    res.status(error.code | 500).send(error);
  }
};


export { swPostFibonacciValue, fibonacciValue };
