// function preOrder(root){
//     if(!root) return null;
//     console.log(root.data + ", ");
//     preOrder(root.left);
//     preOrder(root.right);
// }

// class TreeNode{
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);


// preOrder(root);

//Building a Binaru tree using an array

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }   
}

function buildTree(arr) {
    if (!arr.length) return null;

    const nodes = arr.map(val => val !== null ? new TreeNode(val) : null);
    let i = 0;
    for (let j = 1; j < arr.length; i++) {
        if (nodes[i]) {
            if (j < arr.length) nodes[i].left = nodes[j++];
            if (j < arr.length) nodes[i].right = nodes[j++];
        }
    }
    return nodes[0];
}

function preOrder(root){
    if(!root) return null;
    console.log(root.data + ", ");
    preOrder(root.left);
    preOrder(root.right);
}

const array = [1,2,3,4,5,6,7,8,9];
const root = buildTree(array);
preOrder(root);