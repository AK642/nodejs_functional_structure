import 'dotenv/config';
import app from './app.js';
import env from './utils/validate-env.js';
import { Sequelize } from 'sequelize';
import { config } from './config/config.js';
import { initMySQLModels } from './models/index.js';

// Create HTTP server

// Get database configuration
const environment = env.NODE_ENV;
const databaseConfiguration = config[environment];

export let sequelize;

try {
    (async () => {
        // Create database connection
        const dbConfiguration = {
            ...databaseConfiguration,
            database: undefined
        }

        // Create a database if it not exists
        sequelize = new Sequelize(dbConfiguration);
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${databaseConfiguration.database};`);

        sequelize = new Sequelize(databaseConfiguration);

        // Authenticate database connection and sync models
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        initMySQLModels(sequelize);
        await sequelize.sync({ alter: true });
        console.log("Sequelize OK");

        // Start the server
        app.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });
    })();
}catch(err) {
    console.log("Error: ", err);
    console.log('Unable to connect to the database.');
}

