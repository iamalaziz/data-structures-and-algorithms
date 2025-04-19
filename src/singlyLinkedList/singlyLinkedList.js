/**
 * ListNode
 * @param {any} val The value of the node
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * SinglyLinkedList
 * @param {Array} array The array of values to initialize the list with
 */
class SinglyLinkedList {
    constructor(array) {
        this.head = null;
        this.tail = null;
        this.size = 0;

        if (Array.isArray(array) && array.length > 0) {
            array.forEach((element) => {
                this.unshift(element);
            });
        }
    }
    /**
     * Check if the list is empty
     * @returns {boolean} - True if the list is empty, false otherwise
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Add a new node to the end of the list
     * @param {any} value The value of the node
     * @returns {SinglyLinkedList} The list itself
     */
    push(value) {
        let newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    /**
     * Remove the last node from the list
     * @returns {any} - The value of the removed node
     */
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
        if (this.size == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /**
     * Remove the first node from the list
     * @returns {any} - The value of the removed node
     */
    shift() {
        if (!this.head) return undefined;
        let secondNode = this.head.next;
        this.head = secondNode;
        this.size--;
        if (this.size == 0) {
            this.tail = null;
        }
        return secondNode;
    }

    /**
     * Add a new node to the beginning of the list
     * @param {any} value The value of the node
     * @returns {SinglyLinkedList} The list itself
     */
    unshift(value) {
        let newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }

    /**
     * Get the node at a specific index
     * @param {number} index The index of the node
     * @returns {ListNode} The node at the specified index
     */
    get(index) {
        if (index < 0 || index >= this.size) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /**
     * Set the value of a node at a specific index
     * @param {number} index The index of the node
     * @param {any} value The value of the node
     * @returns {boolean} True if the value was set, false otherwise
     */
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    /**
     * Add a node in into certain position
     * @param {number} index The index of the node
     * @param {any} value The value of the node
     * @returns {boolean} True if the node was added, false otherwise
     */
    insert(index, value) {
        if (index < 0 || index >= this.size) return false;

        if (index === this.size) {
            this.push(value);
            return true;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        let prevNode = this.get(index - 1);
        let newNode = new ListNode(value);
        let restOfNodes = prevNode.next;
        prevNode.next = newNode;
        newNode.next = restOfNodes;
        this.size++;
        return true;
    }

    /**
     * Remove a node from the list
     * @param {number} index The index of the node
     * @returns {any} The value of the removed node
     */
    remove(index) {
        if (index < 0 || index >= this.size) return undefined;
        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop();
        let prev = this.get(index - 1);
        let curr = prev.next;
        prev.next = curr.next;
        this.size--;
        return curr;
    }

    /**
     * Reverse the list
     * @returns {SinglyLinkedList} - The reversed list
     */
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        for (let i = 0; i < this.size; i++) {
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    /**
     * Print the linked list as an array
     */
    print() {
        let arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr);
    }
}

// test

const n = new ListNode(5);
const list = new SinglyLinkedList();

list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.pop();
list.shift();
list.unshift(9);
list.set(1, 11);
list.insert(12, 3);
list.remove(1);
list.reverse();
list.print();

// const list2 = new SinglyLinkedList([1,2,3])

console.log(list);
