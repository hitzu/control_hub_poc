import { swReportRouter } from './src/routes/fibonacci.route';

export const swDocument = {
  openapi: '3.0.0',
  info: {
    title: 'POC Control Hub',
    version: '1.0.0',
    description: 'The REST API to Control Hub '
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Development server'
    }
  ],
  paths: {
    ...swReportRouter
  }
};