require('dotenv').config(); // this is important!

module.exports = {

  development: {
    dialect: 'sqlite',
    storage: './db/data/dev-db.sqlite3'
  },
  test: {
    dialect: 'sqlite',
    storage: './db/data/test-db.sqlite3'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
