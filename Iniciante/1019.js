var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let minutos = parseInt(lines.shift());
hora = 3600;
minuto = 60;


valor = minutos/minuto;
if (minutos > 3599) {
    h = (parseInt(minutos/hora));
    x = (parseInt((minutos - (h * hora))/minuto));
    Y = (parseInt(minutos - (h*hora + x*minuto)));
} if (minutos >59 ,minutos<3600) {
    h=0
    x = (parseInt(minutos/minuto));
    Y = (parseInt(minutos - (h*hora + x*minuto)));
}if (minutos<60){
h=0
x=0
Y = (parseInt(minutos));
}


console.log(h+":"+x+":"+Y);
