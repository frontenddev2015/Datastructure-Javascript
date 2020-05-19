class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

 
class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length =0;
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
          this.head = newNode;
          this.tail = this.head; // HEAD and TAIL both are same when there is no node initially
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        var currentNode = this.head;
        var previousNode = null;

        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = previousNode;
        this.tail.next = null;
        this.length--;

        return currentNode;
    }
    shift() {
        if (this.head) {
            var headNode = this.head;
            this.head = headNode.next;
            this.length--;
        }
        return headNode;    
    }
    unshift(item) {
        var itemNode = new Node(item);
        if (!this.head) {
            this.head = itemNode;
        } else {
            var currentHeadNode = this.head;
            this.head = itemNode;
            this.head.next = currentHeadNode;
            this.length++;
        }
        return this;
    }

    get(index) {
        var count = 1;
        var currentNode = this.head;
        var item;

        while (currentNode) {
            if (index === count) {
                item = currentNode;
                break;
            }
            currentNode = currentNode.next;
            count++;
        }
        return item;
    }

    set(index, item) {
        var count = 1;
        var currentNode = this.head;
        var itemNode = new Node(item);

        while(currentNode) {
            if (index === count) {
              previousNode.next = itemNode;
              itemNode.next = currentNode.next;
              this.length++;
              break;
            }
            var previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        return this;
    }

    insert(index, item) {
      var count = 1;
        var currentNode = this.head;
        var itemNode = new Node(item);

        while(currentNode) {
            if (index === count) {
              previousNode.next = itemNode;
              itemNode.next = currentNode;
              this.length++;
              break;
            }
            var previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        return this;
    }

    remove(index) {
        var count = 1;
        var currentNode = this.head;

        while(currentNode) {
            if (index === count) {
              previousNode.next = currentNode.next;
              this.length--;
              break;
            }
            var previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        return this;
    }
   // 10 -> 20 -> 30 -> 40
   // 40 -> 30 -> 20 -> 10
   reverse() {
        var currentNode = this.head;
		var preNodeVal;
        var item = currentNode.val;
		var node = new Node(item);
		this.tail = node;
		var nextNode = node;

        while(currentNode.next) {
		    node = new Node(currentNode.next.val);
			node.next = nextNode;
			nextNode = node;
			preNodeVal = currentNode.next.val;
			currentNode = currentNode.next;
		    if (!currentNode.next) {
                node = new Node(preNodeVal);
				this.head = nextNode;
            }
        }
        return this;
    }
    // Print linked list items
    print (list) {
        var result = [];
        var currentNode = list.head;
        while (currentNode) {
            result.push(currentNode.val);
            currentNode=currentNode.next;
        }
        return result;
    }
}

var list = new SinglyLinkedList();