function frequencyCounter(){

//var arr = [1,2,3];
//var arr1 = [4,9,1];

var arr = 'aaz'.split("");
var arr1 = 'aza'.split("");

var arrObj = {};
var arrObj1= {};

for (let val of arr) {
    //console.log(val);
    arrObj[val] = (arrObj[val]||0)+1;
}

for (let val of arr1) {
    arrObj1[val] = (arrObj1[val]||0)+1;
}

console.log(arrObj);
console.log(arrObj1);

for(let key in arrObj){
      ///console.log("key--->", key);
        if(!(key in arrObj1)){
            //console.log("key inside-->",key);
            //console.log("arrObj1-->",key);
            return false
        }
       
    }
    return true;
}

console.log(frequencyCounter())