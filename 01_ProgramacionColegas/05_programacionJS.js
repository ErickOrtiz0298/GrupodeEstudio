/*npm install prompt-sync*/
//const prompt = require('prompt-sync')(); // Decimos que queremos leer informacion de la consola
//let informacionLeida = prompt('Escribe algo: ');


//Declarando variables
let primerDato;
let segundoDato;
let bandera = false; //Permitir terminar el programa


//Declarar una funcion. 
//Mandar a llamar la funcion. //nombre --> verboPalabra
const prompt = require('prompt-sync')(); // permite recibir informacion de la consola

//Declaracion de funciones 
function mostrarMenu(){ //Declarar funcion.
    console.log("***********");
    console.log("Calculadora");
    console.log("***********");
    console.log("1-Sumar");
    console.log("2-Restar");
    console.log("3-Multiplicar");
    console.log("4-Dividir");
    console.log("5-Salir");
}

function sumar(a,b){
    console.log("La suma de los numeros es: " + (a + b));
}

function restar(a,b){
    console.log("La resta de los numeros es: " + (a - b));
}

function multiplicar(a,b){
    console.log("La multiplicacion de los numeros es: " + (a*b));
}

function dividir(a,b){
    console.log("La division de los numeros es: " + (a/b));
}

mostrarMenu(); //Mandar a llamar la funcion.


while(bandera == false){

    let informacionLeida = prompt('Ingresa una opcion: '); //Almacenar la informacion de la consola

switch(informacionLeida){
    case '1':
             primerDato = parseInt(prompt('Ingresa el primer numero: ')); //8
             segundoDato = parseInt(prompt('Ingresa el segundo dato: ')); //7
            sumar(primerDato,segundoDato);
            mostrarMenu();
        break;
    case '2':
             primerDato = parseInt(prompt('Ingresa el primer numero: ')); 
             segundoDato = parseInt(prompt('Ingresa el segundo dato: ')); 
            restar(primerDato,segundoDato);
            mostrarMenu();
        break;
    case '3':
            primerDato = parseInt(prompt('Ingresa el primer numero: '));
            segundoDato = parseInt(prompt('Ingresa el segundo dato: '));
            multiplicar(primerDato,segundoDato);
            mostrarMenu();
        break;
    case '4':
            primerDato = parseInt(prompt('Ingresa el primer numero: '));
            segundoDato = parseInt(prompt('Ingresa el segundo dato: '));
            while (segundoDato == 0) {
                console.log("No puedes dividir entre cero!!!");
                segundoDato = parseInt(prompt('Ingresa el segundo dato: '));
            }
            dividir(primerDato,segundoDato);
            mostrarMenu();
        break;
    case '5':
            let respuesta = prompt("¿De verdad quieres salir del programa?S/N: ");
            if( respuesta.toUpperCase() == 'S'){
                console.log("Gracias por usar el programa!!!!");
                bandera = true;
            }else{
                mostrarMenu();
            }
        break;

    }
    
}


