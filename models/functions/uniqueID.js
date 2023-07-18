/**
 * 
 * Default Values of Parameters
 * @param length = 10 
 * @param useCase = 'user'
 * 
 * ID Formats
 * @user        - user-xxxxxxxxxx
 * @teams       - team-xxxxxxxxxx
 * @tournaments - tour-xxxxxxxxxx
 * @news        - news-xxxxxxxxxx
 * @matches     - game-xxxxxxxxxx
 */

const generateUniqueId = require('generate-unique-id');

function generateId({useCase = 'user', length = 10} = {}) {

    const id = generateUniqueId({
      excludeSymbols: ['@', '!', '&'],
      useLetters: true,
      useNumbers: true,
      length: length
    });
    
    if(useCase == 'user') {
        return `user-${id}`;
    }
    if(useCase == 'team') {
        return `team-${id}`;
    }
    if(useCase == 'tournament') {
        return `tour-${id}`;
    }
    if(useCase == 'news') {
        return `news-${id}`
    }
    if(useCase == 'game') {
        return `game-${id}`
    }
}

module.exports = generateId;