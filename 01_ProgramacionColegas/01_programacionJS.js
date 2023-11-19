/*Ejercicio01
Escribir un programa que pida dos números enteros por teclado y 
calcule la suma de los dos. 
El programa deberá después mostrar el resultado de la suma*/

//let, const(No se puede modificar), var(No se recomienda)
//TIPOS de variables int, char,double,float,byte,boolean, strings, array[], object. 

let miNumero1 = 9; //Declarando explicitamente
let miNumero2 = 10;//Declarando explicitamente

//Declarada la funcion
function suma(a,b){
    return a+b;
}

//Usar/mandar a llamar la función.
console.log(suma(miNumero1,miNumero2));

console.log(suma(200,100));

/*Ejercicio 01
Escribir un programa que pida una frase y la muestre toda en mayúsculas y 
después toda en minúsculas.
*/ 
//Declarar el string
let frase = "Mi frase en las practicas con Siri";
let frase2 = "Hola";

console.log(frase2.length); //Las funciones están de color morado. Los atributos de color azul.

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

/*Ejercicio 03 
Dada una cantidad de grados centígrados se debe mostrar su equivalente en grados
Fahrenheit. La fórmula correspondiente es: F = 32 + (9 * C / 5).*/

//Declarar una variable que sea de tipo Double (acepta decimales)
let centigrados = 33.5; 
let fahrenheit; 

fahrenheit = 32 + (9*centigrados/5); 
console.log(fahrenheit);

//Condicionales 
/*
Primer estructura


Tercera estructura

if(1){
    accion que debe sucede si se cumple la primera condicion
}else if(2){
    accion que debe sucede si se cumple la primera segunda condicion pero no la primera
}else if(n){
    accion que debe seceder si se cumple la "n-esima" condicion
}else{
    accion que se cumple si todas las demás validaciones no se cumplen.
}

cuarta estructura if anidados.
if(){
    if(){

    }else{

    }
}else{

}

 */

/*Ejercicio 06 Crear un programa que dado un numero 
determine si es par o impar. */

let numero = 18; 

//Operadores "suma = +", "resta = -", "multiplicacion = *", "division = /"
// modulo/residuo = "%", preincremento = "++"a; postincremento = a"++";

/* Modulo 16%3 = 1 ---> "Es el residuo de una division"
A partir de una division 16/3 = 5 y sobra(residuo)"1"*/

//Como saber si un numero es par? R= que al dividirlo entre 2
//el modulo/residuo nos debe dar "0". 

//4/2 = 2 y el residuo es 0 por lo tanto 4 es par; 
//5/2 = 2 y el residuo es 1 por lo tanto 5 es impar;

if(numero%2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

// De un arreglo de 200 numeros imprime todos aquellos que sean par.







