import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// M1: Songtitels
// Maak een keuzemenu met de keuze tussen 4 verschillende artiesten. 
// Lees daarna de keuze in van de gebruiker en toon een songtitel van deze artist. 
// Een voorbeeld hiervan:

// Kies een artiest:
// 1. Red Hot Chili Peppers
// 2. AC/DC
// 3. Netsky
// 4. De Strangers

// Geef je keuze in: 4

// Je koos voor "De Strangers"
// Ze zijn de artist achter de hit: Mijnen blauwe geschelpte
// Maak zowel een versie dat gebruik maakt van if/else en een versie dat gebruik maakt van een switch/case.

console.log('Kies een artiest:');
console.log('1. Red Hot Chili Peppers');
console.log('2. AC/DC');
console.log('3. Netsky');
console.log('4. De Strangers');
console.log('')

let keuzeGebruiker = parseFloat(await userInput.question('Geef je keuze in [1, 2, 3 of 4]: '));
console.log('')

if (keuzeGebruiker == 1) {
    console.log('Je koos voor "Red Hot Chili Peppers"');
    console.log('Ze zijn de artist achter de hit: Californication');

}else if (keuzeGebruiker == 2) {
    console.log('Je koos voor "AC/DC"');
    console.log('Ze zijn de artist achter de hit: Thunderstruck');

}else if (keuzeGebruiker == 3) {
    console.log('Je koos voor "Netsky"');
    console.log('Ze zijn de artist achter de hit: Rio');

}else if (keuzeGebruiker == 4) {
    console.log('Je koos voor "De Strangers"');
    console.log('Ze zijn de artist achter de hit: Mijnen blauwe geschelpte');
}else{
    console.log('Je voerde geen geldige keuze in.');
}

process.exit();