//Paso 1 crear la clase. 
class Punto{
    //Definir el constructor
    constructor(X,Y)
    {   //Atributos = parametros
        this._X = X;
        this._Y = Y;
    }
    //Definir un metodo
    mostrarPunto(){
        console.log("El punto es(%s,%s)",this._X,this._Y);
    }

    // Para recuperar el valor de un atributo usamos Get
    get X(){
        return this._X;
    }
    get Y(){
        return this._Y;
    }
    // Para actualizar el valor de un atributo usamos Set
    set X(nuevaX){
        this._X =nuevaX;
    }

    set Y(nuevaY){
        this._Y =nuevaY;
    }

}
//Paso 2 Instanciar(crear) el objeto
                     //(X,Y)
let miPunto = new Punto(3,4);

//Paso 3 Mostrar el objeto
//console.log(miPunto);
miPunto.mostrarPunto();
console.log("El atributo en X es: " + miPunto.X);  //Este accede al valor del atributo encapsulado
//console.log("El atributo en X es: " + miPunto._X); //Este accede directamente al atributo.

miPunto.X = 17; // Acceder al metodo setter
miPunto.Y = 19; //Acceder al metodo setter
console.log("El atributo en X es: " + miPunto.X);
miPunto.mostrarPunto();//17,19

