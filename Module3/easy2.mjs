// Module 3 - Lussen - easy - oefening 2
// Initials - Initialen
// Tafel van vermenigvuldiging
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

//Variables

let getal = 3;
let i = 1;

// Title
console.log(`De tafel van ${getal}: `);

// While loop
while(i <= 10){
    let uitkomst = getal * i;
    console.log(`${getal} x ${i} = ${uitkomst}`);
    i++;
}

process.exit();