import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// H2: Schrikkeljaar
// Schrijf een script dat een jaartal inleest en als output het aantal dagen in februari weergeeft.

// De 'regel' voor een schrikkeljaar is als volgt:
// Het jaartal is deelbaar door 4 => wel een schrikkeljaar

let jaartal = parseFloat(await userInput.question('Voer een jaartal in: '));
let aantalDagenFebruari;

if(jaartal % 4 == 0){
    aantalDagenFebruari = 29;
}else{
    aantalDagenFebruari = 28;
}

console.log(`Februari heeft ${aantalDagenFebruari} dagen in het jaar ${jaartal}`);

process.exit();