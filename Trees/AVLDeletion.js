// AVL Tree Implementation in JavaScript

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
    if (!node) return new TreeNode(data);

    if (data < node.data) {
        node.left = insert(node.left, data);
    } else if (data > node.data) {
        node.right = insert(node.right, data);
    } else {
        return node; // Duplicate values not allowed
    }

    // Update height
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));

    const balance = getBalance(node);

    // Balancing the tree
    if (balance > 1 && data < node.left.data) return rightRotate(node); // Left Left
    if (balance < -1 && data > node.right.data) return leftRotate(node); // Right Right
    if (balance > 1 && data > node.left.data) { // Left Right
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }
    if (balance < -1 && data < node.right.data) { // Right Left
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    return node;
}

function minValueNode(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function deleteNode(node, data) {
    if (!node) return node;

    if (data < node.data) {
        node.left = deleteNode(node.left, data);
    } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
    } else {
        if (node.left === null) {
            const temp = node.right;
            node = null;
            return temp;
        } else if (node.right === null) {
            const temp = node.left;
            node = null;
            return temp;
        }

        const temp = minValueNode(node.right);
        node.data = temp.data;
        node.right = deleteNode(node.right, temp.data);
    }

    if (node === null) return node;

    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    const balance = getBalance(node);

    if (balance > 1 && getBalance(node.left) >= 0) return rightRotate(node); // Left Left
    if (balance > 1 && getBalance(node.left) < 0) { // Left Right
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }
    if (balance < -1 && getBalance(node.right) <= 0) return leftRotate(node); // Right Right
    if (balance < -1 && getBalance(node.right) > 0) { // Right Left
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    return node;
}

function inOrderTraversal(node) {
    if (!node) return;
    inOrderTraversal(node.left);
    console.log(node.data + ", ");
    inOrderTraversal(node.right);
}

// Example Usage
let root = null;
const letters = ['C', 'B', 'E', 'A', 'D', 'H', 'G', 'F'];
for (const letter of letters) {
    root = insert(root, letter);
}

console.log("In-order traversal after insertions:");
inOrderTraversal(root);

root = deleteNode(root, 'E');

console.log("\nIn-order traversal after deleting 'E':");
inOrderTraversal(root);