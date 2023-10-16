// Module 4 - Zo zijn we logisch - easy - oefening 3
// Veelvouden uitbreiden

// Import userInput function
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// Variables -> Change to your liking
let start = 1;
let end = 10;
let deler1 = 2;
let deler2 = 4;
let deelbaar1 = await userInput.question(`Moet het getal deelbaar zijn door ${deler1}? Antwoord met JA of NEE: `);
let deelbaar2 = await userInput.question(`Moet het getal deelbaar zijn door ${deler2}? Antwoord met JA of NEE: `);

// While loop that starts from the end to end
while(start<=end){
    // If statements check if start is divisble  by deler1 and deler2 -> print that start out in console
    if(deelbaar1 == 'JA' && deelbaar2 == 'JA' && start % deler1 == 0 && start % deler2 == 0){
        console.log(start);
    }
    else if(deelbaar1 == 'JA' && deelbaar2 == 'NEE' && start % deler1 == 0){
        console.log(start);
    }
    else if(deelbaar1 == 'NEE' && deelbaar2 == 'JA' && start % deler2 == 0){
        console.log(start);
    }
    start++;
}

process.exit();