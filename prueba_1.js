/*Ejercicio 2
  Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe
  por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación 
  por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron
  anteriormente.
  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento;
  hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea 
  el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el 
  mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".
  Ejemplo:
  function square(n){
    return n * n
  }
  const squareCache = cacheFunction(cb)
  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) 
  y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 
*/
function cacheFunction(cb) {
    let cache = {};
    
    return function (arg){
      if(cache.hasOwnProperty(arg)){
         console.log(`si existe el cache y multiplicado por 2 da ${arg*2} `);
         return cache[arg];
        }
      else {
         cache[arg] = cb(arg);
         console.log("No existe el cache " + arg);
         return cache[arg];
        }
      }
    }

    var cualquiera = cacheFunction(function(num){
      return 
    })
    cualquiera(10);
    cualquiera(5);
    cualquiera(10);
   
   