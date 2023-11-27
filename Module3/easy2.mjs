import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//E2: Tafel van vermenigvuldiging
//Maak een variabele getal aan, gebruik een lus om de tafels van vermenigvuldiging van dat getal
//te laten zien. De output zal er ongeveer als volgt uit zien

//De tafel van 5:
//5 x 1 = 5
//5 x 2 = 10
// ...

let getal = 5;

for (let i = 1; i <= 10; i++){
    let resultaat = getal * i;
    console.log(`${getal} x ${i} = ${resultaat}`);
}

process.exit();