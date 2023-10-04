// Module 1 - Variabelen - easy - oefening 1
// Initials - Initialen
// Basic variable code
console.log('_/_/_/_/_/     _/         _/');
console.log('   _/           _/      _/');
console.log('  _/            _/     _/');
console.log(' _/              _/  _/');
console.log('_/         _/     _/');
console.log('Code geschreven door Tristan Vong');
console.log('----------------------------------');

// Import userInput function
import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input,output});

// Variables
let naam = 'Tristan';
let leeftijd = 18;
let favorietSpel = 'GTA V';

// Output
console.log('Hallo '+ naam +', ik hoor dat je '+ leeftijd +' jaar oud bent en dat je lievelingsgame '+ favorietSpel +' is.');

process.exit();