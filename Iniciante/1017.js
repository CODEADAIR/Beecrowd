var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let horasViagem = parseInt(lines.shift());
let velocidade = parseInt(lines.shift());
const C = (horasViagem*velocidade)/12;
console.log(C.toFixed(3));
