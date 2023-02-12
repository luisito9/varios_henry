"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro
   ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
​
  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
​
  pre order
​
  raiz
  izq
  der
​
  in order
​
  izq
  raiz
  der
​
  post order
  
  izq
  der
  raiz
*/

function BinarySearchTree(valor) {//Esta es al funcion Arbol
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  // ir sumando 1 por cada raiz
  // y si tiene hijos, tengo que sumarle su tamaño
  // (izquierda y derecha)
  // caso base, es cuando no tengamos hijos (nodo hoja)

  if (!this.left && !this.right) {
    return 1;
  } else if (this.left && this.right) {
    return 1 + this.left.size() + this.right.size();
  } else if (this.left) {
    return 1 + this.left.size();
  } else if (this.right && !this.left) {
    return 1 + this.right.size();
  }

  // if(!this.left && !this.right) return 1
  // else if(this.left && this.right) return 1 + this.left.size() + this.right.size()
  // else if(this.left) return 1 + this.left.size()
  // else if(this.right)return 1 + this.right.size()
}

BinarySearchTree.prototype.insert = function (value) {
  let hoja = new BinarySearchTree(value); // raiz e hijos en null

  // vamos a comparar valores con la raiz
  if (value > this.value) {
    // derecha
    // si es mayor entro aca (derecha)
    if (!this.right) {
      this.right = hoja;
    } else {
      this.right.insert(value);
    }
  } else {
    // izquierda
    if (!this.left) {
      this.left = hoja;
    } else {
      this.left.insert(value);
    }
  }

  // una vez que sepamos hacia donde ir (izq o der)
  // vamos a preguntar si hay algo, porque si no hay nada
  // me voy a quedar ahi. Y si hay algo voy a tratar de insertar
  // en el arbol que esta como hijo
};

BinarySearchTree.prototype.contains = function (value) {
  // sos el value que estoy buscando?
  // es menor o mayor?
  // voy hacia izq/der SI ES QUE EXISTE UN CAMINO (si tiene hijos)
  if (value === this.value) {
    // si lo que busco es igual a la raiz
    return true;
  }

  if (value > this.value) {
    // si es mayor voy a la derecha
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    // si es menor voy a la izquierda
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (callBack, order) { 
  if (order === "pre-order") {
    callBack(this.value);
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }

  } else if (order === "post-order") {
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
    callBack(this.value);
  } else {
    // in-order
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    callBack(this.value);

    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (callBack, array) {//Lee el arbol y lo despliega por niveles
  if (array == null) {//si no hay Arreglo
    var array = []; //Lo crea
  }

  if (this.left) {
    array.push(this.left);
  }

  if (this.right) {
    array.push(this.right);
  }

  callBack(this.value);

  array.length > 0 && array.shift().breadthFirstForEach(callBack, array);
 // if(array.length > 0) array.shift().breadthFirstForEach(callBack, array)
};

const arbolito = new BinarySearchTree(20);
arbolito.insert(25);
arbolito.insert(15);
arbolito.insert(12);
arbolito.insert(5);
arbolito.insert(17);
arbolito.insert(21);
/*arbolito.insert(28);
arbolito.insert(0);
arbolito.insert(14);
arbolito.insert(50);
arbolito.insert(1);
arbolito.insert(45);
arbolito.insert(13);
arbolito.insert(12);
arbolito.insert(11);*/
console.log("El arbol tiene " + arbolito.size() + " nodos");

/*arbolito.depthFirstForEach(function (val) {// "pre-order", "in-order", "post-order"
  console.log(vale);
}, "post-order");*/

/*arbolito.breadthFirstForEach(function (val) {  //Lee el arbol y lo despliega por niveles
  console.log(val); // Aqui se puede hacer cualquier operacion con los valores del arbol
});*/
