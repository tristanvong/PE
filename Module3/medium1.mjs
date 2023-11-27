import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//M1: Getallen optellen
//Maak een applicatie dat getallen aan de gebruiker vraagt en deze optelt bij elkaar zolang het
//ingegeven getal groter is dan 0. Van zodra de gebruiker een getal kleiner of gelijk aan 0
//ingeeft print de applicatie de som af.

let som = 0;
let gebruikerInput;

do{
    gebruikerInput = parseFloat(await userInput.question('Voer een getal in: '));
    if (gebruikerInput > 0){
        som += gebruikerInput;        
    }
}while(gebruikerInput > 0);

console.log(som);

process.exit();