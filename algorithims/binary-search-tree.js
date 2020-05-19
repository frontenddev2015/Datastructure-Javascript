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

    insert(item) {
        var itemNode = new Node(item);
        if(this.root === null){
            this.root = itemNode;
            return this;
        }
        var currRootNode = this.root;

       while(true) {
           if (item === currRootNode.val) return undefined;
           if (item < currRootNode.val) {
               if (currRootNode.left === null) {
                   currRootNode.left = itemNode;
                   itemNode.prev = currRootNode;
                   break; 
               }
               currRootNode = currRootNode.left;
           } else {
               if (currRootNode.right === null) {
                   currRootNode.right = itemNode;
                   itemNode.prev = currRootNode;
                   break;
               }
               currRootNode = currRootNode.right;
           }
           
       }
    }

    find(item) {
        if(!this.root) return null;
        var currRootNode = this.root;
        while(true) {
            if (item === currRootNode.val) return true;
            if (item < currRootNode.val) {
                if (currRootNode.left !== null && (item === currRootNode.left.val)) {
                    return true;
                }
                currRootNode = currRootNode.left;
            } else {
                if (currRootNode.right !== null && (item === currRootNode.right.val)) {
                    return true;
                }
                currRootNode = currRootNode.right;
            }
        }
        
    }
    BFSsearch() {
        var queue = [];
        var traverssedNode = [];
        var currRootNode = this.root;
        queue.push(currRootNode);
        
        while(queue.length) {           
            var currTraverssedNode = queue.shift()
            traverssedNode.push(currTraverssedNode.val);
            if (currTraverssedNode.left) {
                queue.push(currTraverssedNode.left);
            } 
            if (currTraverssedNode.right) {
                queue.push(currTraverssedNode.right);
            }
            currRootNode = currTraverssedNode;
        }
        return traverssedNode;
    }
    DFSpreordersearch() {
        var visitedNodes = [];
        function traverse(rootNode) {
            visitedNodes.push(rootNode.val);
            if(rootNode.left) {
                traverse(rootNode.left);
            }
            if(rootNode.right) {
                traverse(rootNode.right);
            }
        }
        traverse(this.root);
        return visitedNodes;
    }
    DFSpreordersearchwithoutrecursion() {
        var visitedNodes = [];
        var currRootNode = this.root;
        visitedNodes.push(currRootNode.val);
        
        while (currRootNode) {
            if (currRootNode.left && visitedNodes.indexOf(currRootNode.left.val) === -1) {
                currRootNode = currRootNode.left;
                visitedNodes.push(currRootNode.val);
            } else if (currRootNode.right && visitedNodes.indexOf(currRootNode.right.val) === -1) {
                currRootNode = currRootNode.right;
                visitedNodes.push(currRootNode.val);
            } else {
                currRootNode = currRootNode.prev;
            }              
        }
        return visitedNodes;
    }
    DFSpostorder() {
        var visitedNodes = [];
        // recursion - helper method
        function traverse(rootNode) {
            if(rootNode.left) {
                traverse(rootNode.left); 
            }
            if(rootNode.right) {
                traverse(rootNode.right);
            }
            visitedNodes.push(rootNode.val);
        }
        traverse(this.root);
        return visitedNodes;
    }
    DFSinorder() {
        var visitedNodes = [];
        function traverse(rootNode) {
            if(rootNode.left) {
                traverse(rootNode.left); 
            }
            visitedNodes.push(rootNode.val);
            if(rootNode.right) {
                traverse(rootNode.right);
            }
        }
        traverse(this.root);
        return visitedNodes;
    }
    DFSpostorderstack() {
        var traverssedNode = [];

        var stack = [];
        var currRootNode = this.root;
        stack.push(currRootNode);

        while(stack.length) {
            var currRootNode = stack.pop();
            traverssedNode.push(currRootNode.val);
            if (currRootNode.right) 
                stack.push(currRootNode.right);
            if (currRootNode.left)
                stack.push(currRootNode.left);   
        }

        return traverssedNode;

    }

    issymetrictree() {
        var leftTreeRoot = this.root.left && this.root.left;
        var rightTreeRoot = this.root.right && this.root.right;
        //if (leftTreeRoot.val !== rightTreeRoot.val)
            //return false;
        function traverse(leftRoot, rightRoot) {
            if(leftRoot.left && rightRoot.right) {
                traverse(leftRoot.left, rightRoot.right);
            }
            
            if(leftRoot.right && rightRoot.left) {
                traverse(rightRoot.left, leftRoot.right);
            }
            if(rightRoot.left) {
                //traverse(rightRoot.left);
            }
        }

        traverse(leftTreeRoot, rightTreeRoot);
        
    }
}

var bTree = new BinaryTree();
bTree.insert(50)
bTree.insert(30)
bTree.insert(60)
bTree.insert(20)
bTree.insert(35)
bTree.insert(59)
bTree.insert(62)

/*bTree.insert(18);
bTree.insert(14);
bTree.insert(12);
bTree.insert(9);
bTree.insert(6);
bTree.insert(10);
bTree.insert(13);
bTree.insert(26);
bTree.insert(15);
bTree.insert(30);
bTree.insert(27);
bTree.insert(25);
bTree.insert(31);*/

/*bTree.insert(6);
bTree.insert(4);
bTree.insert(3);
bTree.insert(5);
bTree.insert(9);
bTree.insert(8);*/