/*npm install prompt-sync*/

//const prompt = require('prompt-sync')(); // Decimos que queremos leer informacion de la consola

//let informacionLeida = prompt('Escribe algo: '); //"Escribe algo" --->  guardar la informacion Leida.
//console.log("Has escrito: " + informacionLeida); // Presentar la informacion

//console.log("Hola");


/*Rrealizar un programa que solo permita introducir solo frases o palabras de 8 de largo. Si el 
usuario ingresa una frase o palabra de 8 de largo se deberá de imprimir un mensaje por 
pantalla que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”*/
/*
let palabra = "HolaHola"; 

if(palabra.length == 8){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}*/

/*Escriba un programa que pida una frase o palabra y valide si la primera letra de esa frase 
es una ‘A’. Si la primera letra es una ‘A’, se deberá de imprimir un mensaje por pantalla que 
diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO” */
/*
let palabra2 = "Arabe"; //T = 0, a = 1, c = 2, o = 3, s = 4

if(palabra2.charAt(0) === 'A'){ //===
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}*/

/*
Ejercio 03
Realizar un programa que pida dos números enteros positivos por teclado y muestre por 
pantalla el siguiente menú: 
1-SUMA
2-RESTAR
3-MULTIPLICAR
4-DIVIDIR
5-SALIR
ELIJA UNA OPCION

El usuario deberá elegir una opción y el programa deberá mostrar el resultado por pantalla 
y luego volver al menú. El programa deberá ejecutarse hasta que se elija la opción 5. 
Tener en cuenta que, si el usuario selecciona la opción 5, en vez de salir del programa 
directamente, se debe mostrar el siguiente mensaje de confirmación: ¿Está seguro que 
desea salir del programa (S/N)? Si el usuario selecciona el carácter ‘S’ se sale del 
programa, caso contrario se vuelve a mostrar el menú.*/

const prompt = require('prompt-sync')();

//Declarando nuestra funcion que muestra el MENU
function mostrarMenu(){
    console.log("MENU")
    console.log("1-SUMA ")
    console.log("2-RESTAR ")
    console.log("3-MULTIPLICAR")
    console.log("4-DIVIDIR")
    console.log("5-SALIR")
}

mostrarMenu(); //Aqui se muestra el menu por primera vez

let opcionSeleccionada = parseInt(prompt("ELIJA UNA OPCION: ")); // el usuario selecciona una opcion

let a ;
let b ; 

if(opcionSeleccionada != 5){ //Verificar que el usuario no presionó la opcion 5
    console.log("Ingresa los numeros");
    a = parseInt(prompt("Numero 1: "));
    b = parseInt(prompt("Numero 2: "));
}else{ //Preguntarle al usuario si quiere salir del programa
    let respuesta = prompt("¿Esta seguro que desea salir? S/N");
    if(respuesta == "S"){
        console.log("Usted ha salido");
    } else{
        mostrarMenu();
    }
}

switch(opcionSeleccionada){ //Realizar el calculo que el usuario solicitó
    case 1: 
        console.log(a+b);
        break;
    case 2: 
        console.log(a-b);
        break;
    case 3: 
        console.log(a*b);
        break;
    case 4: 
        console.log(a/b);
        break;
    default: 
        console.log("Opcion no valida");
        mostrarMenu(); //Se muestra el menu otra vez
}



//Strings: lenght, charAt

