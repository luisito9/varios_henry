

// No cambies los nombres de las funciones.


  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  function quickSort(array) {
  // Caso Base
      if (array.length < 2) return array; // [3] --> ya esta ordenado, lo retorno

  // [5,1,0,2,5] --> para selecionar desde el medio: array[Math.floor(Math.random() * array.length)]
      let pivot = array[0];
      let left = [];
      let right = [];

      for (let i = 1; i < array.length; i++) {
        if (array[i] <= pivot) {
          left.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }
  //         4
  // [1,2,3]
  //    2
  // [1] - [3] --> Caso base/de corte

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log("arreglo ordenado con quick_sort: " + quickSort([9,7,8,1,2,2,9,9,6,5,3,4,0]))


  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  function mergeSort(array) {

      if (array.length === 1) return array; // [3] --> ya esta ordenado

      // [5,6,4,9,8,1,7,3] 
      //
      // --> slice(0,4) // [5,6,4,9] ----- slice(4, ??) // [8,1,7,3]
      // metodo SLICE para recortar el arreglo !== SPLICE --> sPlice es destructivo

      // Divido en 2 el arreglo
      let medio = Math.floor(array.length / 2);
      let left = array.slice(0, medio);
      let right = array.slice(medio);

      return union(mergeSort(left), mergeSort(right))


    }

    // FUNCION QUE UNE NUESTROS ARREGLOS: 
    console.log("arreglo ordenado con merge_sort: " + mergeSort([9,7,8,1,2,2,9,9,6,5,3,4,0]))


    function union(left, right){//union

      // [1] --- [5]
      //     i         
      //          x

      let i = 0
      let x = 0
      let array = []

      while(i < left.length && x < right.length){
        if(left[i] < right[x]){
          array.push(left[i])
          i++
        }else{
          // derecha es mayor
          array.push(right[x])
          x++
        }
      }

      // [1] + [] + [5]
      // [1,5]
      return array.concat(left.slice(i)).concat(right.slice(x)) 

    }

