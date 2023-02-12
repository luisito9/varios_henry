class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) { //Coloca elementos al final del array
    this.queue.push(element);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();//Quita elementos al principio del array
  }

  peek() {
    return this.queue[0];//muestra el elemento al principio del array
  }

  size() {
    return this.queue.length;//tamaño del array
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
   return this.queue;
  }
}

const queue = new Queue() 
console.log(queue.enqueue('The Rock')); // ['The Rock']
console.log(queue.enqueue('John Cena')); // ['The Rock', 'John Cena']
console.log(queue.enqueue('Stone Cold Steve Austin')); // ['The Rock', 'John Cena', 'Stone Cold Steve Austin']
console.log(queue.dequeue()); // 'The Rock'
console.log(queue.peek()); // 'John Cena'
console.log(queue.size()); //2
console.log(queue.isEmpty()); // false
console.log(queue.print()); // ['John Cena', 'Stone Cold Steve Austin']
  