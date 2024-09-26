var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map((x) => parseFloat(x));
var triangulo = (A * C)/2; //A = base // C = altura  ---Base x altura /2
var circulo = 3.14159 * Math.pow(C,2); //  ---area= PI x R2 
var trapezio = (A+B)/2 * C; //A e B= base // C = altura  ---(Base maior + base menor/2) x altura
var quadrado = Math.pow(B,2); // B = base
var retangulo = (A * B);   // area = base x altura
console.log("TRIANGULO:",triangulo.toFixed(3));
console.log("CIRCULO:", circulo.toFixed(3));
console.log("TRAPEZIO:",trapezio.toFixed(3));
console.log("QUADRADO:",quadrado.toFixed(3));
console.log("RETANGULO:",retangulo.toFixed(3));
