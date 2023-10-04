// Module 1 - Variabelen oefening 3
// Initials - Initialen
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

// Variables
let getal1;
let getal2;
let som;

// userInputs
getal1 = parseFloat(await userInput.question('Voer een getal in: '));
getal2 = parseFloat(await userInput.question('Voer een ander getal in: '));
som = getal1 + getal2;

// Output
console.log('De som van jouw twee getallen: ' + som + '.');

process.exit();