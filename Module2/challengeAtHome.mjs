// Module 2 - Beslissingen - Challenge@home - oefening 1
// Initials - Initialen
// == vs ===
console.log('_/_/_/_/_/     _/         _/');
console.log('   _/           _/      _/');
console.log('  _/            _/     _/');
console.log(' _/              _/  _/');
console.log('_/         _/     _/');
console.log('Code geschreven door Tristan Vong');
console.log('----------------------------------');


let var1 = 11;
let var2 = '11';
let x = var1 == var2;
let y = var1 === var2;

console.log(x);
console.log(y);

/*
Explanation (difference between '==' and '===')

x will return TRUE because the == operator will check whether the value that the two variables is the same, even if they are a different datatype. If possible, they will convert datatype (string to number)

y will return FALSE because the === operator will check whether the value is the same AND the datatype, which means that the datatype will never be converted even if it theoretically equals to each other
*/