class Queue {
    constructor() {
        this.cola = ["aqui", "alla", "esto"];
    }
    enqueue(valor) {
        this.cola.push(valor)//El push debes pasarle el argumento para poder ponerlo en el arreglo
    }
    dequeue() {
        return this.cola.shift();//El shift no necesita arg. pues solo lo borra, pero te retorna el valor de lo que quito
    }
    size() {
        return this.cola.length;
    }
};

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(5);
queue.enqueue("Luis");
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.enqueue("otra cosa"));
console.log(queue);
