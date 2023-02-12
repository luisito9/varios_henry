//slice() Solo copia o extrae un número determinado de elementos a un nuevo arreglo, dejando intacto el arreglo 
//al que se llama. Son2 parámetros: el primero es el índice en el que se inicia la extracción, y el segundo
//es el índice en el que se detiene la extracción(no incluye este ultimo indice).

let clima = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let clima_hoy = clima.slice(1, 3);

console.log(clima_hoy)