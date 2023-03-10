import { corsHandler } from './src/middlewares/cors-handler';
import { typeCase } from './src/middlewares/type-case';
import Express, { Application } from 'express';
import fibonacci from './src/routes/fibonacci.route';
import { errorHandler } from './src/middlewares/error-handler';
import swaggerUI from 'swagger-ui-express';
import { swDocument } from './swagger.def';

const app: Application = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json({ limit: '50mb' }));
app.use(corsHandler());
app.use(typeCase('camel'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swDocument));
app.use('/fibonacci', fibonacci);
app.use(errorHandler);

module.exports = app;
