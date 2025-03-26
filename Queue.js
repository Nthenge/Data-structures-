// Queue using an array js
class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue[0]
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length;
    }
}

const myQueue = new Queue();
myQueue.enqueue('A');
myQueue.enqueue('B');
myQueue.enqueue('C');

console.log("Queue:", myQueue.queue);
console.log("Dequeue:", myQueue.dequeue());
console.log("Peek:", myQueue.peek());
console.log("isEmpty:", myQueue.isEmpty());
console.log("Size:", myQueue.size());