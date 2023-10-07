// Module 3 - Lussen - medium - oefening 1
// Initials - Initialen
// Getallen optellen
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

let getal = parseFloat(await userInput.question('Geef een getal in: '));
let i = 2;
let isPriem = true;

if (getal == 1 || getal <= 0){
    console.log(`${getal} is geen priemgetal.`);
} else if (getal > 0){

    for(i = 2; i < getal; i++){
        if(getal % i == 0){ // Als getal deelbaar is door i en geen rest heeft dan is het geen priemgetal
            isPriem = false;
            break;
        }
    }

    if(isPriem == true){
        console.log(`${getal} is een priemgetal.`);
    } else{
        console.log(`${getal} is geen priemgetal.`);
    }
}

process.exit();