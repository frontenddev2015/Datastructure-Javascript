class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(item) {
        var itemNode = new Node(item);

        if(!this.first) {
            this.first = itemNode;
            this.last = itemNode;
        } else {
            this.last.next = itemNode;
            this.last = itemNode;
        }
        this.size++;
        return this;
    }

    dequeue() {
        if (!this.first) return null;
        var firstNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return this;
    }
}

var queue = new Queue();