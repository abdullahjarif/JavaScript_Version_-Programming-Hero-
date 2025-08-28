function add(x, y){
    const addResult = x + y;
    return addResult;
}
const sum = add(1, 2);
console.log(sum);

// function expression
// anonymous function
const add2 = function(x, y){
    return x + y;
}
const sum2 = add2(10,20);
console.log(sum2);


// arrow function
const add3 = (x, y) => x + y;
const sum3 = add3(100, 200);
console.log(sum3);

const add4 = (num1, num2, num3, num4) => (num1 + num2 +(-num3)) * num4;
const math = add4(10, 20, 5, 2);
console.log(math);