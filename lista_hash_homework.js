/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para 
  almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}). Para este ejercicio, la tabla 
  debe tener 35 buckets(numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets
   por parámetro 
al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada 
  caracter del input 
  (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina
   la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave-valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto 
  en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: Supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con
 el nombre 
'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear 
  la clave)
*/

function HashTable() {
    // this.buckets = [{instructora: 'Ani'}]
    (this.buckets = []), // [{},{},{},{}]
      (this.numBuckets = 35);
  }
  
  HashTable.prototype.hash = function (key) {//función hasheadora
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.numBuckets;
  };
  
  HashTable.prototype.set = function (clave, valor) {
    if (typeof clave !== "string") throw new TypeError("Debe ser un string");
  
    let posicion = this.hash(clave);
  
    // [  [{ key: clave, value: valor }, { key: "henry", value: valor }] ]
    // manejar las colisiones
    this.buckets[posicion] = this.buckets[posicion] || [];
    this.buckets[posicion].unshift({ key: clave, value: valor });
    console.log("Si se añadió en la tabla " + clave + " " + valor);
  };
  
  HashTable.prototype.get = function (clave) {
    var posicion = this.hash(clave);
    for (let i = 0; i < this.buckets[posicion].length; i++) {
      if (this.buckets[posicion][i].key === clave) {
         return this.buckets[posicion][i].value;
      }
    }
    return false;
  };
  HashTable.prototype.hasKey = function (clave) {
    var respuesta = this.get(clave) //"Ani"
    if(respuesta) {
    console.log("Si se encontró en la tabla " + clave);
    return true
    } 
    else 
    console.log("No se encontró en la tabla " + clave);
    return false
  }
  
  const tabla = new HashTable();
  tabla.set("instructora", "Ani");
  console.log(tabla.hasKey("instructora"))
  
  