// Module 3 - Lussen - hard - oefening 1
// Initials - Initialen
// Sterrenpiramide uitbreiden
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
let hoogte = parseFloat(await userInput.question('Geef een getal in: ')); // Let the user input a number for the pyramid height
let bovensteKant = 1; // The amount of stars at the upper half of the pyramid
let teken = '*'; // Change the char for customization
let witSpatie = ' '; // Whitespace
let witSpatieIteratie = 0; // Whitespace iteration
let bovensteKantWitspatie = (((hoogte + 1)/2)-1); // Whitespace formula for the upper half of the pyramid = median - 1

if (hoogte % 2 == 0 || hoogte <= 0){ // if height is even OR height equals 0 OR height is negative output the following message
    console.log(`Geef een positief oneven getal in. Probeer opnieuw. U gaf ${hoogte} in.`)
} else if(hoogte % 2 != 0){ // if height is NOT divisible by 2 let the pyramid code work

    // This is for the UPPER half of the pyramid
    while(bovensteKant < hoogte){ // While the stars of the upper half are smaller than the given height loop through:
        console.log(witSpatie.repeat(bovensteKantWitspatie) + teken.repeat(bovensteKant)) // print out whitespace * whitespace iteration and character * amount of stars @ upper half pyramid
        bovensteKantWitspatie -= 1 // Whitespace reduces every layer it goes down
        bovensteKant += 2 // Character (stars) increase every layer it goes down
    }
    
    console.log(teken.repeat(hoogte)) // This is the base of the pyramid
    witSpatieIteratie = 0 // Whitespace iteration gets reset to 0
    
    //This is for the LOWER half of the pyramid
    while(hoogte > 1){ // While height is bigger than 1 do:
        witSpatieIteratie += 1 // Whitespace iteration +1 every iteration
        hoogte -= 2; // Height -2 every iteration
        console.log(witSpatie.repeat(witSpatieIteratie) + teken.repeat(hoogte)) // Print out: whitespace * iteration and character * height
        
    }
}

process.exit();