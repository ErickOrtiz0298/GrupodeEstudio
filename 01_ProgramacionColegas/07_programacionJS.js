//HERENCIA
//Electrodomestico
//Lavadora es hija de Electrodomestico
//Microondas es hija de Electrodomestico

class Electrodomestico{
    constructor(encendido, tension){
        this._Encendido = encendido;
        this._Tension = tension; 
    }
    Encender(){
        this._Encendido = true; 
    }
    Apagar(){
        this._Encendido = false;
    }
    EstaEncendido(){
        return this._Encendido;
    }
    get Tension(){return this._Tension}
    set Tension(tension){this._Tension = tension}
}

/*
let miElectrodmestico = new Electrodomestico(10,10);
console.log(miElectrodmestico);
console.log(miElectrodmestico.Apagar);
*/
//¿Como heredamos las propiedades y metodos de una clase padre a una clase hija? 
//Herencia ----> "extends"


//Clase Hija Lavadora
class Lavadora extends Electrodomestico{
    constructor(rpm, kilos, encendido, tension){
        super(encendido,tension); // mandamos a llamar al constructor de la clase padre
        this._RPM = rpm; 
        this._Kilos = kilos; 
    }
    get RPM(){return this._RPM;} //Sirve para mostrar atributos
    set RPM(rpm){this._RPM = rpm;} //Sirve para asignar/cambiar valores de atributos
    get Kilos(){return this.Kilos;}
    set Kilos(kilos){this.Kilos = kilos;}

    Mostrar(){
        console.log("--Lavadora--");
        console.log("RPM: ", this._RPM);
        console.log("Kilos: ", this._Kilos);
        console.log("Tension: ", this._Tension);
        if(this.EstaEncendido()){
            console.log("La lavadora está encendida"); 
        }else{
            console.log("La lavadora está apagada");
        }
        console.log("-------------------------")
    }

}

//Clase Hija Microondas 
class Microondas extends Electrodomestico{
    constructor(potenciamaxima, grill, encendido, tension){
        super(encendido,tension);
        this._PotenciaMaxima = potenciamaxima; //atributo = valor del atributo pasado por el constructor
        this._Grill = grill;
    }

    get PotenciaMaxima(){
        return this._PotenciaMaxima;
    }
    set PotenciaMaxima(potenciamaxima){
        this._PotenciaMaxima = potenciamaxima;
    }

    get Grill(){
        return this._Grill;
    }

    set Grill(grill){
        this._Grill = grill;
    }

    Mostrar(){
        console.log("---Microondas--"); 
        console.log("Potencia máxima", this._PotenciaMaxima);
        console.log("Tiene grill: ", this._Grill); 
        console.log("Tensión: ", this._Tension); 
        if(this.EstaEncendido()){
            console.log("El microondas está encendido!");
        }else{
            console.log("El microondas está apagado");
        }
        console.log("-----------------");
    }

}

//Instanciando el objeto lavadora
//let miLavadora = new Lavadora(10, 14, true, 18);
//let miLavadora2 = new Lavadora(1200, 7, false, 125);

//miLavadora.Mostrar();
//miLavadora2.Mostrar();

let m = new Microondas(800, true, false, 220);
m.Mostrar();


