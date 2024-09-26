var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let idade = parseInt(lines.shift());
ano = 365;
mes = 30;


if (idade > 364) {
    h = (parseInt(idade/ano));
    x = (parseInt((idade - (h * ano))/mes));
    Y = (parseInt(idade - (h*ano + x*mes)));
} if (idade >29 ,idade<364) {
    h=0
    x = (parseInt(idade/mes));
    Y = (parseInt(idade - (h*ano + x*mes)));
}if (idade<30){
h=0
x=0
Y = (parseInt(idade));
}
console.log(`${h} ano(s)\n${x} mes(es)\n${Y} dia(s)`);
