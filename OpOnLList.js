class Node{
    constructor(data){
        this.data = data
        this.next = null;
    }
}

function traverseAndPrint(head){
    if(!head) return null;

    let currentNode = head;
    let minValue = head.data
    let result = '';

    while(currentNode){
        if(currentNode.data < minValue){
            minValue = currentNode.data;
        }
        result += currentNode.data + " -> ";
        currentNode = currentNode.next
    }
    console.log(result + "null; Minimun value is " + minValue)
    return minValue
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