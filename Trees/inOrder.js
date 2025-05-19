class TreeNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(node, result = []){
    if(node === null) return;

    inorderTraversal(node.left, result);
    result.push(node.data);
    inorderTraversal(node.right, result);

    return result
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(inorderTraversal(root));