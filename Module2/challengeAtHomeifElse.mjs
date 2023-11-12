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

if(maand == 'februari'){
    if(jaartal % 4 != 0){
        dagenInMaand = 28;
    }else{
        dagenInMaand = 29;
    }
    console.log(`De maand ${maand} bevat ${dagenInMaand} dagen in het jaar ${jaartal}`);

}else if (maand == 'april' || maand == 'juni' || maand == 'september' || maand == 'november') {
    dagenInMaand = 30;
    console.log(`De maand ${maand} bevat ${dagenInMaand} dagen in het jaar ${jaartal}`);

}else if (maand == 'januari' || maand == 'maart' || maand == 'mei' || maand == 'juli' || maand == 'augustus' || maand == 'oktober' || maand == 'december') {
    dagenInMaand = 31;
    console.log(`De maand ${maand} bevat ${dagenInMaand} dagen in het jaar ${jaartal}`);
}

process.exit();