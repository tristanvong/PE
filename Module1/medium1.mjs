import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// M1: Uitbreiden van "Opteller"
// We gaan onze "Opteller" van de vorige oefening licht aanpassen. 
// In plaats van de gebruiker om de getallen te vragen gaan we zelf twee getallen definiëren. 
// Vervolgens gaan we van deze twee getallen de som, verschil, product en deling laten zien.

let getal1 = 6;
let getal2 = 3;

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let deling = getal1 / getal2;

console.log('De som is ' + som);
console.log('Het verschil is ' + verschil);
console.log('Het product is ' + product);
console.log('De deling is ' + deling);

process.exit();