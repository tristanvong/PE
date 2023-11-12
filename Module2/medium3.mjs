import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// M3: Quiz
// Bouw een quizspel waarbij de gebruiker 5 vragen moet beantwoorden. 
// Toon of hij de vraag juist of fout heeft en toon achteraf de score van de gebruiker. 
// De vragen mag je zelf kiezen. Een voorbeeld van de input en output ziet er als volgt uit:

let antwoordGebruiker;

console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen:');
console.log('Vraag 1: Hoe wordt een aardbei in het Engels genoemd?')
antwoordGebruiker = await userInput.question('Jouw antwoord: ')

if (antwoordGebruiker == 'Strawberry') {
    console.log('Goed antwoord!')
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Strawberry')
}

console.log('')
console.log('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?')
antwoordGebruiker = parseFloat(await userInput.question('Jouw antwoord: '))

if (antwoordGebruiker == 8) {
    console.log('Goed antwoord!')
}else{
    console.log('Fout antwoord. Het juiste antwoord is: 8')
}

console.log('')
console.log('Vraag 3: Welke drogisterijketen heeft als slogan "Steeds verrassend, altijd voordelig"?')
antwoordGebruiker = await userInput.question('Jouw antwoord: ');

if (antwoordGebruiker == 'Kruidvat') {
    console.log('Goed antwoord!');
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Kruidvat');
}

console.log('')
console.log('Vraag 4: Waarvoor staat de term E.H.B.O.?')
antwoordGebruiker = await userInput.question('Jouw antwoord: ');

if (antwoordGebruiker == 'Eerste Hulp Bij Ongevallen') {
    console.log('Goed antwoord!');
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Eerste Hulp Bij Ongevallen');
}

console.log('')
console.log('Vraag 5: Uit hoeveel letters bestaat het Latijns alfabet?')
antwoordGebruiker = parseFloat(await userInput.question('Jouw antwoord: '));

if (antwoordGebruiker == 26) {
    console.log('Goed antwoord!');
}else{
    console.log('Fout antwoord. Het juiste antwoord is: 26');
}

process.exit();