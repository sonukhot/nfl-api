const teams = (sequelize, Sequelize) => {
  return sequelize.define('teams', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    location: { type: Sequelize.STRING },
    mascot: { type: Sequelize.STRING },
    abbreviation: { type: Sequelize.STRING },
    conference: { type: Sequelize.ENUM('AL', 'NL') },
    division: { type: Sequelize.ENUM('East', 'Central', 'West') },
  }, { paranoid: true })
}

module.exports = teams
