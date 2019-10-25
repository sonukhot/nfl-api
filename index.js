const express = require('express')
const bodyParser = require('body-parser')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
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
app.post('/teams', (request, response) => {
    const { id, location, mascot, abbreviation, conference, division } = request.body
    if (!id || !location, !mascot, !abbreviation, !conference, !division) {
        response.status(400).send('The following attributes are required: id, location, mascot, abbreviation, conference, division')
    }

    const newTeam = { id, location, mascot, abbreviation, conference, division }
    teams.push(newTeam)
    response.status(201).send(newTeam)
})

app.all('*', (request, response) => {
    response.status(404).send('Sorry Mario but the Princess is in castle.')
})

const server = app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = server
