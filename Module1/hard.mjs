// Module 1 - Variabelen - hard - oefening 1
// Initials - Initialen
// Aantal seconden
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
let aantalDagen;
let aantalUren;
let aantalMinuten;
let aantalSeconden;
let totaalSeconden;

// userInputs
aantalDagen = parseFloat(await userInput.question('Geef het aantal dagen: '));
aantalUren = parseFloat(await userInput.question('Geef het aantal uren: '));
aantalMinuten = parseFloat(await userInput.question('Geef het aantal minuten: '));
aantalSeconden = parseFloat(await userInput.question('Geef het aantal seconden: '));

// Calculations
// Days to seconds
totaalSeconden = ((aantalDagen * 24) * 60 * 60);

// Hours to seconds
totaalSeconden += (aantalUren * 60 * 60);

// Minutes to seconds
totaalSeconden += (aantalMinuten * 60);

// Adding the given seconds to the total amount of seconds
totaalSeconden += (aantalSeconden);

// Alternatively the calculations in one line which is less readible
// totaalSeconden = ((aantalDagen * 24) * 60 * 60) + (aantalUren * 60 * 60) + (aantalMinuten * 60) + (aantalSeconden);

// Output
console.log(totaalSeconden);

process.exit();