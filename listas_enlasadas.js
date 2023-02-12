function Node(data) {
    this.data = data;
    this.next = null;
  }

  function List() {
    this._length = 0;
    this.head = null;
  }
  let contador = 0;
  
  List.prototype.add = function (data) {
    var node = new Node(data);// Se crea el nodo
    var current = this.head;// current es la cabeza de la lista
    // Si está vacia
    if (!current) {    //no hay nodos en la lista
      this.head = node;// pega el nodo a la cabeza de la lista
      this._length++;  // incrementa en 1 el tamaño de la lista
      return node;     //retorna el nodo
    }
    // Si no esta vacia, recorro hasta encontrar el último
    while (current.next) {   //hay un cabezal siguiente ocupado con otro nodo
      current = current.next;//se va recorriendo la lista
    }
    current.next = node;//cuando encuentra un cabezal sin nodo, pega el nodo
    this._length++;     // incrementa en 1 el tamaño de la lista
    return node;
  };
  
  List.prototype.getAll = function () {
    current = this.head; //empezamos en la cabeza
    if (!current) {//si no hay nodos en cabezal de la lista
      console.log("La lista esta vacia!");
      return;
    }
    while (current) {//si hay nodo en la cabeza de la lista
      console.log(current.data);//despliego la data 
      current = current.next;//recorro la lista
      contador++;
    }
    console.log("La lista tiene " + contador + " nodos")
    return;
  };
  
  var listita = new List();
  console.log(listita);
  
  listita.add(1);
  listita.add("hola");
  listita.add("Chao");
  listita.add(true);
  
  listita.getAll();