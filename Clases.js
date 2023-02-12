
//Ejemplo de Clases y creacion de Objetos en Javascript
 
 class Gato {
      constructor(nombre) {
            this.nombre = nombre;
            this.maullar = function (apellido) {
                  this.apellido = apellido;
                  return " Mi nombre es " + this.nombre + this.apellido + "...Miauu";
            };
      }
}
  let Luis = new Gato("Luis");//estos son objetos
  const Damari = new Gato("Damari");
  let pepe = new Gato("Pepe");

  document.write(Luis.maullar("viña"));
  document.write(Damari.maullar("Viña"));
  document.write(pepe.maullar("Viña"));


  //Ejemplo de Clases y creacion de Objetos con "Prototype" en Javascript

  class Usuario {
      constructor(nombre, github) {
            this.nombre = nombre;
            this.github = github;

      }
      introduccion(edad) {
            return "Mi nombre es " + this.nombre + ", mi usuario de Github es " + this.github + ", y mi edad es : " + edad + " años. "

      }
}


  let juan = new Usuario("Juan", "Juan_Perez");
  let Antonio = new Usuario("Antonio", "Antoni_Lopez ");

  document.write(juan.introduccion(34));
  document.write(Antonio.introduccion(23));


  function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    let nom = nombre[0].toUpperCase() + nombre.slice(1);
    document.write (nom);
    return nom;
  }
  mayuscula("mario");

