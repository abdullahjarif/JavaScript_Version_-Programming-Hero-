function add(a,b){
    return a + b;
}

const result  = add(3,4);
console.log("Add function result ", result);

// function doubleIt(number){
//     return number * 2;

// }
// const doubled = doubleIt(6);
// console.log("Double it",doubled);

function doubledIt(num){
    const doubleIt = num * 2;
    console.log(num, doubleIt);
    
}
doubledIt(6);
console.log("I will call a function");
doubledIt(10);

// veriable declare kore
const money = 130;
doubledIt(money);

function differenceAge(age1,age2){
    const difference = age1 - age2;
    console.log(age1, age2, "Difference is ", difference);
    
}

const fatherAge = 52;
const motherAge = 45;
const myAge = 20;
differenceAge(fatherAge, motherAge);
console.log("====================");

differenceAge(fatherAge, myAge);

