import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//E1: Even of oneven
//Schrijf een lus dat alle even getallen tussen 1 en 20 afprint.

for (let i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

process.exit();