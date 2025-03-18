// singly linked list
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(13);
const node4 = new Node(2);

node1.next = node2
node2.next = node3
node3.next = node4

let currentNode = node1

while(currentNode){
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.next;
}

console.log('null')
// end singly linked list


// start of doubly linked list
class Nod {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const node5 =new Nod(5)
const node6 =new Nod(7)
const node7 =new Nod(14)
const node8 =new Nod(24)

node5.next = node6

node6.prev = node5
node6.next = node7

node7.prev = node6
node7.next = node8

node8.prev = node7

//forward traversal
console.log('Traversing forwad');
let currentnode = node5;
let forwadReuslt = '';
while(currentnode){
    forwadReuslt += currentnode.data + " -> ";
    currentnode = currentnode.next;
} 

console.log(forwadReuslt + "null");

//Backward traversal
console.log("Traversing backward")
currentnode = node8
let backwardresult = '';
while(currentnode){
    backwardresult += currentnode.data + " -> ";
    currentnode = currentnode.prev
}

console.log(backwardresult + "null")
// end of doubly linked list

// circulary linked list, continuation of singly linked list
node4.next = node1
currentNode = node1
let startNode = node1

do{
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.next
}while(currentNode !== startNode)

console.log(" repeat ")