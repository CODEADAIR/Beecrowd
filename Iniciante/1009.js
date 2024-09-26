var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift()); //Nome
const B = parseFloat(lines.shift()); //salario
const C = parseFloat(lines.shift()); //vendas
var salario= B + (C * 0.15);
console.log("TOTAL = R$",salario.toFixed(2));
