class Stack {
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if (this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
}

const myStack = new Stack();

myStack.push('A');
myStack.push('B');
myStack.push('C');
console.log("Stack: ", myStack.stack)

console.log("Pop: ", myStack.pop())
console.log("Peek: ", myStack.peek())
console.log("isEmpty: ", myStack.isEmpty())
console.log("Size: ", myStack.size())


// Stack implementation using linkedlist

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class SStack {
    constructor(){
        this.head = null;
        this.size =  0;
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
        const poppedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return poppedNode.value;
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

    stackSize(){
        return this.size
    }
}


const mySStack = new SStack()
mySStack.push("F");
mySStack.push("G");
mySStack.push("H");

console.log("Pop:", mySStack.pop());
console.log("Peek:", mySStack.peek());
console.log("isEmpty:", mySStack.isEmpty());
console.log("Size:", mySStack.stackSize());