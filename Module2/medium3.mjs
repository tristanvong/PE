// Module 2 - Beslissingen - medium - oefening 3
// Initials - Initialen
// Quiz
console.log('_/_/_/_/_/     _/         _/');
console.log('   _/           _/      _/');
console.log('  _/            _/     _/');
console.log(' _/              _/  _/');
console.log('_/         _/     _/');
console.log('Code geschreven door Tristan Vong');
console.log('----------------------------------');


// Import userInput function
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// Variables
let vraag1;
let vraag2;
let vraag3;
let vraag4;
let vraag5;

let antwoord1 = 8;
let antwoord2 = 5280;
let antwoord3 = 'mercurius';
let antwoord4 = 'frans';
let antwoord5 = 11;

// Introduction
console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen:');
// Questions
vraag1 = parseFloat(await userInput.question('Hoeveel bits zitten er in een byte? '));
if (vraag1 == antwoord1)
{
    console.log('Jouw antwoord: ' + vraag1);
    console.log('Goed antwoord!');
}
    else
    {
        console.log('Jouw antwoord: ' + vraag1);
        console.log('Fout antwoord. Het juiste antwoord is: ' + antwoord1);
    }

console.log(' ') // Space between questions

vraag2 = parseFloat(await userInput.question('Hoeveel voet zit er in één mijl? '));
if (vraag2 == antwoord2)
{
    console.log('Jouw antwoord: ' + vraag2);
    console.log('Goed antwoord!');
}
    else
    {
        console.log('Jouw antwoord: ' + vraag2);
        console.log('Fout antwoord. Het juiste antwoord is: ' + antwoord2);
    }

console.log(' ') // Space between questions

vraag3 = await userInput.question('Welke planeet is het dichtst bij de aarde? ');

if (vraag3.toLowerCase() == antwoord3)
{
    console.log('Jouw antwoord: ' + vraag3);
    console.log('Goed antwoord!');
}
    else
    {
        console.log('Jouw antwoord: ' + vraag3);
        console.log('Fout antwoord. Het juiste antwoord is: ' + antwoord3);
    }

console.log(' ') // Space between questions

vraag4 = await userInput.question('Quebec is een provincie uit Canada. Welke taal spreken de inwoners uit dit gebied (exclusief Engels)? ');

if (vraag4.toLowerCase() == antwoord4)
{
    console.log('Jouw antwoord: ' + vraag4);
    console.log('Goed antwoord!');
}
    else
    {
        console.log('Jouw antwoord: ' + vraag4);
        console.log('Fout antwoord. Het juiste antwoord is: ' + antwoord4);
    }

console.log(' ') // Space between questions

vraag5 = parseFloat(await userInput.question('Hoeveel spelers zitten er in een voetball team? '));
if (vraag5 == antwoord5)
{
    console.log('Jouw antwoord: ' + vraag5);
    console.log('Goed antwoord!');
}
    else
    {
        console.log('Jouw antwoord: ' + vraag5);
        console.log('Fout antwoord. Het juiste antwoord is: ' + antwoord5);
    }

console.log(' '); // Space between questions

console.log('Bedankt om mijn quiz uit te proberen!')
process.exit();