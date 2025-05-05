function preOrder(root){
    if(!root) return null;
    console.log(root.data + ", ");
    preOrder(root.left);
    preOrder(root.right);
}

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);


preOrder(root);