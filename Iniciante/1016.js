var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());
var calculo = distancia/0.5;
console.log(`${calculo} minutos`);
