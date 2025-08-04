/**
 * for a given string tell me whether it has even number of characters or not
 */

function evenSizedStr(str){
    const sized = str.length;
    console.log(str, sized);
    if(sized % 2 === 0){
        console.log("even size");
        
    }else{
        console.log("odd size");
        
    }
    
}
evenSizedStr('Dhaka');
evenSizedStr('Jarif');
evenSizedStr('Abdullah');
evenSizedStr('I love You');


function doDoubleTripple(digit, doDouble){ // output (int, bool)

    if(doDouble){

        const result = digit * 2;
        return result;
    }else{
        const result = digit * 3;
        return result;
    }
}
const solve = doDoubleTripple(10, true);
console.log(solve);

const solve2 = doDoubleTripple(50, false);
console.log(solve2);


function numOfArr(numbers){
    const len = numbers.length;
    return len;
}
console.log(numOfArr([2, 3, 15, 5, 65, 40]));
