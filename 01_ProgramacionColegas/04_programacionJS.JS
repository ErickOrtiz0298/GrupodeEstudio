/*
var matrizFila = new Array();
*/
//console.log(myMatriz); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
//console.log(myMatriz[0]); //[ 1, 2 ] 

//3 filas y 2 columnas
/*1,2
  3,4
  5,6*/
/*
  console.log(myMatriz[0]);
  console.log(myMatriz[1]);
  console.log(myMatriz[2]);
*/

  // 2 filas y 3 columnas
  //let myMatriz2 = [[1,2,3],[4,5,6]];

  //console.log(myMatriz2[0]);
  //console.log(myMatriz2[1]);
  /* 1 ,2 ,3 
     4 ,5 ,6
   */ 

//Matrices //Filas y columnas 

//3 filas y 2 columnas 
//let myMatriz = [[1,2],[3,4],[5,6]];
/*
for(let i =0; i<myMatriz.length; i ++){
    //console.log(myMatriz[i]);
    for(let j = 0; j < myMatriz[i].length; j++){
        console.log(myMatriz[i][j]);
    }
}*/

/*Realizar un programa que rellene un matriz de 3 x 3 de valores aleatorios y muestre la
traspuesta de la matriz. La matriz traspuesta de una matriz A se denota por B y se obtiene
cambiando sus filas por columnas (o viceversa). */

//let myArray = [[1,2,3],[1,2,3],[1,2,3]];

let myArray = new Array();
//let numeroAleatorio = Math.random();
//console.log(numeroAleatorio);
let contador = 0;

for(let i = 0; i < 3; i++){ // columnas
    myArray[i] = new Array();
    for(let j = 0; j < 3; j++ ){ // filas
        //contador = contador + 1                                // [[0,1,2]] i = 0 j = 0  i = 0 j = 1 i= 0 j =2
        myArray[i][j] = contador++;                              // [[3,4,5]] i = 1 j = 0  i = 1 j = 1 i= 1 j =2
                                                                 // [[6,7,8]] i = 2 j = 0  i = 2 j = 1 i= 2 j =2
                                                                 //let myArray = [[1,2,3],[4,5,6],[7,8,9]];
    }
}
console.log(myArray);
