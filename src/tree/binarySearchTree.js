/**
 * Node class for the binary search tree
 * @param {any} val The value of the node
 */
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Binary search tree class
 * @param {Node} root The root node of the tree
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Insert a new node into the tree
     * @param {number} value - The value of the node
     * @returns {BinarySearchTree} - The tree itself
     */
    insert(value) {
        if (!this.root) this.root = new Node(value);
        const newNode = new Node(value);
        let curr = this.root;
        while (true) {
            if (value == curr.val) return undefined;
            if (value < curr.val) {
                if (curr.left == null) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            } else {
                if (curr.right == null) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }

    /**
     * Find a node in the tree
     * @param {number} value - The value of the node
     * @returns {Node} - The node itself
     */
    find(value) {
        if (this.root == null) return false;
        if (this.root.val === value) return true;
        let curr = this.root;
        while (true) {
            if (value === curr.val) return curr;
            if (value < curr.val) {
                if (curr.left == null) {
                    return undefined;
                }
                curr = curr.left;
            } else {
                if (curr.right === null) {
                    return undefined;
                }
                curr = curr.right;
            }
        }
    }
}

// test

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);
tree.insert(8);
tree.insert(6);

console.log('tree:', tree);
