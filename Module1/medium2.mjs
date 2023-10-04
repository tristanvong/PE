// Module 1 - Variabelen - medium - oefening 2
// Initials - Initialen
// Leeftijdberekenaar
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
let geboorteJaar;
let toekomstJaar;

// userInputs
geboorteJaar = parseFloat(await userInput.question('In welk jaar bent u geboren? '));
toekomstJaar = parseFloat(await userInput.question('Geef een toekomstig jaar in: '));

// Output
console.log('In ' + toekomstJaar + ' zal ik ' + ((toekomstJaar - geboorteJaar) - 1 )+ ' of ' + (toekomstJaar - geboorteJaar) + ' jaar oud zijn.');

process.exit();
