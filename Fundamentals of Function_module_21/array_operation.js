/**
 * write a function to give me sum of all element in array. 
 * step-01: declare a function
 * step-02: call check whether the function is called properly
 * step-03: set a parameter(s)
 * step-04: pass the parameter(s), check whether passed in a proper format
 */

function sumOfnums(numbers){
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        sum = sum + number;
    }
    console.log(sum);   
    return sum;   
    
}
const numbs = [2, 20, 40, 50, 60];
const total = sumOfnums(numbs);
console.log("Sum of numbers is ", total);
