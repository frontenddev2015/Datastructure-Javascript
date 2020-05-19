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
        var item = new Node(val);

        if (!this.head) {
            this.head = item;
            this.tail = this.head;
        } else {
            this.tail.next = item;
            this.tail.next.prev = this.tail;
            this.tail = item;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head)
          return undefined;
        else {
            var item = this.tail;
            var prevNode = this.tail.prev;
            this.tail.prev.next =null;
            this.tail = prevNode;
            this.length--;
            return item;
        }
    }
    shift() {
        if (!this.head)
            return undefined;
        else {
            var headNode = this.head;
            this.head =this.head.next;
            this.head.prev = null;
            this.length--;
            return headNode;
        }
    }
    unshift(item) {
        var itemNode = new Node(item);
        var headNode = this.head;
        this.head.prev = itemNode;
        this.head = itemNode;
        this.head.next = headNode;
        this.length++;
        return list;
    }

    get(index) {
        var currentNode = this.head;
        var count = 0;
        if (!this.head)
            return undefined;
        while(currentNode) {
            if (count === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            count++;
        }
    }

    set(index, item) {
        var itemNode = new Node(item);
        var count = 0;
        var currentNode = this.head;

        while(currentNode) {
            var prevNode = currentNode.prev;
            if (count === index) {
                prevNode.next = itemNode;
                currentNode.prev = itemNode;
                itemNode.next = currentNode;
                itemNode.prev = prevNode;
                this.length++;
                return list;
            }
            count++;
            currentNode = currentNode.next;
        }

    }
}

var list = new DoublyLinkedList();