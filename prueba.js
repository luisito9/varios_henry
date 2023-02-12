
class Node {//Clase con su constructor
  constructor(data) {
        this.length = 0;
        this.data = data;
        this.left = null;
        this.right = null;
  }8
}
let contador = 0;
let contador1 = 0;

class BinarySearchTree {//Clase con su constructor
  constructor(data) {
    this.root = null;
    this.data = data;
    this.left = null;
    this.right = null;
  }
  

  insert(data) {
    if (data < this.data && this.left !== null) { //Si el nuevo nodo(data) es menor que el nodo actual y ese actual tiene un nodo en la izq. se posiciona e
      this.left.insert(data);           // invoca de nuevo al metodo insert().
    } else if (data < this.data) {      //Luego si el nuevo nodo(data) es menor que el nodo actual, crea un new nodo y lo pone a su lado izq.
      this.left = new BinarySearchTree(data);
      console.log("Se creo un nuevo nodo izq " + data);
    }

    if (data > this.data && this.right !== null) {//Si el nuevo nodo(data) es mayor que el nodo actual y ese actual tiene un nodo en la der. se posiciona 
      this.right.insert(data);           // e invoca de nuevo al metodo insert().
    } else if (data > this.data) {       //Luego si el nuevo nodo(data) es mayor que el nodo actual, crea un new nodo y lo pone a su lado der.
      this.right = new BinarySearchTree(data);
      console.log("Se creo un nuevo nodo der. " + data);
    }
  }

  contains(data) {
    if (this.data === data) {
      console.log("Justo aqui se consiguio el valor " + data);
      return this;
    }

    if (data < this.data && this.left !== null) {//Si el nuevo nodo(data) es menor que el nodo actual y ese actual tiene un nodo en la izq. se posiciona
      return this.left.contains(data);// e invoca de nuevo al metodo insert().
    } else if (data > this.data && this.right !== null) {//Luego si el nuevo nodo(data) es mayor que el nodo actual, crea un new nodo y lo pone a su lado der.
      return this.right.contains(data);
    } else {
      console.log("No se encontro el valor " + data);
      return null;
    }
  }

  depthFirstForEach(data) {
 
  }

  size(data)  {
    
  }
  
  breadthFirstForEach() {
    console.log("Aqui");
    var node = this.root,
    data = [],
    queue = [];
    queue.push(node);

  while(queue.length) {
   node = queue.shift()
   data.push(node.data);
   if(node.left) queue.push(node.left);
   if(node.right) queue.push(node.right);
}
console.log(` ->   BFS -> BREADTH FIRST SEARCH List is -> ${data}`);
return data;
  }
  
}

let arbol = new BinarySearchTree(6);
arbol.insert(3);
arbol.insert(9);
arbol.insert(5);
arbol.insert(10);
arbol.insert(2);
arbol.insert(7);
arbol.insert(4);
arbol.contains(1);
arbol.size();
//arbol.breadthFirstForEach();
//console.log('arbol:\n',arbol);


/*class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;

  }
}
class BinarySearchTree {
  constructor(value){
    this.value = value;
      this.root = null;
    
  }


  // Insert a New value in tree 
  insert(value) {
      var newNode = new Node(value);
      if(this.root === null) {
          this.root = newNode;
          return this;
      } else {
          var current = this.root;
          while(true) {
              if(value < current.value) {
                  if(current.left === null) {
                      current.left = newNode;
                      console.log(` ->   ${current.value}  left value -> ${value} added `)
                      return this;    
                  } else {
                      current = current.left;
                  }
              } else if(value > current.value) {
                  if (current.right === null) {
                      current.right = newNode;
                     console.log(` ->   ${current.value}  right value -> ${value} added `)
                      return this;
                  } else {
                      current = current.right;
                  }
              } 
              if(current.value == value) {
                  console.log(` ->  ${value} is  Duplicate value Please Enter Unique Value `)
                  return;
              }
          }
      }
  }

// find The Value in tree
  find(value) {
         if(this.root === null) return false;
         var current = this.root,
             found = false;
         while(current && !found) {
             if(value < current.value) {
                 current = current.left;
             } else if (value > current.value) {
                 current = current.right;
             } else {
                 console.log(` ->   Founded Successfully -> ${value}`);
                 return current;
             }
         }
         if(!found) console.log(` ->   Not Founded -> ${value}`);
         return current;
  }

// Same as no find
  contains(value) {
     if(this.root === null) return false;
     var current = this.root,
         found = false;
     while(current && !found) {
         if(value < current.value) {
             current = current.left;
         } else if (value > current.value) {
             current = current.right;
         } else {
             console.log(` ->   Founded Successfully -> ${value}`);
             return current;
         }
     }
     if(!found) console.log(` ->   Not Founded -> ${value}`);
     return current;
 }


  /* 

                      Example For BREADTH FIRST SEARCH List

                first ->        __10__
                              /        \  
               second ->     6         15
                            / \         \
               third ->    3   8        20

  
 BFS() {
     var node = this.root,
        data = [],
       queue = [];
     queue.push(node);

     while(queue.length) {
        node = queue.shift()
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
     }
     console.log(` ->   BFS -> BREADTH FIRST SEARCH List is -> ${data}`);
     return data;
 }


  /* 

                      Example For DEPTH FIRST SEARCH List in PreOrder

               Third ->         __10__
                              /        \  
               Second ->     6         15
                            / \         \
              First ->     3   8        20

  
 DSFPreOrder(){
     var data = [];
     function traverse(node) {
         data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
     }
     traverse(this.root);
     console.log(` ->   DSF -> Pre Order List is -> ${data}`)
     return data
 }

  /* 

                      Example For DEPTH FIRST SEARCH List in PostOrder

                    sixth ->    __10__
                              /        \  
                   Third ->  6         15 <- Fiveth
                            / \         \
                  First -> 3   8 <-     20 <- Fourth
                                  |
                          Second _|

  
  DSFPostOrder() {
      var data = [];
      function traverse(node) {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
      }
      traverse(this.root);
     console.log(` ->   DSF -> Post Order List is -> ${data}`)
      return data;
  }

  DSFinOrder() {
      var data = [];
      function traverse(node) {
        node.left && traverse(node.left);
        data.push(node.value);
        node.right && traverse(node.right);
      }
      traverse(this.root);
     console.log(` ->   DSF -> In Order List is -> ${data}`)
      return data;
  }
}

var tree = new BinarySearchTree(8);
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree)
tree.BFS()
tree.DSFPreOrder()
tree.DSFPostOrder()
tree.DSFinOrder()*/