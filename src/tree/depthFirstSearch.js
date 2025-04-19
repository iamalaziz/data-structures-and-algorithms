/**
 * Depth-First Search: Pre-Order
 * @param {Node} root The root node of the tree
 * @returns {Array} The array of visited nodes
 */
const DFSPreOrder = (root) => {
    const data = [];
    function traverse(node) {
        data.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return data;
};

/**
 * Depth-First Search: Post-Order
 * @param {Node} root The root node of the tree
 * @returns {Array} The array of visited nodes
 */
const DFSPostOrder = (root) => {
    const data = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.val);
    }
    traverse(root);
    return data;
};

/**
 * Depth-First Search: In-Order
 * @param {Node} root The root node of the tree
 * @returns {Array} The array of visited nodes
 */
const DFSInOrder = (root) => {
    const data = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.val);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return data;
};
