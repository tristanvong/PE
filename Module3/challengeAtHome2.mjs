// Module 3 - Lussen - Challenge@Home - oefening 2
// Initials - Initialen
// Grootste gemene deler
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
let getal1 = parseFloat(await userInput.question('Geef een getal: '));
let getal2 = parseFloat(await userInput.question('Geef een getal: '));
let output1 = getal1; // Number1 will be overridden so number1 inital value is stored in this variable
let output2 = getal2; // Number2 will be overridden so number2 inital value is stored in this variable
let grootsteGemeneDeler;


while(getal1 != getal2){ // While number1 is not equal to number2 perform the following code
    if(getal1 > getal2){ // If number1 is greater than number2 do the following code
        getal1 = getal1 - getal2; // number1 equals number 1 minus number2
    }
    else if(getal2 > getal1){ // If number2 is greater than number1 do the following
        getal2 = getal2 - getal1; // number2 equals number2 minus number1
    }
    grootsteGemeneDeler = getal1; // GGD equals number1 (can also equal number2 doesnt matter since the while loop keeps looping until they equal to each other)
}

console.log(`De grootste gemene deler tussen ${output1} en ${output2} is ${grootsteGemeneDeler}`);


process.exit();