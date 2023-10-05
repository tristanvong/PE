// Module 2 - Beslissingen - Challenge@home - oefening 2
// Initials - Initialen
// Dagen in de maand v2
console.log('_/_/_/_/_/     _/         _/');
console.log('   _/           _/      _/');
console.log('  _/            _/     _/');
console.log(' _/              _/  _/');
console.log('_/         _/     _/');
console.log('Code geschreven door Tristan Vong');
console.log('----------------------------------');


// Import userInput function
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// Title
console.log('Dagen in de maand berekening')

// Variables
let maand = await userInput.question('Geef een maand: ');
let jaartal = parseFloat(await userInput.question('Geef een jaartal: '));

// Switch case with one if statement in the month february
switch (maand.toLowerCase()) {

    case 'januari':
        console.log('De maand ' + maand + ' bevat 31 dagen.');
        break;

    case 'februari':

        if (jaartal % 4 == 0) 
        {
            console.log('De maand ' + maand + ' bevat 29 dagen. Omdat dit in het schrikkeljaar valt: ' + jaartal);
        }
        else 
        {
            console.log('De maand ' + maand + ' bevat 28 dagen. Omdat dit niet tijdens een schrikkeljaar valt.');
        }
        break;

    case 'maart':
        console.log('De maand ' + maand + ' bevat 31 dagen.');
        break;

    case 'april':
        console.log('De maand ' + maand + ' bevat 30 dagen.');
        break;

    case 'mei':
        console.log('De maand ' + maand + ' bevat 31 dagen.');
        break;

    case 'juni':
        console.log('De maand ' + maand + ' bevat 30 dagen.');
        break;

    case 'juli':
        console.log('De maand ' + maand + ' bevat 31 dagen.');
        break;

    case 'augustus':
        console.log('De maand ' + maand + ' bevat 31 dagen.');
        break;

    case 'september':
        console.log('De maand ' + maand + ' bevat 30 dagen.');
        break;

    case 'oktober':
        console.log('De maand ' + maand + ' bevat 31 dagen.');
        break;

    case 'november':
        console.log('De maand ' + maand + ' bevat 30 dagen.');
        break;

    case 'december':
        console.log('De maand ' + maand + ' bevat 31 dagen.');
        break;

    default:
        console.log('U gaf geen geldige maand in, probeer opnieuw.')
}

process.exit()