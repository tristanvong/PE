import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// H1: Highscore
// Schrijf een script dat 5 getallen inleest. 
// Toon na het inlezen wat het hoogste getal, het laagste getal en het gemiddelde is.

let getal1 = parseFloat(await userInput.question('Voer een getal in: '));
let getal2 = parseFloat(await userInput.question('Voer een getal in: '));
let getal3 = parseFloat(await userInput.question('Voer een getal in: '));
let getal4 = parseFloat(await userInput.question('Voer een getal in: '));

let maximum = Math.max(getal1, getal2, getal3, getal4);
let minimum = Math.min(getal1, getal2, getal3, getal4);
let gemiddelde = (getal1 + getal2 + getal3 + getal4) / 4;

console.log('');
console.log(`Het grootste getal is: ${maximum}`);
console.log(`Het kleinste getal is: ${minimum}`);
console.log(`Het gemiddelde is: ${gemiddelde}`);

process.exit();