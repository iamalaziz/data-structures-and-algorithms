/**
 * Breadth-First Search
 * @param {Node} root The root node of the tree
 * @returns {Array} The array of visited nodes
 */
const BFS = (root) => {
    if (!root) return [];

    let queue = [root];
    let visited = [];

    while (queue.length) {
        let node = queue.shift();
        visited.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return visited;
};

// test

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
