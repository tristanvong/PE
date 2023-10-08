// Module 3 - Lussen - medium - oefening 4
// Initials - Initialen
// FizzBuzz
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
let i = 0;
let som = 1;


while(i < 100){ // 1 - 100
    console.log(som)
    if(som % 3 == 0 && som % 5 == 0){
        console.log('FizzBuzz') // Print FizzBuzz if number can be divided by 3 and 5
    } else if (som % 3 == 0){
        console.log('Fizz') // Print Fizz if number can be divided by 3
    } else if (som % 5 == 0){
        console.log('Buzz') // Print Fizz if number can be divided by 3
    }
    som += 1 
    i++;
}

process.exit();