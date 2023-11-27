import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//M3: Priemgetal
//Vraag een getal aan de gebruiker. Controleer of dit getal een priemgetal is of niet. (Een getal
//is een priemgetal wanneer het enkel deelbaar is door 1 of door zichzelf)

let gebruikerInput = parseFloat(await userInput.question('Voer een getal in: '));
let isPriemGetal = true;

for (let i = 2; i < gebruikerInput; i++){
    if (gebruikerInput % i == 0){
        isPriemGetal = false;
    }
}

if (isPriemGetal == true){
    console.log(`Jouw getal is een priemgetal.`);
}else{
    console.log(`Jouw getal is niet een priemgetal.`);
}

process.exit();