// Module 2 - Beslissingen - easy - oefening 3
// Initials - Initialen
// Dagen in de maand
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


console.log('Hoeveel dagen zijn er in de maand "x"?')
let maand = await userInput.question('Geef een maand: ');
let dagenInMaand;

switch(maand) {
    case 'januari':
    dagenInMaand = 31;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'februari':
    dagenInMaand = 28;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;
    
    case 'maart':
    dagenInMaand = 31;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'april':
    dagenInMaand = 30;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'mei':
    dagenInMaand = 31;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'juni':
    dagenInMaand = 30;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'juli':
    dagenInMaand = 31;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'augustus':
    dagenInMaand = 31;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'september':
    dagenInMaand = 30;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'oktober':
    dagenInMaand = 31;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'november':
    dagenInMaand = 30;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    case 'december':
    dagenInMaand = 31;
    console.log('De maand ' + maand + ' heeft ' + dagenInMaand + ' dagen.');
    break;

    default:
        console.log('Voer een maand in (geen hoofdletters).');
}

process.exit();