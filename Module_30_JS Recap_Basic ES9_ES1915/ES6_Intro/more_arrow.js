const difference = (a, b) => a - b;
const multiply = (a, b, c) => a * b * c;
console.log(difference(40, 10));
console.log(multiply(2, 3, 4));

// single parameter or one parameter
const getAge = (person) => person.age; // implicit function (return)
const getName = (person) => person.name;
const student = {name: 'Jarif', age: 22};
const age = getAge(student);
console.log(age); 

const name = getName(student);
console.log(name);

const getThirdNum = numbers => numbers[0];
const number  = getThirdNum([10, 15, 20, 25, 30]);
console.log(number);


const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());


// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const avg = sum / 3;
    const result = avg * 2;
    return result;
}
const result2 = doMath(10, 20, 30);
console.log(result2);

