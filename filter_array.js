
/*El método filter() toma una función callback y llama a esa función para cada elemento
 sobre el que itera dentro del arreglo de destino. La función callback de llamada puede
tomar los siguientes parámetros:

valorActual: Es el elemento del arreglo sobre el que se está iterando actualmente.
indice: Es la posición del índice del valorActual dentro del arreglo.
arreglo: Representa el arreglo de destino(final) junto con todos sus elementos.
El método filter crea un nuevo arreglo y devuelve todos los elementos que pasan la condición*/

/*Cómo filtrar elementos de un arreglo*/

let gente = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "pepe", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

let pequeños = gente.filter((persona) => (persona.edad > 0 && persona.edad < 65))

console.log(pequeños.sort());

/*Cómo filtrar elementos en función de una propiedad concreta*/

let equipo = [
	{
  		nombre: "aaron",
    	posicion: "developer"
 	 },
  	{
  		nombre: "beth",
    	posicion: "ui designer"
  	},
  	{
  		nombre: "cara",
    	posicion: "developer"
  	},
 	{
  		nombre: "daniel",
    	posicion: "content manager"
 	 },
  	{
  		nombre: "ella",
    	posicion: "cto"
  	},
  	{
  		nombre: "fin",
    	posicion: "backend engineer"
  	},
  	{
  		nombre: "george",
    	posicion: "developer"
  },

]

let desarrolladores = equipo.filter((miembro) => (miembro.nombre == "developer"))

console.log(desarrolladores);

