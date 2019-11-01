const Sequelize = require('sequelize')
const teamsModel = require('./teams')

const connection = new Sequelize('football', 'football', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const teams = teamsModel(connection, Sequelize)

module.exports = {
  teams
}