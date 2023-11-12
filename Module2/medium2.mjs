import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// M2: Simpele rekenmachine
// Vraag twee getallen aan de gebruiker. 
// Vraag vervolgens aan de gebruiker of hij deze wilt 
// optellen, aftrekken, vermenigvuldigen of delen.

// Voor die operatie uit en geef het resultaat terug.

let getal1 = parseFloat(await userInput.question('Voer een getal in: '));
let getal2 = parseFloat(await userInput.question('Voer een getal in: '));
let keuzeHoofdbewerkingen = await userInput.question('optellen, aftrekken, vermenigvuldigen of delen: ');
let resultaat;

if (keuzeHoofdbewerkingen == 'optellen') {
    resultaat = getal1 + getal2;
}else if (keuzeHoofdbewerkingen == 'aftrekken') {
    resultaat = getal1 - getal2;
}else if (keuzeHoofdbewerkingen == 'vermenigvuldigen') {
    resultaat = getal1 * getal2;
}else if (keuzeHoofdbewerkingen == 'delen') {
    resultaat = getal1 / getal2;
}

console.log(resultaat);

process.exit();