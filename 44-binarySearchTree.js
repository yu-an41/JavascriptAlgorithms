class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(val) {
        this.root = val;
    }

    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if (this.root === null) return false;
        let current = this.root, found = false;
        while (current && !found) {
            if (val === current.val) return true;
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        const queue = [], data = [], node = this.root;
        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if(node.left) data.push(node.left.val);
            if(node.right) data.push(node.right.val);
        }
        return data;
    }

    DFSPreOrder() {
        const data = [];
        function traverse(node) {
            data.push(node);
            if(node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        const data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        const data = [];
        function traverse (node) {
            node.left && traverse(node.left);
            data.push(node.val);
            node.right && traverse(node.right)
        }
        traverse(this.root);
        return data;
    }
}
const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);