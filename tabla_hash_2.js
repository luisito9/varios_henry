
class TablaHash {
    constructor() {
      this.tabla = new Array(127);
      this.tamano = 0;
    }

    hash(llave) {//función hasheadora
    let hash = 0;
    for (let i = 0; i < llave.length; i++) {
      hash += llave.charCodeAt(i);
      }
    return hash;
    };
 
    set(llave, valor) {
    const indice = this.hash(llave);//El método set() llamará al método _hash() para obtener el valor del índice.
    this.tabla[indice] = [llave, valor];//El par [llave, valor] se asignará a la tabla en el índice especificado.
    console.log("Los datos fueron incluidos en la tabla !");
    this.tamano++;//tamaño se incrementará en uno
    };

    get(llave){
    const indice = this.hash(llave);//llamará al método hash() para recuperar de nuevo el índice de la tabla.
    return (this.tabla[indice]);//Devuelve el valor almacenado en la tabla[índice]
    };

    remover(llave) {//función hasheadora
    const indice = this.hash(llave);//Recuperar el índice correcto mediante el método _hash().
    if (this.tabla[indice] && this.tabla[indice].length>0) {//Comprueba si la tabla[índice] tiene un valor verdadero y la propiedad length es mayor que cero. 
      this.tabla[indice] = undefined;//Asigna el valor undefined al índice correcto
      this.tamano--;//decrementa la propiedad de tamaño en uno si es así.
      console.log("Los datos de " + llave +  " fueron eliminados de la tabla !")
      return true;
    } else {
        console.log("Los datos de " + llave +  " NO fueron encontrados de la tabla !")
      return false;//Si no, simplemente devuelve false
    }
  }
    }

    const hashea = new TablaHash();
    hashea.set("Canada", 300);
    hashea.set("France", 100);
    hashea.set("Spain", 110);

    console.log(hashea.get("Canada")); // [ 'Canada', 300 ]
    console.log(hashea.get("France")); // [ 'France', 100 ]
    console.log(hashea.get("Spain")); // [ 'Spain', 110 ]

    console.log(hashea.remover("Spin")); // true*/