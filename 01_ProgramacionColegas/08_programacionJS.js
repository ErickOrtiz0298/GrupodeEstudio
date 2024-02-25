//DATE
//AÑO, MES, DÍA, HORA, MINUTOS, SEGUNDOS
//AÑO, MES, DIA, HORA, MINUTOS
/*
let fechaactual = new Date();
console.log(fechaactual);
let fechaPasada = new Date(2016,1,21,20,30,0,0);
console.log(fechaPasada);

console.log(fechaactual.toString());
*/
/*
let fecha = new Date();
console.log("Fecha: ", fecha); 
console.log("Fecha a cadena: ", fecha.toString()); 
console.log("Año: ", fecha.getFullYear());
console.log("Date: ", fecha.getDate());
*/

function actReloj(){
    var hhmmss = new Date();
    var horas = hhmmss.getHours(); 
    var minutos = hhmmss.getMinutes();
    var segundos = hhmmss.getSeconds();
    //Formatear a dos digitos 6 -> 06
    horas = (horas <= 9)?("0"+horas):horas;
    minutos = (minutos <= 9)?("0"+minutos):minutos;
    segundos = (segundos <= 9)?("0"+segundos):segundos;

    //Construir la cenda de texto HTML con la hora y el tipo de letra que definamos. 
    var reloj = "<font size='20' face='Arial'><b>"+horas+":"+minutos+":"+segundos+"</b></font>"; 
    //console.log(reloj);
    document.body.innerHTML = reloj;
    setTimeout("actReloj()",1000); //llamando a la función cada 1 seg o 1000 milisegundos
}




