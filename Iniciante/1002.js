let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

/*const pi = 3.14159;
let raio = parseFloat(lines.shift());

let area = pi * raio * raio;

console.log(`A=${area.toFixed(4)}`);*/

const n = 3.14159;
let R = parseFloat(lines.shift());

let A = n * Math.pow(R,2);

console.log("A="+A.toFixed(4)); 
