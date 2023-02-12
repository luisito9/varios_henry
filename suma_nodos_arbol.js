
// Implementar el método sum dentro del prototype de BinarySearchTree
  // que debe retornar la suma total de los valores dentro de cada nodo del arbol
  
    // Tu código aca:
    // Declarar una variable contadora. Le asignas el valor del root inicial.
    // Recorrer el árbol partiendo de la raíz, sumar el valor de cada uno al contador
    // Si existe otro nodo a la derecha tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.
    // Si existe otro nodo a la izquierda tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.


    function BinarySearchTree(valor) {//Esta es al funcion Arbol
        this.value = valor;
        this.left = null;
        this.right = null;
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


    BinarySearchTree.prototype.sum = function () {
     var total = this.value;
        if (this.right) total += this.right.sum();
        if (this.left) total += this.left.sum(); // de manera recursivo ingreso a cada uno de los árboles y voy sumando al contador
                                                // el valor de cada árbol
        return total;
    };

    Node.prototype.findMin = function(){
        if(this.left && this.right){
            var l = this.left.findMin();
            var r = this.right.findMin();
            if(l.data < r.data) return l;
            else return r
        }else{
            if(this.left){
                minL = this.left.findMin();
                return minL.data  <= this.data ?  minL: this;
            }
            if(this.right){
                minR = this.right.findMin();
                return minR.data  <= this.data ?  minR: this;
            }
        }
        if(!this.left && !this.right) return this;
    }
    
    Node.prototype.findMax = function(){
        if(this.left && this.right){
            var l = this.left.findMax();
            var r = this.right.findMax();
            if(l.data > r.data) return l;
            else return r
        }else{
            if(this.left){
                let maxL = this.left.findMax();
                return maxL.data  > this.data ?  maxL: this;
                
            }
            if(this.right){
                let maxR = this.right.findMax()
                return maxR.data > this.data ? maxR: this
            }
        }
        if(!this.left && !this.right) return this;
    }
    
    const arbolito = new BinarySearchTree(20);
    arbolito.insert(25);
    arbolito.insert(15);
    arbolito.insert(12);
    arbolito.insert(10);
    console.log(" El arbol suma " + arbolito.sum() + " en sus nodos. ");