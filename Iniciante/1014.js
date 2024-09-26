var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseFloat(lines.shift());
const C = A/B;
console.log(C.toFixed(3),"km/l");
