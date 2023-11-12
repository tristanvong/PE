import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//E1: Statische Introductie
//Verklaar drie variabelen die je zelf invult ('name', 'age' en 'favoriteGame')
//print daarna een tekst uit met deze variabelen

let name = 'Tristan';
let age = 18;
let favoriteGame = 'Fortnite';

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();