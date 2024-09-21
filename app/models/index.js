const dbConfig = require('../config/db.config.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  dialectOptions: {
    ssl: {
      require: true, // Ensures SSL is required
      rejectUnauthorized: false, // Accepts self-signed certificates (use with caution)
    },
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize)

module.exports = db
