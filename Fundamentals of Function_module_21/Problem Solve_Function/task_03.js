/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
function make_avg(numbers){
    let sum = 0;
    for(let number of numbers){
        // console.log(number);
        sum = sum + number; 
    }
    let avg = sum/numbers.length;
    return avg;
}

let numberArr = [2, 3, 4, 5, 6, 7];
let result = make_avg(numberArr);
console.log(result);
