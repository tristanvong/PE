import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// E1: Even of oneven
// Vraag een getal aan de gebruiker. Controleer of dit getal even of oneven is
// (met behulp van de restoperator %). Print even of oneven af naar de gebruiker.

let getalVanGebruiker = parseFloat(await userInput.question('Voer een getal in: '));

if (getalVanGebruiker % 2 == 0) {
    console.log('Even')
}else{
    console.log('Oneven')
}

process.exit();