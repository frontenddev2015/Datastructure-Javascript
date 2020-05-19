function binarySearch(arr, num){
    var length = arr.length;
    var leftPointer=0;
    var rightPointer = length;
    var midPointer = Math.ceil((leftPointer+rightPointer)/2);

    /*if (num < arr[0] || num > arr[length-1])
      return -1;*/
   
    while (leftPointer<rightPointer) {
        if (arr[midPointer] === num)
          return midPointer;
        else if (arr[midPointer] < num) {
            leftPointer = midPointer+1;
        } else if (arr[midPointer] > num) {
            rightPointer = midPointer-1;
        }
        midPointer = Math.ceil((leftPointer+rightPointer)/2);
        
    }

    return -1;
   
}

binarySearch([1,2,3,4,5,6,7,8,9],10);