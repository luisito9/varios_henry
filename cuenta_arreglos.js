//EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, 
// al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
        // number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
        // la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16
function countDeep(arr) {
  // Tu código aca:
 
  let suma = 0;
  let cont_arr, cont_num, cont_str, cont_bool, cont_undef = 0;
  var typenum = typeof numero;

    arr.forEach((numero) => {

      if (Array.isArray(numero)) { 
        cont_arr++;
        countDeep(numero);
      }
       
        if (typeof(numero) == "number") { 
          cont_num++;
          console.log("num");
          countDeep(numero);
        }
        if (typeof(numero) == "string") { 
            cont_str++;
            console.log("str");
            countDeep(numero);
          }
          if (typenum == "boolean") { 
            cont_bool++;
            console.log("bool");
            countDeep(numero);
          }
          if (typenum == undefined) { 
            cont_undef++;
            console.log("undef");
            countDeep(numero);
          }
        
      });
          // number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
        // la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16


      return ((((cont_arr - cont_num) * cont_str) / cont_bool) ** cont_undef);

} 
console.log(countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ));

