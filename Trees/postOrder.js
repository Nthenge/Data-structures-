class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// postorder traversal
function postOrder(node, result = []){
    if(node === null) return;
    postOrder(node.left, result);
    postOrder(node.right, result);
    result.push(node.data);
    return result
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(postOrder(root));