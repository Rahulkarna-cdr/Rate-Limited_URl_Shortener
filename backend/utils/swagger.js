import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortener API',
      version: '1.0.0',
      description: 'API documentation for Rate-Limited URL Shortener'
    },
    servers: [
      {
        url: 'http://localhost:3004',
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/*.js'] // Path to your route files
};

const specs = swaggerJsdoc(options);
export default specs;