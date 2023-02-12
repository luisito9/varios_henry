
/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de 
    una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso,
   buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback,
    retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un 
  número par.
          current.value === 3 --> true
          isEven(current.value) --> true
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() { //funcion de tipo declarada 
  this.head = null;
  this._length = 0 //podria no estar !
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (data) {//Se usa prototype
  let nodo = new Node(data); // Se crea un nuevo nodo con {value: value, next : null}
  let contador1 = 0;
  let contador2 = 0;

    //caso si no hay nodo en la lista
  if (!this.head) { //Pregunta si no hay nadie en la cabeza de la lista
    this.head = nodo; //pego el nodo creado a la cabeza de la lista
    console.log("Listo se agrego el nodo " + data);
    contador1++;
    
     //caso si hay nodo en la lista
  } else {
    let pepe = this.head; // Me paro en el primer nodo de la lista)"

    while (pepe.next) {//Recorro la lista hasta que no haya mas pepe.next y apunte a null
      pepe = pepe.next;
    }
    // cuando el while termina sigo acá debajo
    pepe.next = nodo;//Pego el nodo en ese nodo que apunta a null, o sea ya no hay mas 'pepe.next'
    contador2++;
    console.log("Listo se agrego el nodo " + data);
  }
};

LinkedList.prototype.remove = function () { //Esto es para eliminar solo el ultimo nodo que esta en la lista
  // pseudo codigo:
  // me fijo si hay head, o si solo tiene 1 nodo
  // recorrer hasta llegar al penultimo nodo
  // a este nodo penultimo le digo que apunte a null, asi pierdo la referencia del ultimo, o sea del ultimo se elimina de la lista

    // Caso una lista vacia
   if (!this.head) {//Si no hay nodo en la cabeza de la lista, o sea esta vacia
    console.log("No hay nada en la lista, esta vacia");
    return false; 
                  }

  // Caso una lista de 1 solo nodo
   if (this.head.next === null) {// Pregunto si el siguiente nodo apunta a null 
      let aux = this.head; // Guardo la referencia del cabezal de la lista en variable 'aux'
      this.head = null; // Ahora paso a null el cabezal de la lista, y asi elimino el nodo
     // this._length-- podria no estar
     console.log("Se elimino el unico nodo " + aux.value);
     return aux.value; // retorno el valor del nodo eliminado
   } 

  // Caso con varios nodos(si llego hasta aqui, es porque la lista no esta vacia y tiene mas de un nodo)
   else {
     let current = this.head; // Asigno el valor del cabezal de lista a "current"

     while (current.next.next !== null) { //Recorro la lista, preguntando si el 2do nodo mas adelante apunta a 'null'
      current = current.next; // Voy recorriendo la lista de 1 en 1 (proximo)
     }
     let aux = current.next.value; // nos guardamos SOLO EL VALOR del nodo que tengo adelante en 'aux', podriamos guardar obj y devolver valor despues
     current.next = null; // hago que el nodo que tengo adelante apunte a null para eliminar el ultimi nodo
     console.log("Se elimino el nodo " + aux);
    return aux.value;
  }
};

LinkedList.prototype.search = function (buscado) {
  if (!this.head) {// No hay nodos en la lista
    console.log("No hay ningun nodo en la lista para buscar..!")
    return null; 
    }

  var callBack; // Declaro la var. callBack

  if (typeof buscado !== "function") { // Si el argumento que recibimos NO ES UNA FUNCION entra aqui
     var callBack = function (data) { // Igualamos la funcion a var. callBack
     return data === buscado;
    }

  } else { // Aca entra Si es una funcion
    callBack = buscado; // Aqui igualo lo que estoy buscando a 'callBack'
    console.log( callBack = buscado);
   }

  let current = this.head; // Con 'current' voy recorrer la lista
  while (current) { // Mientras exista un cabezal 
    if (callBack(current.value)) { // si el argumento es igual al de callBack
      console.log("Si encontre el nodo " + buscado);
      return current.value;// retorno el valor de lo encontrado
    } else {
      current = current.next;// Sino voy al próximo
    }
  }
  console.log("No se encontró el nodo " + buscado );
  return null;
};

LinkedList.prototype.Eliminar = function (eliminado) {//Aqui se elimina un nodo tanto al final de la lista como en el medio
    if (!this.head) {// No hay nodos en la lista
      console.log("No hay ningun nodo en la lista para buscar..!")
      return null; 
      }

    // Caso una lista de 1 solo nodo
    let current = this.head; // Con 'current' voy recorrer la lista
    if (this.head.next === null && eliminado === current.value) {// Pregunto si el siguiente nodo apunta a null 
      let aux = this.head; // Guardo la referencia del cabezal de la lista en variable 'aux'
      this.head = null; // Ahora paso a null el cabezal de la lista, y asi elimino el nodo
      console.log("Se elimino el unico nodo " + aux.value);
       return aux.value; // retorno el valor del nodo eliminado
     } 

    // Caso una lista de muchos nodos
    while (current.next.next !== null) { // Mientras exista un cabezal 
     if (eliminado === current.next.value) { // si el argumento es igual al valor del nodo
        let aux = current.next.value; // Guardo la referencia del cabezal de la lista en variable 'aux'
        this.head = null; // Ahora paso a null el cabezal de la lista, y asi elimino el nodo
        console.log("Se eliminó " + aux);
        return current.value;// retorno el valor de lo encontrado
      }
        
      /*if (eliminado === current.next) { // si el argumento es igual al valor del nodo
        console.log ("Hola");
        let aux = current.value; // Guardo la referencia del cabezal de la lista en variable 'aux'
        this.head = null; // Ahora paso a null el cabezal de la lista, y asi elimino el nodo
        console.log("Si eliminó " + aux);
        return current.value;// retorno el valor de lo encontrado
      }*/


     else {
        current = current.next;// Sino voy al próximo
      }
    }
    console.log("No se encontró el nodo a eliminar " + eliminado );
    return null;
  };
var lista = new LinkedList();
lista.add(2);
lista.add(5);
lista.add(8);
lista.add(3);
lista.add(7);
//console.log(lista);
//lista.Eliminar(8);
//lista.Eliminar(3);
//lista.remove();
//lista.search(5);
//lista.search(1);
//lista.search(8);

//console.log(lista);

//console.log(lista);

 lista.search(function (dato) {
     if (dato % 2 === 0) {
       return true;
     }
     return false;
   })
 ;
 lista.search(function(arg){
   if(arg>3){
     return true
   }
   return false
 })

