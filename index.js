const express = require('express')
const bodyParser = require('body-parser')
// teams = require('./teams.json')
const models = require('./models')

const app = express()

app.get('/teams', async (request, response) => {
    const teamsres = await models.teams.findAll()
    response.send(teamsres)
})

app.get('/teams/:x', (request, response) => {
    const identifier = request.params.identifier
    const matchingTeams = teams.filter((team) => {
        return team.id === Number(identifier) || team.abbreviation.toLocaleUpperCase() === identifier.toLocaleUpperCase()
    })
    if (matchingTeams.length) {
        response.send(matchingTeams)
    } else {
        response.sendStatus(404)
    }
})
app.use(bodyParser.json())
app.post('/teams', async (request, response) => {
    const { location, mascot, abbreviation, conference, division } = request.body
    if (!location || !mascot || !abbreviation || !conference || !division) {
        response.status(400).send('The following attributes are required: id, location, mascot, abbreviation, conference, division')
    }

    //const lastId = teams.reduce((acc, team) => {
    //  return team.id > acc ? team.id : acc
    //condition true or acc
    // }, 0)
    //const newTeam = { id: (lastId + 1), location, mascot, abbreviation, conference, division }
    //teams.push(newTeam)
    const newTeam = await models.teams.create({
        location, mascot, abbreviation, conference, division
    })
    response.status(201).send(newTeam)
})

app.all('*', (request, response) => {
    response.status(404).send('Sorry Mario but the Princess is in castle.')
})

const server = app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = server
