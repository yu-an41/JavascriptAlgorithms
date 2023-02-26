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

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(val) {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
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
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let index = 1;
    let current = this.get(index);
    let next = current.next;
    this.tail = this.head;
    while(this.get(index) < this.length -1) {
      current.next = this.tail;
      next.next = current;
      index++;
    }
    this.head = current;
    return this;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push("hi");
list.push("you");

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

// traverse（模擬pop）
// traverse(){
//     let current = this.head;
//     while(current) {
//         console.log(current.val);
//         current = current.next;
//     }
// }

// remove(index) {
//   if (index < 0 || index >= this.length) return undefined;
//   if (index === this.length-1) return !!this.pop();
//   if (index === 0) return !!this.shift();

//   let prev = this.get(index - 1);
//   let temp = this.get(index + 1);
//   prev.next = temp;
//   this.length--;
//   return this.get(index);
// }

// reverse() {
//   let index = 1;
//   let current = this.get(index);
//   let next = current.next;
//   this.head = this.tail;
//   while(this.get(index) < this.length -1) {
//     current.next = this.tail;
//     next.next = current;
//     index++;
//   }
//   this.head = current;
//   return this;
// }