class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.prev = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(item, nodeType, rootNode) {
        var queue = [];
        var itemNode = new Node(item);
        if(this.root === null){
            this.root = itemNode;
            return this;
        }
        queue.push(this.root);
        var currRootNode;
        

       while(true) {
           currRootNode = queue.shift();
           if (currRootNode.val === rootNode) {
               if (!currRootNode.left && nodeType === "left") {
                   currRootNode.left = itemNode;
                   itemNode.prev = currRootNode;
                   return this;
               } else if (!currRootNode.right && nodeType === "right") {
                   currRootNode.right = itemNode;
                   itemNode.prev = currRootNode;
                   return this;
               // if both the left node and right node are same
               // the implementation can be changed - instead of indexOf tree level can be used. 
               // queue[level] can be used in the condition to verify for the duplicate root item.
               } else if (queue.indexOf(rootNode)) {
                   continue;
               } else {
                   console.log(`The root node ${rootNode}  already has ${nodeType} child `);
                   break;
               }
           }

           if (currRootNode.left) {
               queue.push(currRootNode.left);
           }

           if (currRootNode.right) {
               queue.push(currRootNode.right);
           }
       }
    }

    issymetrictree() {
        var returnVal = true;
        if (!this.root) {
            return true;
        }
        var leftTreeRoot = this.root.left && this.root.left;
        var rightTreeRoot = this.root.right && this.root.right;
        
        function traverse(leftRoot, rightRoot) {
            if (leftRoot === null || rightRoot === null) {
                 returnVal = false;
                 return;
            }
            if(leftRoot.left || rightRoot.right) {
                traverse(leftRoot.left, rightRoot.right);
            }
            
            if(leftRoot.right || rightRoot.left) {
                traverse(rightRoot.left, leftRoot.right);
            }

            if (leftRoot.val !== rightRoot.val) {
                returnVal = false;
            }
        }
        //Use recursive method and pass both the left tree and right tree as parameters
        traverse(leftTreeRoot, rightTreeRoot);
        if (returnVal) {
            console.log("This Binary Tree is a Symentric Tree");
            return false;
        } else {
            console.log("This Binary Tree is not a Symentric Tree");
            return false;
        }
    }
}

var bTree = new BinaryTree();

/*bTree.insert(10);
bTree.insert(20, "left", 10);
bTree.insert(20, "right", 10);
bTree.insert(30, "left", 20);
bTree.insert(40, "right", 20);
bTree.insert(40, "left", 20);
bTree.insert(30, "right", 20);
bTree.insert(50, "left", 30);
bTree.insert(60, "right", 30);
bTree.insert(70, "left", 40);
bTree.insert(80, "right", 40);
bTree.insert(80, "left", 40);
bTree.insert(70, "right", 40);
bTree.insert(60, "left", 30);
bTree.insert(50, "right", 30);
*/

