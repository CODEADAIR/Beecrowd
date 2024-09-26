var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n=3.14159;
let R=parseFloat(lines.shift());
var A =(4.0/3) * n * Math.pow(R,3);
console.log("VOLUME =",A.toFixed(3));
