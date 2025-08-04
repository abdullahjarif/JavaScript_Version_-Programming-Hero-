function isEven(numberCheck){
    if(numberCheck % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const resultCheck = isEven(6);
console.log(resultCheck);


function isOdd(numberCheck2){
    if(numberCheck2 % 2 !== 0){
        return true;
    }else{
        return false;
    }
}
const resultCheck2 = isOdd(11);
console.log(resultCheck2);
