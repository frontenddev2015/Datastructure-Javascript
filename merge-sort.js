function mergesort(arr1, arr2) {
    var resultArray = [];
    var i=0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
       if (arr1[i] < arr2[j]) {
           resultArray.push(arr1[i]);
           i++;
       } else {
           resultArray.push(arr2[j]);
           j++;
       }
    }

    while (j < arr2.length) {
        resultArray.push(arr2[j]);
        j++;
    }
    return resultArray;
}

mergesort([2,14,99,100],[1,10,50]);