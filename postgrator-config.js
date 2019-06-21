require('dotenv').config();
const config = require('./src/config');

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": process.env.NODE_ENV === 'test'
    ? config.TEST_DATABASE_URL
    : config.DATABASE_URL
};
