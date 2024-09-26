var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift()); 
const B = parseInt(lines.shift()); 
const C = parseFloat(lines.shift());
var salario= B * C;
console.log("NUMBER = "+A);
console.log("SALARY = U$",salario.toFixed(2));
