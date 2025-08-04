/**
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */
function myBinaryString(binaryStr){
    let count = 0;
    for(let char of binaryStr){
        if(char === '0'){
            count++;
        }
    }
    return count;
}

let result = '010011010101';
let findZero = myBinaryString(result);
console.log("Count Zero is ", findZero);
