class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(this.head){
            newNode.next = this.head;
        }
        this.head = newNode;
        this.size++;
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        const popppedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return popppedNode.value;
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }

        return this.head.value;
    }

    isEmpty(){
        return this.size === 0;
    }

    ssize(){
        return this.size
    }
}

const stack = new Stack()
stack.push("F");
stack.push("G");
stack.push("H");

console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
console.log("isEmpty:", stack.isEmpty());
console.log("Size:", stack.ssize());