import env from '../utils/validate-env.js';

export const config = {
    development: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "witty_dev",
        host: env.MYSQL_HOST,
        dialect: 'mysql',
        pool: {
            max: 10, // Maximum number of connection in pool
            min: 0,  // Minimum number of connection in pool
            acquire: 30_000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
            idle: 10_000
        }
    },
    staging: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "witty_stag",
        host: env.MYSQL_HOST,
        dialect: 'mysql',
        pool: {
            max: 10, // Maximum number of connection in pool
            min: 0,  // Minimum number of connection in pool
            acquire: 30_000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
            idle: 10_000
        }
    },
    production: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "witty_prod",
        host: env.MYSQL_HOST,
        dialect: 'mysql',
        pool: {
            max: 10, // Maximum number of connection in pool
            min: 0,  // Minimum number of connection in pool
            acquire: 30_000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
            idle: 10_000
        }
    }
}