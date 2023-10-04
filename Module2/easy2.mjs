// Module 2 - Beslissingen - easy - oefening 2
// Initials - Initialen
// Nummer tussen
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
let minimum = 4;
let maximum = 72;
let getal = parseFloat(await userInput.question('Kies een getal: '));

// If statement the valua has to be between min and max to print out the correct text
if (getal >= minimum && getal <= maximum)
{
    console.log('Je getal ' + getal + ' ligt tussen ' + minimum + ' en ' + maximum);
}
    else
    {
        console.log('Voer een getal in tussen ' + minimum + ' en ' + maximum);
    }

process.exit();