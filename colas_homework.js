
class Queue {
    constructor() {
        this.cola = [];
        //this.size = 0;
    }


enqueue(valor){
    this.cola.push(valor);
    //this.cola unshift(valor)
}
dequeue() {
    return this.cola.shift();
}

size(){
    return this.cola.length;
    
}
}