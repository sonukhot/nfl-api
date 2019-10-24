const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:x', (request, response) => {
    const x = request.params.x
    const matchingTeams = teams.filter((team) => {
        return (team.id == x || team.abbreviation.toLocaleUpperCase() == x.toLocaleUpperCase())
    })
    if (matchingTeams.length) {
        response.send(matchingTeams)
    } else {
        response.sendStatus(404)
    }
})
app.all('*', (request, response) => {
    response.status(404).send('Sorry Mario but the Princess is in castle.')
})

const server = app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = server
