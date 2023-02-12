
// SUMA DE LOS VALORES DE UN ARRAY

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
    let suma = 0;
    array.forEach((numero) => {

      if (Array.isArray(numero)) { // si es array anidado
        suma += countArray(numero);
      }

      else { // si no es array anidado
        suma += numero;
      }
    });
    return suma;
  };
  console.log("La suma del arreglo es : ", countArray([1, [2, [3, 7]], [5, 6], 8])); // count 28

  // Otra solución sin recursividad:
    /*var countArray = function (array) {
    // Tu código aca:
    array = array.flat(Infinity);
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  };
  console.log(countArray([1, [2, [3, 4]], [5, 6], 7])); // 28 */
