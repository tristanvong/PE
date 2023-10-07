// Module 3 - Lussen - medium - oefening 1
// Initials - Initialen
// Getallen optellen
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

// Change to customize:
let hoogte = 8;
let teken = '*';
// Don't change this variable
let zijkant = 1;

// While 'zijkant' is less or equal to 'hoogte' print out a character by choice multiplied by the itteration
while(zijkant <= hoogte){
    console.log(teken.repeat(zijkant));
    zijkant++;
}

process.exit();