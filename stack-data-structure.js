class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(item) {
        var itemNode = new Node(item);
        if (!this.first) {
            this.first = itemNode;
            this.last = itemNode;
            this.size++;
        } else {
            var prevNode = this.first;
            this.first = itemNode;
            this.first.next = prevNode;
            this.size++
        }

        return this;
    }

    pop() {
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        var returnNode = this.first;
        this.first = this.first.next;
        this.size--;
        return returnNode;
    }
}

var stack = new Stack();

