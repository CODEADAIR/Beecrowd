var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines.shift().split(" ").map((x) => parseFloat(x));
let [x2, y2] = lines.shift().split(" ").map((x) => parseFloat(x));
var distancia = Math.sqrt ((Math.pow((x2-x1),2))+(Math.pow((y2-y1),2)))
console.log(distancia.toFixed(4))
