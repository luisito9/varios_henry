const user = {
    nombre: "Luis Viña Gonzalez",
    sexo: "masculino",
    edad: 51,
    direccion: "El Trigal."
};

//Acceder a los valores

let nom = user.nombre;
let dir = user.direccion;
document.write(nom);
document.write(dir);

//Asignacion de valores
user.esposa = "Damaris";
document.write(user.esposa);
user["vehiculo"] = "Optra";
document.write(user.vehiculo); 

//Desplegar por pantalla y concatenacion
document.writeln("Su nombre es " + (user.nombre) + ",");
document.writeln("Sexo :" + user.sexo);
document.writeln("Su direccion es : " + user.direccion);

//Ejemplo Objeto con funcion
const Objeto_con_Funcion = {
    nombre: "Luis Viña Gonzalez",
    sexo: "masculino",
    edad: 51,
    direccion: "El Trigal.",
    
    saludo: function() {
    document.write("Esto es un ejemplo de una funcion dentro de un Objeto");
    document.writeln(this.sexo + " es su genero.");
   
    }

}
Objeto_con_Funcion.saludo();



