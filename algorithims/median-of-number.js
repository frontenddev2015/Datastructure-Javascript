class Median {
    constructor() {
        this.numbers = [];
    }

    addnumber(num) {
        this.numbers.push(num);
    }

    findmedian() {
        var sortedNumbers = this.numbers.sort(function(a,b){
            return a-b;
        });
        
        var totalNumbers = sortedNumbers.length;
        var position, medianNumber;
        if (totalNumbers === 1) {
            medianNumber = sortedNumbers[0];
        }
        if (totalNumbers%2 === 1) {
            position = (totalNumbers+1)/2;
            medianNumber = sortedNumbers[position-1];
        } else {
            position = totalNumbers/2;
            medianNumber = (sortedNumbers[position-1]+sortedNumbers[position])/2;
        }
        return medianNumber;
    }
}

var median = new Median();

/*median.addnumber(40)
median.addnumber(100)
median.addnumber(1)
median.addnumber(5)
median.addnumber(25)
median.addnumber(10)*/
