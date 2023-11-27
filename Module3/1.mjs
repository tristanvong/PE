import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//H1: Sterrenpiramide uitbreiden
//We gaan de sterrenpiramide uit M2 aanpassen. Zorg ervoor dat er nu in plaats van een piramide
//een diamand te voorschijn komt, dus bijvoorbeeld als hoogte gelijk is aan 5 komt er dit
//tevoorschijn:

//   *
//  ***
// *****
//  ***
//   *

let hoogte = 5;
let midden = Math.floor(hoogte/2);
let midden2 = Math.ceil(hoogte/2);
let iteratie = 1;
let witSpatie = '';

for (let i = 1; i <= 2; i++){
    // console.log(i)
    let uitvoer = '';
    let witspaties = '  ';
    let aantalSterren = ''

    for (let j = 1; j <= iteratie; j++){
        // console.log(j)

        aantalSterren += '*'
        uitvoer = aantalSterren
    }

    for (let k = 2; k >= iteratie; k--){
        witspaties -= ' ';
        witSpatie = witSpatie
        
    }
    iteratie++
    console.log(witspaties + uitvoer)
}

process.exit();