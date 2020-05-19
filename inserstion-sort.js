function insertionsort(arr) {
    for (var i=0; i < arr.length; i++) {
         var item = arr[i+1];
        for (var j=i+1;j>0;j--) {
           
            if (item < arr[j-1]) {
                //var t = j-1;
                continue;
            }
            var temp = item;
            arr[i+1] = arr[j];
            arr[j+1] = temp;
        }
    }
}

insertionsort([5,3,4,1])