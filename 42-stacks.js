class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(val) {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first = this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

//pop
// pop() {
//     if (!this.first) return null;
//     if (this.size === 1) {
//         this.first = null;
//         this.last = null;
//     } else {
//         let temp = this.first;
//         this.first = temp.next;
//     }
//     this.size--;
//     return temp.val;
// }