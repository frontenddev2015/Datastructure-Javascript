function bubuleSort(arr) {
    var noSwap;
  var length = arr.length;
  while (length > 1) {
      noSwap = true;
     for (j=0; j<length; j++) {
         
	   if (arr[j] > arr[j+1]) {
	     var temp = arr[j];
	     arr[j] = arr[j+1];
	     arr[j+1] = temp;
	     noSwap = false;
	    }
      console.log("arr--->",arr);
	 }
    length--;
    if (noSwap) break;
  }
  return arr;
}


bubuleSort([8,1,2,3,4,5,6,7]);