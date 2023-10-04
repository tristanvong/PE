// Module 2 - Beslissingen - easy - oefening 1
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

// Variable
let getal;

// userInput
getal = parseFloat(await userInput.question('Geef een getal: '));


// ifStatement
if (getal % 2 == 0)
{
    console.log('Uw getal is even.');
}
    else if (getal % 2 == 1)
    {
        console.log('Uw getal is oneven.');
    }
    else
    {
        console.log('U hebt geen geldige waarde ingevoerd, probeer opnieuw.');
    }

process.exit();