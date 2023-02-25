// piece of data - val
// reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first  = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('you');


// 我的push練習
// push(val) {
//     let node = new Node(val);
//     if(this.length === 0) {
//         this.head = node;
//         this.tail = node;
//     } else {
//         this.tail.next = node;
//     }
//     this.length++;
//     // 忘記 return
// }