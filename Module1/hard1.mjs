import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// H1: Aantal seconden
// Schrijf een script dat aan de hand van een 
// aantal dagen, uren, minuten en seconden de totale tijd in seconden zal berekenen. 

let aantalDagen = 2;
let aantalUren = 5;
let aantalMinuten = 37;
let aantalSeconden = 26;
let totaalAantalSeconden = ((aantalDagen * 24 * 60 * 60) + (aantalUren * 60 * 60) + (aantalMinuten * 60) + aantalSeconden);

console.log(totaalAantalSeconden);
process.exit();