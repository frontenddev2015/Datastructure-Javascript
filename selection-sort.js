function selectionsort(arr) {
   var minPos;
  for(i=0; i < arr.length; i++) {
    minPos = i;
    var j=i+1;
    var length = arr.length;
    while(j<length) {
	  if (arr[minPos] > arr[j]) {
	    minPos = j;
	  }
	  j++;
	}
	var temp = arr[i];
	arr[i] = arr[minPos];
	arr[minPos] = temp;
	
	console.log("arr--->",arr);

	length--;
  }
  
  return arr;
}
  
  selectionsort([5,3,0,-1,4,1,2]);
