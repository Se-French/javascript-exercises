let x = 1;
let y = 4;

const sumAll = function(x, y) {


    if ((x < 0 || y < 0) || (typeof x != 'number' || typeof y != 'number')) {
        return 'ERROR';

    } else if (x < y){
        let sum = 0;
        for (let num = x; num <= y; num++){
            sum += num;
        }

        return sum;

    } else if (x > y){
        let sum = 0;
        for (let num = x; num >= y; num--){
            sum += num;
        }

        return sum;
    }

}    

// Do not edit below this line
module.exports = sumAll;
