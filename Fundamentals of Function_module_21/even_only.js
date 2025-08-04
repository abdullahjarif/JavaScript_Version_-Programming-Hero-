/**
 * create a function that will return only the even numbers
 * return the sum of even numbers
 */

function onlyEven(numbers){
    let evenNum = [];
    for(const number of numbers){
        if (number % 2 === 0) {
            console.log(number);
            // sumEven = sumEven + number;
            evenNum.push(number);
        }
    }
    return evenNum;
}

const digit = [4, 8, 12, 9, 5, 16, 20, 43, 49, 50];
const returnEven = onlyEven(digit);
console.log(returnEven);

