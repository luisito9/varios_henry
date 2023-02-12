
let palabras = ['I', 'am', 'feeling', 'really', 'happy', 'hello', 'bye'];

let newArray = palabras.splice(2, 3);//Primer parametro es donde empieza en el arreglo, y el 2do son cuantos elemento va a eliminar !!

console.log(newArray)//aqui muestra un arreglo con lo que se elimino
console.log(palabras)//aqui muestra arreglo de lo que quedo 

/************************************************************ 
puedes usar el tercer parámetro, compuesto por uno o varios elementos,
para agregarlo al arreglo. Esto puede ser increíblemente útil 
Ejemplo:*/

const numbers = [10, 11, 12, 13, 14, 15, 16];
const Index = 3; //indice donde empezará 
const ToDelete = 2; //cantidad de elementos que borrará

new_arreglo = numbers.splice(Index, ToDelete, "A", "Ñ", "Z");//"A, Ñ, Z" son los elementos que se añadiran
console.log(`Estos elementos quedaron en el arreglo: ${numbers}`);
console.log(`Estos estan ahora en nuevo arreglo: ${new_arreglo}`);