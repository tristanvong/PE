// Module 1 - Variabelen - medium - oefening 1
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
let verschil;
let product;
let deling;

// Assigning values
getal1 = 1;
getal2 = 2;
som = getal1 + getal2;
verschil = getal1 - getal2;
product = getal1 * getal2;
deling = getal1 / getal2;

// Output
console.log('De som van de twee getallen is: ' + som + '.');
console.log('Het verschil van de twee getallen is: ' + verschil + '.');
console.log('Het product van de twee getallen is: ' + product + '.');
console.log('De deling van de twee getallen: ' + deling + '.');

process.exit();