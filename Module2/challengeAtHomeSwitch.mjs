import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// @1: Dagen in de maand v2
// We gaan E3 en H1 met elkaar combineren. Vraag aan de gebruiker zowel een maand als een jaar.
// Geef het aantal dagen in die maand terug aan de gebruiker. 
// Gebruik zowel een if/else als een switch/case structuur in je oplossing.

let maand = await userInput.question('Kies een maand: ');
let jaartal = parseFloat(await userInput.question('Kies een jaartal: '));
let dagenInMaand;

switch (maand) {
    case 'februari':
        if (jaartal % 4 != 0) {
            dagenInMaand = 28;
        }else{
            dagenInMaand = 29;
        }
        console.log(`De maand ${maand} bevat ${dagenInMaand} dagen in het jaar ${jaartal}`);
        break;

    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        dagenInMaand = 30;
        console.log(`De maand ${maand} bevat ${dagenInMaand} dagen in het jaar ${jaartal}`);
        break;

    case 'januari':
    case 'maart':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        dagenInMaand = 31;
        console.log(`De maand ${maand} bevat ${dagenInMaand} dagen in het jaar ${jaartal}`);
        break;

    default:
        console.log('Voer een geldige maand in.')
        break;
}

process.exit();