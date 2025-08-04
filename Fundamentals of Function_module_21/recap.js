function addPrice(price1, price2){
    const total = price1 + price2;
    // console.log(total);
    return total;
}

const totalBill = addPrice(4500, 23000);
console.log("Total Bill", totalBill);

function diffPrice(price3, price4){
    return price3 - price4;
}

const difference = diffPrice(10,5);

console.log("Bill Difference", difference);

console.log(totalBill, difference);

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = diff * sum;
    const result = multiply / 2;
    return result;
}

const result = doMath(30,15);
console.log(result);



function isEven(numberCheck){
    if(numberCheck % 2 === 0){
        return true;
    }else{
        return false;
    }
}

