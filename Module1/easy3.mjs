import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

//E3: Dynamische Simpele Opteller
//Vraag 2 getallen aan gebruiker, tel deze vervolgens met elkaar op

let getal1 = parseFloat(await userInput.question("Voer een getal in: "));
let getal2 = parseFloat(await userInput.question("Voer een getal in: "));

let som = getal1 + getal2;
console.log(som);

process.exit();