//El método reduce() ejecuta una función reductora sobre cada elemento de un array,
//devolviendo como resultado un único valor.

var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
// total == 6
console.log(total);


//**************************************************************/

[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    return valorAnterior + valorActual;
  });
  
  // Primera llamada
  valorAnterior = 0, valorActual = 1, indice = 1
  
  // Segunda llamada
  valorAnterior = 1, valorActual = 2, indice = 2
  
  // Tercera llamada
  valorAnterior = 3, valorActual = 3, indice = 3
  
  // Cuarta llamada
  valorAnterior = 6, valorActual = 4, indice = 4
  
  // el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]
  
  // Valor Devuelto: 10

  //***************************************************

  if (!Array.prototype.reduce)
{
  Array.prototype.reduce = function(fun /*, inicial*/)
  {
    var longitud = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    // no se devuelve ningún valor si no hay valor inicial y el array está vacío
    if (longitud == 0 && arguments.length == 1)
      throw new TypeError();

    var indice = 0;
    if (arguments.length >= 2)
    {
      var rv = arguments[1];
    }
    else
    {
      do
      {
        if (indice in this)
        {
          rv = this[indice++];
          break;
        }

        // si el array no contiene valores, no existe valor inicial a devolver
        if (++indice >= longitud)
          throw new TypeError();
      }
      while (true);
    }

    for (; indice < longitud; indice++)
    {
      if (indice in this)
        rv = fun.call(null, rv, this[indice], indice, this);
    }

    return rv;
  };
}