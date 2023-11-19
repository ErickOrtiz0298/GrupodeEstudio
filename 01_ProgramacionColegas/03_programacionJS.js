//node --version
//node 03_programacionJS
//npm install prompt-sync

/* Recuperar informacion del usuario*/
const prompt = require('prompt-sync')(); //Esta es necesaria
//let informacionLeida = prompt('Escribe algo: '); //Aqui es donde guardaremos la info
//console.log(informacionLeida); //presentamos la informacion

//let tamanioVector = prompt('Ingrese el tamanio del vector: '); 

//Para volver un string en un numerico usamos "parseInt, "parseDouble", etc. 
//console.log(typeof(parseInt(tamanioVector))); //
/*
let miVector = new Array(3); //Declarar un vector de tamanio 3 [0][1][2]

miVector[0] = 123; 
miVector[1] = 200; 
miVector[2] = 105;

console.log(miVector[0]);*/

/*Realizar un algoritmo que rellene un vector con los 100 primeros 
números enteros y los  muestre por pantalla en orden descendente */
//paso 1 pedirle al usuario el tamanio del vector
let tamanioVector = prompt('Ingrese el tamanio del vector: ');
let miVector = new Array(parseInt(tamanioVector));

function ejecutarPrograma(miVector){
    llenarArreglo(miVector);
    mostrarArreglo(miVector);
}

//Declaracion
function llenarArreglo(miVector){
    //paso 2 recorrer las posiciones de un arreglo. 

    // ====== recorremos las posiciones con un ciclo o un bucle 
    //iterador; // el limite      //paso
    for(let i = 0; i < miVector.length; i++){
        //paso 3 llenar cada posicion del arreglo 
        miVector[i] = i + 1; // i = 0; miVector[0] = 1; miVector[1] = 2;..... miVector[99] = 100;
    }

}

function mostrarArreglo(miVector){
            //console.log("El tamanio del vector es: " + miVector[0]+ ", " + miVector[1]);
             // i = 99 //el valor al que queremos llegar es 0
             for(let i = 0; i < miVector.length ; i++){
                //paso 4 imprimir los numeros de manera descendente
                                        // 100 - 1 = 99      - 0
                console.log(miVector[((miVector.length - 1)) - i]); //podemos recorrer el arreglo "descendentemente"
            }
}


//paso 5 ejecutar el programa
ejecutarPrograma(miVector);









