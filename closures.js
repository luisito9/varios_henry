 //Esto es un ejemplo de Closure...

let a = "Hey !";

function global(apodo) {
    let b = "Que";
     
    function local() {
        let c = " tal ! ";
         console.log( a + b + c + apodo);
    }
    return local; //La funcion global, retorna esta funcion "local", por eso esto es un "Closure"" 
}

let closure = global(" Chamo ");
closure();

// Este es otro ejemplo

const miContador = function() { 
    let contador = 0;

    function incrementar() {
        return (contador++);
    }

    function decrementar(){
        return contador--;
    }

    function valor() {
        return contador;
    }

    return {incrementar, decrementar, valor}
}();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
console.log(miContador.valor());

//Otro ejemplo

function saludar(saludo, apellido){
    let edad = 45;

    return function datos (nombre){
        let ciudad = " Caracas";
        console.log(saludo + nombre + apellido + edad + " años de edad," + " soy de" + ciudad);
    
    }
 }
 var saludarhola = saludar (" Hola ", " Perez ");
 saludarhola("Toni");
 
 var guardarnuevafuncion = saludar (" Adios ");
 guardarnuevafuncion(" Camilo", " Torres "); 

 //****************** Uso del BIND ***********************
 //Bindeo el "this" desde una funcion al objeto que necesito
 // Bind es un metodo de funciones.
/*
 var persona = {   //esto es un Objeto
     nombre: "Alejandro ",
     apellido: "Suarez",
     edad: 34,
 }
 var persona2 = {   //esto es otro objeto
     nombre: "Lola",
     apellido: "Perez",
     edad: 28,
 }

 mostrarNombre = function() { // Esto una función
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
 }

var bindeo1 = mostrarNombre.bind(persona);//El bind retorna una funcion
var bindeo2 = mostrarNombre.bind(persona2);//por eso lo igualo a una variable

console.log(bindeo1());//doble parentesis pues "bindeo1"
console.log(bindeo2());// es una funcion

//****************** Uso del CALL ***********************
 //Call al "this" desde una funcion al objeto que necesito
 // _Igual al Bind pero no lo igualo a una variable.

// console.log(mostrarNombre.call(persona));
 //console.log(mostrarNombre.call(persona2));
    
 //Otro ejemplo con el Call.

/*var person = {   //esto es otro objeto
    nombre: "Antoni",
    apellido: "Guillen ",
    edad: 34,
 }

 var logNombre = function(arg1, arg2) { // Esto una función
    
    return arg1 + " " + this.nombre + " " + this.apellido + arg2;
    
 }
 var resultadoCall = logNombre.call(person, "Hola", ",Cómo estàs ?")//el primer arg es el objeto
 console.log(resultadoCall);//Ojo no lleva doble parentesis

 var resultadoBind = logNombre.bind(person, "Que tal", ",Cómo te va ?")
 console.log(resultadoBind());//Ojo lleva doble parentesis

 //****************** Uso del Apply ***********************

 //Literalmente igual que el "Call" pero los argumentos
 // se los envio a la función en forma de un arreglo.

 var resultadoApply = logNombre.apply(person,["Chao", ", nos vemos ?"])
 console.log(resultadoApply);*/
