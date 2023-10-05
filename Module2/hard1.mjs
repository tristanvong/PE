// Module 2 - Beslissingen - hard - oefening 1
// Initials - Initialen
// Highscore
console.log('_/_/_/_/_/     _/         _/');
console.log('   _/           _/      _/');
console.log('  _/            _/     _/');
console.log(' _/              _/  _/');
console.log('_/         _/     _/');
console.log('Code geschreven door Tristan Vong');
console.log('----------------------------------');


// Import userInput function
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Geef 5 getallen:');
console.log(' ');

let getal1 = parseFloat(await userInput.question('Kies een eerste getal: '));
let getal2 = parseFloat(await userInput.question('Kies een tweede getal: '));
let getal3 = parseFloat(await userInput.question('Kies een derde getal: '));
let getal4 = parseFloat(await userInput.question('Kies een vierde getal: '));
let getal5 = parseFloat(await userInput.question('Kies een vijfde getal: '));

let maximum = Math.max(getal1, getal2, getal3, getal4, getal5);
let minimum = Math.min(getal1, getal2, getal3, getal4, getal5);
let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5)/5;

console.log(' ');
console.log('Het hoogste getal is: ' + maximum);
console.log('Het laagste getal is: ' + minimum);
console.log('Het gemiddelde is: ' + gemiddelde);

process.exit();