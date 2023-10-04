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

let getal1 = parseFloat(await userInput.question('Geef een getal: '));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal: '));
let keuze;

let optellen = getal1 + getal2;
let aftrekken = getal1 - getal2;
let vermenigvuldigen = getal1 * getal2;
let delen = getal1 / getal2;


keuze = await userInput.question('Kies uit: "optellen", "aftrekken", "vermenigvuldigen" of "delen": ');

if (keuze == 'optellen')
{
    console.log(getal1 + ' + ' + getal2 + ' = ' + optellen);
}
    else if (keuze == 'aftrekken')
    {
        console.log(aftrekken)
    }
    else if (keuze == 'aftrekken')
    {
        console.log(aftrekken)
    }