var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

var media = (3.5*A + 7.5*B)/11;

console.log("MEDIA =",media.toFixed(5));
