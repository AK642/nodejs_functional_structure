import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.routes.js';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json({ limit: '200mb' }));

//* Use to resolve cors error
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept,Authorization, Access-Control-Allow-Headers, access-token"],
    credentials: true,
}));

// Routes
app.use('/api/v1', routes);

// Route to check if server is working or not
app.get('/', (req, res) => {
    res.send('Server Works! 🚀🚀 ');
});

// If no route is matched
app.use((req, res) => {
    res.status(404).send('Endpoint not found!');
})

export default app;