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

let getal = 0;
let som = 0;

while(getal >= 0){
    getal = parseFloat(await userInput.question('Geef een getal in: '));

    // The if statement makes sure that the sum doesn't get affected by negative numbers
    if (getal > 0){
        som += getal;
    } else 
    {
    }
    console.log(som);
}

process.exit();