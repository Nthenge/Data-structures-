class Node{
    constructor(data){
        this.data = data
        this.next = null;
    }
}

function traverseAndPrint(head){
    let currentNode = head;
    let result = '';

    while(currentNode){
        result += currentNode.data + " -> ";
        currentNode = currentNode.next
    }

    console.log(result + "null")
}

const node1 = new Node(7);
const node2 = new Node(11);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(9);

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

traverseAndPrint(node1)