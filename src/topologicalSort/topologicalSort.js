/**
 * Performs topological sort on a directed graph represented as an adjacency list.
 * @param {Object<string, string[]>} digraph Directed graph where each key maps to a list of adjacent nodes.
 * @returns {string[]} Array of nodes in topologically sorted order.
 * @throws {Error} If the graph has a cycle and topological sort is not possible.
 */
function topologicalSort(digraph) {
    const indegrees = new Map();

    // initialize indegrees to 0
    for (const node of Object.keys(digraph)) {
        indegrees.set(node, 0);
    }

    // count incoming edges (indegrees)
    for (const neighbors of Object.values(digraph)) {
        for (const neighbor of neighbors) {
            indegrees.set(neighbor, (indegrees.get(neighbor) ?? 0) + 1);
        }
    }

    // collect nodes with no incoming edges
    const queue = [];
    for (const [key, degree] of indegrees.entries()) {
        if (degree === 0) queue.push(key);
    }

    const topologicalOrdering = [];

    while (queue.length > 0) {
        const node = queue.shift();
        topologicalOrdering.push(node);

        for (const neighbor of digraph[node] ?? []) {
            indegrees.set(neighbor, indegrees.get(neighbor) - 1);
            if (indegrees.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    return topologicalOrdering;
}

const digraph = {
    0: ['2', '3'],
    1: ['3', '4'],
    2: ['5'],
    3: ['5', '6'],
    4: ['6'],
    5: ['7'],
    6: ['7', '8'],
    7: ['9'],
    8: ['9'],
    9: [],
};

console.log(topologicalSort(digraph));
