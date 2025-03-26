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


// Queues using linkedlist
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class QQueue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(element){
        const newNode = new Node(element);
        if(!this.rear){
            this.front = this.rear = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode;
        }
        this.length++
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        const temp = this.front;
        this.front = this.front.next;
        this.length--;
        if(!this.front){
            this.rear = null;
        }
        return temp.data;
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.front.data;
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

    printQueue() {
        let temp = this.front;
        let result = "";
        while (temp) {
            result += temp.data + " ";
            temp = temp.next;
        }
        console.log(result.trim())
    }
}

const myQQueue = new QQueue();
myQQueue.enqueue('S');
myQQueue.enqueue('T');
myQQueue.enqueue('U');
myQQueue.enqueue('V');

process.stdout.write("Queue: ");
myQQueue.printQueue();

console.log("Dequeue:", myQQueue.dequeue());
console.log("Peek:", myQQueue.peek());
console.log("isEmpty:", myQQueue.isEmpty());
console.log("Size:", myQQueue.size());