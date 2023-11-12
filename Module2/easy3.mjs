import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// E3: Dagen in de maand
// Gebruik een switch/case om te controleren hoeveel dagen de variabele maand heeft.

let maand = await userInput.question('Voer een maand in: ');
let aantalDagen;

switch (maand) {
    case 'februari':
            aantalDagen = 28;
            console.log(`De ${maand} heeft ${aantalDagen} dagen`);
            break;

        case 'april':
        case 'juni':
        case 'september':
        case 'november':
            aantalDagen = 30;
            console.log(`De ${maand} heeft ${aantalDagen} dagen`);
            break;

        case 'januari':
        case 'maart':
        case 'mei':
        case 'juli':
        case 'augustus':
        case 'oktober':
        case 'december':
            aantalDagen = 31;
            console.log(`De ${maand} heeft ${aantalDagen} dagen`);
            break;
    default:
        console.log('Voer een geldige maand in, probeer opnieuw.')
        break;
}

process.exit();