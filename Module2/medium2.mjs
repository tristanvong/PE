// Module 2 - Beslissingen - medium - oefening 2
// Initials - Initialen
// Simpele rekenmachine
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

// userInput
let getal1 = parseFloat(await userInput.question('Geef een getal: '));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal: '));
let keuze;

// Calculations
let optellen = getal1 + getal2;
let aftrekken = getal1 - getal2;
let vermenigvuldigen = getal1 * getal2;
let delen = getal1 / getal2;

// Choice (sum) (subtraction) (mutliplication) (division)
keuze = await userInput.question('Kies uit: "optellen", "aftrekken", "vermenigvuldigen" of "delen": ');

if (keuze == 'optellen')
{
    console.log(getal1 + ' + ' + getal2 + ' = ' + optellen);
}
    else if (keuze == 'aftrekken')
    {
        console.log(getal1 + ' - ' + getal2 + ' = ' + aftrekken);
    }
    else if (keuze == 'vermenigvuldigen')
    {
        console.log(getal1 + ' * ' + getal2 + ' = ' + vermenigvuldigen);
    }
    else if (keuze == 'delen')
    {
        console.log(getal1 + ' / ' + getal2 + ' = ' + delen);
    }
    else
    {
        console.log('Je keuze is niet geldig, kies uit: optellen, aftrekken, vermenigvuldigen of delen.');
    }

// Same code in switch/case form
// switch(keuze){
//     case 'optellen':
//         console.log(getal1 + ' + ' + getal2 + ' = ' + optellen);
//         break;

//     case 'aftrekken':
//         console.log(getal1 + ' - ' + getal2 + ' = ' + aftrekken);
//         break;

//     case 'vermenigvuldigen':
//         console.log(getal1 + ' * ' + getal2 + ' = ' + vermenigvuldigen);
//         break;

//     case 'delen':
//         console.log(getal1 + ' / ' + getal2 + ' = ' + delen);
//         break;

//     default:
//         console.log('Je keuze is niet geldig, kies uit: optellen, aftrekken, vermenigvuldigen of delen.');
// }


process.exit();