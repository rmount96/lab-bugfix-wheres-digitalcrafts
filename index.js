const { getByAbbreviation, searchByName } = require('./db');
const db = require('./db');

function main() {

    const statesWithAnAtlanta = db.statesWithCity('atlanta');
    console.log('\n\nThere is an Atlanta in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    }
    
    console.log('\n\n============================');
    
    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAHouston) {
        console.log(st);
    }
    
    console.log('\n\n============================');

    const statesWithATampa = db.statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (st of statesWithATampa) {
        console.log(st);
    }

}

console.log(searchByName('dakota'))

main();
