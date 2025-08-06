function waitingTime(waitingTimes, serialNum){

    // check waiting time array and serial number is number ?
    if(!Array.isArray(waitingTimes) || typeof serialNum !== "number"){
        return "Invalid Input";
    }

    // check serial number < lenght of array
    let lengthOfarr = waitingTimes.length;
    if(serialNum < lengthOfarr){
        return 0;
    }

    let totalArr = 0;
    for(let time of waitingTimes){
        totalArr = totalArr + time;
    }

    let avgTime = Math.round(totalArr/lengthOfarr);
    let remainingTime = (serialNum - 1) - lengthOfarr;

    return avgTime * remainingTime;

}

console.log("Time is ",waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log("Time is ",waitingTime([13, 2], 6));
console.log("Time is ",waitingTime([13, 2, 6, 7, 10], 6));
console.log("Time is ",waitingTime(7 , 10));
