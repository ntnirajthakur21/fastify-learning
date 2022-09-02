const fastify = require('fastify')({logger: true})
const itemRoutes = require('./Routes/item')

// Swagger documentation
fastify.register(require('@fastify/swagger'), {
    routePrefix: '/documentation',
    swagger: {
        info: {
            title: 'Test swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
          },
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    exposeRoute: true
})

// Routes
fastify.register(itemRoutes)


const PORT = 5000

// start server
const start = async() =>{
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()