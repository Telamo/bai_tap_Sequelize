


// const mysql = require('mysql2')

// yarn add sequelize-auto

const { Sequelize } = require('sequelize')
const { database, userName, passWord, host, port, dialect } = require('../config/index')
const sequelize = new Sequelize(database, userName, passWord, {
    host,
    port,
    dialect 
})

module.exports = sequelize