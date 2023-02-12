function List(data) {
    this._length = 0;
    this.head = null;
}
function Node(data) {
    this.data = data;
    this.next = null;
}

 var lista1 = new List();
 var Nodo1 = new Node("Nodo_1");

 console.log(lista1);
 console.log(Nodo1);

 List.prototype.add = function(data){
    var node = new Node(data);
    let current = this.head;

    /*si está vacia*/
    if (!current) {
        this.head = node;
        this._length++;
        console.log (node);
    }

    //si no esta vacia, recorro hasta encontrar el ultimo
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    console.log (node);

 };

 List.prototype.getAll = function(){
    current = this.head //empezamos en la cabeza
    if (!current) {
        console.log("la lista esta vacia");
        return;
    }
    while(current){
        console.log(current.data);
        current = current.next;
    }
    return;

 };

 lista1.add("Nodo_2");
 lista1.add("Nodo_3");
 console.log(lista1);
