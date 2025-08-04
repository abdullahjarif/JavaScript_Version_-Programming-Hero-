/**
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.
 */


/* 

function odd_even(numbers) {
    let results_odd = [];
    let results_even = [];

    for (let number of numbers) {
        if (number % 2 === 0) {
            results_even.push(number);
        } else {
            results_odd.push(number);
        }
    }

    return {
        even: results_even,
        odd: results_odd
    };
}

let numberCheck = [2, 5, 7, 8, 10, 4, 12, 17, 13, 19];
let result = odd_even(numberCheck);

console.log("Even numbers are:", result.even);
console.log("Odd numbers are:", result.odd); 

*/

function odd_even(number){
    if(number%2===0){
        return "Even";   
    }else{
        return "Odd";    
    }

}
console.log("Result is", odd_even(10));
console.log("Result is", odd_even(7));





