var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
var media = (2 * A + B * 3 + C * 5)/10;
console.log("MEDIA =",media.toFixed(1));
