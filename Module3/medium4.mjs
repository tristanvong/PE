import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//M4: FizzBuzz
//Maak een applicatie dat alle getallen tussen 1 en 100 afprint. Maar voor getallen deelbaar door
//3 print je "Fizz" af, voor getallen deelbaar door 5 print je "Buzz" af en voor getallen deelbaar
//door 3 en 5 print je "FizzBuzz" af.

for (let i = 1; i <= 100; i++){
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }else if (i % 3 == 0){
        console.log('Fizz');
    }else if (i % 5 == 0){
        console.log('Buzz');
    }
}

process.exit();