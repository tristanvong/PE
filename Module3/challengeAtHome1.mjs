// Module 3 - Lussen - Challenge@Home - oefening 1
// Initials - Initialen
// Rij van fibonacci
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
let var1 = 0;
let var2 = 1;
let i = 0;
let welkeRij = parseFloat(await userInput.question('Hoeveel getallen van de "rij van fibonacci" wilt u weergeven? '));

while(i<welkeRij){
    if(i % 2 == 0){ // If iteration is even do following code
        console.log(var1); // Output current var1
        var1 = var1 + var2; // Override current var 1 with sum (var1 + var2)
        // console.log('Debug - Even'); // Added for debugging purposes
    }
    else if(i % 2 != 0){ // If iteration is uneven do following code
        console.log(var2); // Output current var2
        var2 = var1 + var2; // Override current var2 with sum (var1 + var2)
        // console.log('Debug - Oneven'); // Added for debugging purposes
    }i++; // Start new iteration
}

process.exit();