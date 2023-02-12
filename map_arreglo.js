
/*Ahora imagina que tienes que sumar cada uno de los elementos del arreglo.
 Podrías considerar usar un bucle for como el siguiente:*/

let arr = [3, 4, 5, 20];
let suma = 0;
for (let i = 0; i < arr.length; i++){
  suma = suma + arr[i];
}
console.log(`Esta es la suma de elementos con ciclo for: ${suma}`)

//Pero en realidad puedes utilizar el método Array.map() para conseguir el
// mismo resultado. He aquí un ejemplo:

 arr_1 = [3, 4, 5, 6];

let multiplicador = arr_1.map((element) => (element * 3));// el "MAP" es idoneo para modificar cada elemento de un arreglo

console.log(`Esta es la multiplicacion por 3 con "map" ${multiplicador}`);

//Cómo utilizar map() sobre un arreglo de objetos
//Puedes utilizar el método map() para iterar sobre el arreglo y unir los valores 
//de firstName y lastName de la siguiente manera:

let users = [
   {firstName : "Susan", lastName: "Steward"},
   {firstName : "Daniel", lastName: "Longbottom"},
   {firstName : "Jacob", lastName: "Black"}
 ];
 
 let userFullnames = users.map(function(element){
     return `${element.firstName} ${element.lastName}`;
 })
 
 console.log(userFullnames);