import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//E2: Dynamische Introductie
//Vraag telkens de naam 'name', leeftijd 'age' en favoriet videospel 'favoriteGame'
//aan de gebruiker. Print een tekst met deze variabelen vervolgens uit

let name = await userInput.question('Wat is je naam? ');
let age = parseFloat(await userInput.question('Wat is je leeftijd? '));
let favoriteGame = await userInput.question('Wat is je favoriet videospel? ');

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();