function printnumber(n) {
    console.log("number", n);
    n>0 && printnumber(n-1)
}