// Module 3 - Lussen - easy - oefening 1
// Initials - Initialen
// Even of oneven
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

// Print every number from 1 through 20
let som = 0;
while(som <= 20){
    console.log(som)
    som += 2
}

process.exit();