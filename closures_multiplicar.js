
// Implementar la funcion closureMult que permita generar nuevas funciones que representen
  // las tablas de multiplicación de distintos numeros
  // Ejemplo:
  // - var multByFour = closureMult(4);
  // - multByFour(2) --> 8 (2 * 4)
  // - multByFour(5) --> 20
  // - var multBySix = closureMult(6);
  // - multBySix(4) --> 24

   // Tu código aca:

  var closureMult = function (multiplicar) {//Una funcion
   
    return function (params) {
      return multiplicar * params;
    };
    
  };
  var multByFour = closureMult(4);
  console.log("El resultado es " + multByFour(2)); // 8
  var multBySix = closureMult(6);
  console.log("El resultado es " + multBySix(2)); // 24 */
