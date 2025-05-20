class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

function getHeight(node) {
    if (!node) return 0;
    return node.height;
}

function getBalance(node) {
    if (!node) return 0;
    return getHeight(node.left) - getHeight(node.right);
}

function rightRotate(y) {
    console.log('Rotate right on node', y.data);
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
    x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));

    // Return new root
    return x;
}

function leftRotate(x) {
    console.log('Rotate left on node', x.data);
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));

    // Return new root
    return y;
}

function insert(node, data) {
    // Normal BST insert
    if (!node) return new TreeNode(data);

    if (data < node.data) {
        node.left = insert(node.left, data);
    } else if (data > node.data) {
        node.right = insert(node.right, data);
    } else {
        return node; // duplicate keys not allowed
    }

    // Update height
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));

    // Get balance factor
    const balance = getBalance(node);

    // Left Left Case
    if (balance > 1 && data < node.left.data) {
        return rightRotate(node);
    }

    // Left Right Case
    if (balance > 1 && data > node.left.data) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && data > node.right.data) {
        return leftRotate(node);
    }

    // Right Left Case
    if (balance < -1 && data < node.right.data) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    return node;
}

function inOrderTraversal(node) {
    if (!node) return;
    inOrderTraversal(node.left);
    process.stdout.write(node.data + ", ");
    inOrderTraversal(node.right);
}

// Inserting nodes
let root = null;
const letters = ['C', 'B', 'E', 'A', 'D', 'H', 'G', 'F'];
for (const letter of letters) {
    root = insert(root, letter);
}

inOrderTraversal(root);
console.log();
