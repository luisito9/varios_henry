// Slice().

//slice() devuelve una copia de una parte del array dentro de un nuevo 
//array empezando por inicio hasta fin (fin no incluido).

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 4);
console.log(masculinos);//['Pedro', 'Miguel', Ana];

//_______________________ Otro ejemplo de slice() ______________________

var miHonda = { color: 'red', ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } };
var miCoche = [miHonda, 2, 'Buen estado', 'comprado 1997'];
var nuevoCoche = miCoche.slice(0, 2);
console.log(nuevoCoche);

 //Concat()
 //El método concat crea un nuevo array que consta de los elementos del objeto
 //que lo llama, seguido, en orden de ingreso, por los elementos de cada parámetro
 //(en caso de que el parámetro sea un array), o el parámetro mismo 
 //(en caso de que no sea un array).
  
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

let concatena=(letters.concat(numbers));
console.log(concatena.sort())

 //****************** Otro ejemplo con 3 arrays ************ */

const num1 = [1, 2, 3];
const num2 = [4, 1, 6];
const num3 = [7, 8, 9];

const array = num2.concat(num1, num3);//suma o concatena en solo arreglo, varios arreglos

console.log(array.sort());
