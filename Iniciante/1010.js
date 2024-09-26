var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codigo1, quantidade1, valor1] = lines.shift().trim().split(" ");
quantidade1 = parseInt(quantidade1);
valor1 = parseFloat(valor1);

let [codigo2, quantidade2, valor2] = lines.shift().trim().split(" ");
quantidade2 = parseInt(quantidade2);
valor2 = parseFloat(valor2);
var peca1= quantidade1 * valor1;
var peca2= quantidade2 * valor2;
var total =peca1 + peca2;
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
