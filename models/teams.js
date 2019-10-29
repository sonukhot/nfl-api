const teams = (connection, Sequelize) => {
    return connection.define('teams', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        location: { type: Sequelize.STRING },
        mascot: { type: Sequelize.STRING },
        abbreviation: { type: Sequelize.STRING, unique: true },
        conference: { type: Sequelize.ENUM('AL', 'NL') },
        division: { type: Sequelize.ENUM('East', 'Central', 'West') },
    }, { tableName: 'teams', paranoid: true })
}
module.exports = teams
