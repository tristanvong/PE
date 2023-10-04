// Module 2 - Beslissingen - medium - oefening 1
// Initials - Initialen
// Songtitels
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

//variables
let keuze;
let keuze1 = 1;
let keuze2 = 2;
let keuze3 = 3;
let keuze4 = 4;

let artiest1 = 'Red Hot Chili Peppers';
let artiest2 = 'AC/DC';
let artiest3 = 'Netsky';
let artiest4 = 'De Strangers';


// Lay-out
console.log('Kies een artiest: ');
console.log(keuze1 + '. ' + artiest1);
console.log(keuze4 + '. ' + artiest2);
console.log(keuze3 + '. ' + artiest3);
console.log(keuze4 + '. ' + artiest4);
console.log('')

keuze = parseFloat(await userInput.question('Kies een artiest uit de lijst (1, 2, 3 of 4): '));
console.log('');


// If statement based on 'keuze'
if (keuze == keuze1)
{
    console.log('Je koos voor "' + artiest1 + '"');
    console.log('Ze zijn de artiest achter de hit: Mijnen blauwe geschelpte');
}
    else if (keuze == keuze2)
    {
        console.log('Je koos voor "' + artiest2 + '"');
        console.log('Ze zijn de artiest achter de hit: Thunderstruck');
    }
    else if (keuze == keuze3)
    {
        console.log('Je koos voor "' + artiest3 + '"');
        console.log('Ze zijn de artiest achter de hit: Thunderstruck');
    }
    else if (keuze == keuze4)
    {
        console.log('Je koos voor "' + artiest4 + '"');
        console.log('Ze zijn de artiest achter de hit: Rio');
    }
    else
    {
        console.log('Kies uit 1, 2, 3 of 4.')
    }

process.exit();