function frequenceCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    var array1 = arr1.map(sqr => sqr*sqr);
    console.log("arr1", array1);
    console.log("arr2", arr2);

    var obj1 = {};
    var obj2 = {};

    for (let key of array1) {
      obj1[key] = (obj1[key] || 0)+1;
    }

    for (let key of arr2) {
      obj2[key] = (obj2[key] || 0)+1;
    }

    for (key in obj1) {
        if (!(key in obj2)) {
            console.log("key--->", key);
            return false;
        }
    }

    console.log("obj1--->", obj1);
    console.log("obj2--->", obj2);

    return true;

}

frequenceCounter([3,1,6,7], [9,1,36,49]);