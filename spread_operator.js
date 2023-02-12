//**** Introduce un arreglo a una funcion******

function sumas(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sumas(...numbers));
  // expected output: 6
  
  
  //**** Introduce un arreglo como parametro de una funcion *****
  let suma = 0;
  function myFunction(v, w, x, y, z) {
    console.log(suma=(v+w+x+y+z));
    return
   }
  var args = [0, 1];
  myFunction(-1, ...args, 4, 3);

  //*********** Concatena 2 arreglos *******

  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];
  // Append all items from arr2 onto arr1
  arr3 = [...arr1,...arr2]
  console.log(arr3)










