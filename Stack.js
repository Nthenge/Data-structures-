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