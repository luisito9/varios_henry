class Cola {
  elementos = [];
  
  add = (elemento) => {
    return this.elementos.push(elemento);
  }
  remove = () => {
    return this.elementos.pop();
  }
  isempty = () => {
    return this.elementos.length === 0;
  }
  empty = () => {
    this.elementos.length = 0;
  }
  size = () => {
    return this.elementos.length;
  }
}

const cola = new Cola();
console.log(cola.add(1));
console.log(cola.add(2));
console.log(cola.add(3));
console.log(cola.size()); //3

/*console.log(cola.remove()); // 1
console.log(cola.remove()); // 2
console.log(cola.remove()); // 3const cola = new Cola();
cola.add(1);
cola.add(2);
cola.add(5);
console.log(cola.size()); //3

console.log(cola.remove()); // 1
console.log(cola.remove()); // 2
console.log(cola.remove()); // 3*/