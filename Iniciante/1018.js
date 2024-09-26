var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
cem = 100;
cinquenta = 50;
vinte = 20;
dez = 10;
cinco = 5;
dois = 2;
um = 1;


if (valor > 99) {
    v = (parseInt(valor/cem));
    w = (parseInt((valor - (v * cem))/cinquenta));
    x = (parseInt((valor - (v * cem) - (w*cinquenta))/20));
    y = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte))/10));
    z = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10)/5));
    zz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5)/2));
    zzz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5 - zz*2)/1));
   
}if (valor > 49, valor <100) {
    v = 0;
    w = (parseInt((valor - (v * cem))/cinquenta));
    x = (parseInt((valor - (v * cem) - (w*cinquenta))/20));
    y = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte))/10));
    z = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10)/5));
    zz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5)/2));
    zzz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5 - zz*2)/1));
}if (valor > 19, valor <50) {
    v = 0;
    w = 0;
    x = (parseInt((valor - (v * cem) - (w*cinquenta))/20));
    y = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte))/10));
    z = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10)/5));
    zz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5)/2));
    zzz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5 - zz*2)/1));
}if (valor > 9, valor <20) {
    v = 0;
    w = 0;
    x = 0;
    y = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte))/10));
    z = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10)/5));
    zz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5)/2));
    zzz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5 - zz*2)/1));
}if (valor > 4, valor <10) {
    v = 0;
    w = 0;
    x = 0;
    y = 0;
    z = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10)/5));
    zz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5)/2));
    zzz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5 - zz*2)/1));
}if (valor > 1, valor <5) {
    v = 0;
    w = 0;
    x = 0;
    y = 0;
    z = 0;
    zz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5)/2));
    zzz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5 - zz*2)/1));
}if (valor <2) {
    v = 0;
    w = 0;
    x = 0;
    y = 0;
    z = 0;
    zz = 0;
    zzz = (parseInt((valor - (v * cem) - (w*cinquenta) - (x*vinte) - y*10 - z*5 - zz*2)/1));
}
console.log(`${valor}`);
console.log(`${v} nota(s) de R$ 100,00`);
console.log(`${w} nota(s) de R$ 50,00`);
console.log(`${x} nota(s) de R$ 20,00`);
console.log(`${y} nota(s) de R$ 10,00`);
console.log(`${z} nota(s) de R$ 5,00`);
console.log(`${zz} nota(s) de R$ 2,00`);
console.log(`${zzz} nota(s) de R$ 1,00`);
