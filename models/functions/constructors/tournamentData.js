const matchesDB = require('../../schemas/matches.js')
const teamsDB = require('../../schemas/teams.js'); 
const tournamentsDB = require('../../schemas/tournaments.js'); 

async function buildTournamentData() {
    let tournamentsData = await tournamentsDB.find().sort({ startDate: 1}).lean(true)

    for (let index = 0; index < tournamentsData.length; index++) {
        let tournament = tournamentsData[index];


        for(let index2 = 0; index2 < tournament.teams.invited.length; index2++) {
            let teamData = await teamsDB.find({ id: tournament.teams.playing[index2] });
            tournamentsData[index].teams.invited[index2] = teamData[0];
        }
        for(let index2 = 0; index2 < tournament.teams.playing.length; index2++) {
            let teamData = await teamsDB.find({ id: tournament.teams.playing[index2] });
            tournamentsData[index].teams.playing[index2] = teamData[0];
        }
        for(let index2 = 0; index2 < tournament.teams.disqualified.length; index2++) {
            let teamData = await teamsDB.find({ id: tournament.teams.disqualified[index2] });
            tournamentsData[index].teams.disqualified[index2] = teamData[0];
        }
        
    }
    return tournamentsData;
}

module.exports = buildTournamentData;


/**
 * Docs
 * 
 * This function constructs the tournaments data taking all the foreign keys present 
 * and building it with actual data from its separate databases. 
 * 
 * Like for eg. 
 * Tournamens Object consists of a Key called "Invited" which is an array of team ids all of
 * it being foreign keys
 * 
 * This constructor takes this ids from the array and adds the Team actual data from 
 * the teamsDB 
 * 
 * EG OUTPUT : 
 * 
 * ORIGINAL - 
 * 
 *  {
    createdBy: { userid: 'user-0123456789' },
    teams: { invited: [Array], playing: [Array], disqualified: [Array] },
    _id: new ObjectId("64b81d079332372a117d55d4"),
    id: 'tour-hiu9an1ksq',
    name: 'Valorant Masters',
    logoURL: '/Assets/imgs/vct-masters.png',
    prizepool: '$ 50,000',
    startDate: 2023-07-19T17:27:35.187Z,
    endDate: 2023-07-29T17:27:35.187Z,
    organizer: 'Riot Games',
    location: 'Lan',
    createdAt: 2023-07-19T17:27:35.189Z,
    links: [ [Object] ],
    __v: 0
 * }

    EDITED - 
    { 
        createdBy: { userid: 'user-0123456789' },
        teams: { 
            invited: [
                {
                    * Teams Data here Like Example Below *
                    * Data coming from Teams Database *
                    * Using the foreign keys = Team IDs given in the existing array * 
                },
                {
                    createdBy: { userid: 'user-0123456789' },
                    members: {
                        owners: [],
                        managers: [],
                        players: [],
                        substitutes: [],
                        coaches: []
                    },
                    _id: new ObjectId("64bacc412309f224d10acf88"),
                    id: 'team-o5cswtozgz',
                    createdAt: 2023-07-21T18:19:45.277Z,
                    name: 'Global eSports',
                    shortName: 'GE',
                    country: 'India',
                    bannerURL: '',
                    logoURL: '',
                    url: '',
                    totalWinnings: '$ 70,000',
                    totalWins: 30,
                    totalLoss: 25,
                    links: [
                        {
                        instagram: 'https://instagram.com',
                        twitter: 'https://twitter.com',
                        facebook: 'https://facebook.com'
                        }
                    ]
                    __v: 0
                }
            ], 
            playing: [
                * Same as above for this *
            ], 
            disqualified: [
                * Same as above for this aswell *
            ] 
        },
        _id: new ObjectId("64b81d079332372a117d55d4"),
        id: 'tour-hiu9an1ksq',
        name: 'Valorant Masters',
        logoURL: '/Assets/imgs/vct-masters.png',
        prizepool: '$ 50,000',
        startDate: 2023-07-19T17:27:35.187Z,
        endDate: 2023-07-29T17:27:35.187Z,
        organizer: 'Riot Games',
        location: 'Lan',
        createdAt: 2023-07-19T17:27:35.189Z,
        links: [ [Object] ],
        __v: 0
    }
 * 
 */