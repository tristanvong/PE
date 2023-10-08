// Module 3 - Lussen - hard - oefening 2
// Initials - Initialen
// Lopende gemiddelde
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
let getal;
let som = 0;
let gemiddelde;
let i = 1;

do{ // Do the following code UNTIL average is more than 25
    getal = parseFloat(await userInput.question('Geef een getal in: ')); // Userinput number
    som += getal; // Sum = sum + number
    console.log(`De som is = ${som}`); // Output current sum
    console.log(i); // Output current iteration (can be commented out, is implemented for better understanding)
    console.log('-----'); // Separate outputs
    gemiddelde = som/i; // average = sum / i (iteration)
    console.log(`gemiddelde ${gemiddelde}`); // Output current average
    i++; // Next iteration (used to calculate average)

}while(gemiddelde < 25); // Stop when average is more than 25

process.exit();