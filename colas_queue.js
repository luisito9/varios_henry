
class Nodo {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//this.value: Es el valor que almacena la clase Nodo.
//this.next: Es el enlace al siguiente nodo en la cola (inicialmente nulo, ya que no hay nodos en la cola).

//Se crea una clase que almacene estos nodos y realice algunas acciones en ellos.

class Cola {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

//this.head: Es el enlace al primer nodo en la cola.
//this.tail: Es el enlace al último nodo en la cola.
//this.length: Es la cantidad de nodos en la cola.
//Ahora veremos los métodos necesarios para gestionar las Queues (Colas):

    }
//ponerenCola(value)

//Este método nos sirve para agregar la clase Nodo a la cola final de la clase Cola. 

enqueue(value) {
    const node = new Nodo(value); // Crea el nodo usando la clase Nodo 
 
    if (this.head) { // Si sale el primer nodo 
        this.tail.next = node; // Inserta el nodo creado después de la cola  
        this.tail = node; // Ahora el nodo creado es el último nodo 
    } else { // Si no hay nodos en la cola 
        this.head = node; // El nodo creado lo llamaré 'head'  
        this.tail = node // También el nodo creado es una cola en la cola porque es único 
    }
 
    this.length++; // Aumenta la longitud de la cola en 1 
}

dequeue() {
    const current = this.head; // Guarda el enlace en el 'head' que debemos eliminar
    this.head = this.head.next; // Mueve el enlace 'head' al segundo nodo en la cola 
    this.length--; // Decrementamos la longitud de la cola 
 
    return current.value; // Devuelve el valor del nodo eliminado 
}


//Con este método obtenemos el número de nodos en la cola.

size() {
    return this.length;
}
    
}
NuevaCola = new Cola();
NuevaCola.size(3);
console.log(NuevaCola.size());
