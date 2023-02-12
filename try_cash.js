
/*Esto nos da tres formas posibles para la sentencia try:

try...catch
try...finally
try...catch...finally*/


/*Un bloque catch contiene sentencias que especifican que hacer si una excepción
 es lanzada en el bloque try. Si cualquier sentencia dentro del bloque try 
 (o en una funcion llamada desde dentro del bloque try) lanza una excepción, 
 el control cambia inmediatamente al bloque catch . Si no se lanza ninguna excepcion 
 en el bloque try, el bloque catch se omite.

La bloque finally se ejecuta despues del bloque try y el/los bloque(s) catch hayan
 finalizado su ejecución. Éste bloque siempre se ejecuta, independientemente de si una
  excepción fue lanzada o capturada.*/


  setTimeout(function() {
    try {
      noSuchVariable; // try...catch maneja el error!
    } catch {
      console.log( "El error se detecta aquí despues de 1 segundo !" );
    }
  }, 1000);

  //********************************* */
  let json = "{ json malo }";

  try {

  let user = JSON.parse(json); // <-- cuando ocurre un error ...
  console.log( user.name ); // no funciona

  } catch (err) {
  // ...la ejecución salta aquí
  let json = "{ json malo }";

        try {
        let user = JSON.parse(json); // <-- cuando ocurre un error ...
        console.log( user.name ); // no funciona
        } 

        catch (err) {
        console.log( err + ".  Nuestras disculpas, los datos tienen errores" );
        console.log( err.name + ". Soy err.name ");
        console.log( err.message + ". Soy err.mesagge");
        }
    }

/* JavaScript tiene muchos constructores integrados para manejar errores estándar: Error, SyntaxError, ReferenceError, 
// TypeError y otros. Podemos usarlos para crear objetos de error también.

Su sintaxis es:
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);*/


let json1 = '{ "age": 30 }'; // dato incompleto

try {
  let user = JSON.parse(json1); // <-- sin errores
  if (json1) {
   console.log("dato incompleto: sin nombre"); // (*)
  }

} catch (err) {
    console.log( "Error en JSON aqui: " ); // Error en JSON: dato incompleto: sin nombre
}

