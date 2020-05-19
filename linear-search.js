// write a function which accepts two parameters, the first parameter should be an array and the second parameter should be a number.
//The function should return "true" if second parameter matches any of the items in the array otherwise return -1

function linearSearch(arr,num) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
        /* else if((i===arr.length-1) && (arr[i] != num)) {
            return -1;
        }*/
    }
    return -1;
}


linearSearch([1,2,3,0,4,5], 10);