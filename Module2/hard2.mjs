// Module 2 - Beslissingen - hard - oefening 2
// Initials - Initialen
// Schrikkeljaar
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

console.log('Schrikkeljaar berekenaar');
console.log(' ');

let jaartal = parseFloat(await userInput.question('Geef een jaar: '));

if (jaartal % 4 == 0)
{
    console.log('Het jaartal ' + jaartal + ' is een schrikkeljaar. Februari heeft 29 dagen tijdens dit jaar.');
}
    else
    {
        console.log('Het jaartal ' + jaartal + ' is geen schrikkeljaar. Februari heeft 28 dagen tijdens dit jaar.')
    }

process.exit();