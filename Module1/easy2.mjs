// Module 1 - Variabelen oefening 1
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
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input,output});

// Variables
let naam;
let leeftijd;
let favorietSpel;

// userInputs (What is your name?) (How old are you?) (What is your favourite videogame?)
naam = await userInput.question('Wat is uw naam? ');
leeftijd = parseFloat(await userInput.question('Hoe oud bent u? '));
favorietSpel = await userInput.question('Wat is uw favoriet videospel? ');

// Output
console.log('Hallo '+ naam +', ik hoor dat je '+ leeftijd +' jaar oud bent en dat je lievelingsgame '+ favorietSpel +' is.');

process.exit();