const express = require('express');
const cors = require('cors')
const app = express();

const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')

const PORT = 5000;
app.use(cors())
app.use(express.json());

// swagger config starts from here //

const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    info: {
        title: 'Backend APIs',
        version: '1.0.0',
        description: 'Backend APIs'
    },

    host: 'localhost:5000',

    basePath: '/',
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header'
        }
    }
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/swagger.json', function (_, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// ends over here , things will work even tho middle part is removed , and well if whole middle part to any another project it will work as well most probably assuming that MVC type of structure will be used

app.use(authRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
