class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        
        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }
}

// get(index) {
//     if (index < 0 || index >= this.length) return null;
    
//     let middle = Math.floor(this.length / 2);

//         while (counter <= middle) {
//             let counter = 0;
//             let current = this.head;
//             current = current.next;
//             counter++;
//             if (counter === index) return current;
//         }

//         while (counter > middle) {
//             let counter = this.length - 1;
//             let current = this.tail;
//             current = current.prev;
//             counter--;
//             if (counter === index) return current;
//         }
// }

// insert(index, val) {
//     if (index < 0 || index >= this.length) return false;
//     if (index === 0) return !!this.unshift(val);
//     if (index === this.length) return !!this.push(val);

//     let prevNode = this.get(index - 1);
//     let nextNode = prevNode.next;
//     let newNode = new Node(val);
    
//     prevNode.next = newNode;
//     newNode.next = nextNode;
//     nextNode.prev = newNode;
//     newNode.prev = prevNode;
//     this.length++;
//     return true;
// }