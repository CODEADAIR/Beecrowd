var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map((x) => parseInt(x));
const maior = (A,B)=> (A+B+Math.abs(A-B))/2;
var resultado = maior (A, maior (B,C));
console.log(resultado,"eh o maior");
