const matchesDB = require('../../schemas/matches.js')
const teamsDB = require('../../schemas/teams.js'); 
const tournamentsDB = require('../../schemas/tournaments.js'); 


async function buildMatchData() {
    let matchesData = await matchesDB.find({ completed: false }).lean(true);

    for (let index = 0; index < matchesData.length; index++) {
        let match = matchesData[index];

        let teamData = await teamsDB.find({ id: { $in: [match.team1.id, match.team2.id] } })
        let matchTournamentData = await tournamentsDB.find({ id: match.tournament.id })

        match.team1 = teamData[0]
        match.team2 = teamData[1]
        match.tournament = matchTournamentData[0]
        matchesData[index].formatedDate = 
            `${ new Date(match.startDate).toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric" }) } - ${ new Date(match.startDate).toLocaleTimeString('en-us', { hour12: true, hour: "numeric", minute: "2-digit" }) }`
    }
    return matchesData;
}

module.exports = buildMatchData;