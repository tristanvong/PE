// Module 4 - Zo zijn we logisch - easy - oefening 2
// Initials - Initialen
// Veelvouden
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

// Variables -> Change to your liking
let start = 1;
let end = 10;
let deler1 = 2;
let deler2 = 4;

// While loop that starts from the end to end
while(start<=end){
    // If statements check if start is divisble  by deler1 and deler2 -> print that start out in console
    if(start % deler1 == 0 && start % deler2 == 0){
        console.log(start);
    }
    start++;
}

process.exit();