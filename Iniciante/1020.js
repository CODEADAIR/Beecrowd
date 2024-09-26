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


/* Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido. */
