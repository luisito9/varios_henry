
//********************* Iteraciones con SET ************************/


var arreglo = [1,2,3,4,5,6,7,8];

var set_arreglo = new Set(arreglo)

set_arreglo.add(9);

console.log(set_arreglo)

console.log(`Hay ${set_arreglo.size} elementos en el objeto`)

console.log(set_arreglo.delete(9));//true si el elemento ha sido removido exitosamente

set_arreglo.add('numero'); //add() añade un nuevo elemento con un valor específico al final del objeto Set.

console.log(set_arreglo);

var resp = (set_arreglo.has(4));// Retorna true si el elemento con el valor especificado existe en el objeto

set_arreglo.delete(19)
console.log(resp)
set_arreglo.clear();//clear() remueve todos los elementos de un objeto Set. No elimina el objeto
console.log(set_arreglo);