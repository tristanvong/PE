import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//M2: Sterrenpiramide
//Gebruik een variabele hoogte. We gaan aan de hand van hoogte een sterrenpiramide bouwen. Per laag
//van de piramide komst er een ster bij. Dus bijvoorbeeld als hoogte gelijk is aan 4 zal de
//afgedrukte piramide er zo uit zien:

// *
// **
// ***
// ****
// *****

let hoogte = 5;

for (let i = 1; i <= hoogte; i++){
    let uitvoer = '';
    for (let j = 1; j <= i; j++){
        uitvoer += '*';
    }
    console.log(uitvoer);
}

process.exit();