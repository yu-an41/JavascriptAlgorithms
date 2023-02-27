class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){
        const newNode = new Node(val);
        if (!this.head) {
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

    unshift(val) {
        const newNode = new Node(val);
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
    
    shift() {
        if (this.length === 0) return undefined;
        const removeNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else{
        this.head = removeNode.next;
        removeNode.next = null;
        this.head.prev = null;
        }
        this.length--;
        return removeNode;
    }
}
