class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractmaxheap() {
        var values = heap.values;
        var maxHeapItem = values[0];
        var newRootItem = values.pop();
        values[0] = newRootItem;
        var currentRoot = values[0];
        var index = 0;
       
        while(index < values.length) {
            var leftChildIndex = 2*index+1;
            var rightChildIndex = 2*index+2;
            if (currentRoot < values[leftChildIndex] && currentRoot > values[rightChildIndex]) {
                currentRoot = values[leftChildIndex];
                this.swap(heap.values, index, leftChildIndex);
                index = leftChildIndex;
            } else if (currentRoot > values[leftChildIndex] && currentRoot < values[rightChildIndex]) {
                currentRoot = values[rightChildIndex];
                this.swap(heap.values, index, rightChildIndex);
                index = rightChildIndex;
            } else if(values[leftChildIndex] > values[rightChildIndex]){
                currentRoot = values[leftChildIndex];
                this.swap(values,index, leftChildIndex);
                index = leftChildIndex;
            } else if (values[leftChildIndex] < values[rightChildIndex]){
                currentRoot = values[rightChildIndex];
                this.swap(values, index, rightChildIndex);
                index = rightChildIndex;
            } else {
                return heap.values;
                break;
            }
        }
    }
    swap(arr, lefChild, rightChild) {
        var temp = arr[lefChild];
        arr[lefChild] = arr[rightChild];
        arr[rightChild] = temp;
        console.log(arr);
    }
}

let heap = new MaxBinaryHeap();
/*heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);*/

/*
if n indexed element is the root node, then the left child node is at 2n+1 and the right child node at 2n+2.
if n indexed element is the child node, then the root node is at Math.floor(n-1/2)
*/
