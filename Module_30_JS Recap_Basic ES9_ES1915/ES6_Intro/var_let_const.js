// var: no reason to use var 
// let: allow it to resign
// const: do not allow it to resign

let money = 100;
money = money + 50;
console.log(money);

const money2 = 150;
const addMoney2 = money2 + 50; 
console.log(addMoney2);

const numbers = [10, 15, 20, 25, 30, 35];
console.log(numbers);

numbers[1] = 18;
numbers.push(40, 45, 50)
console.log(numbers);

// object
const student = {
    name: 'John',
    age: 25,
}
console.log(student);
// student = {name: 'Jarif', age: 26};
student.name = 'Abir';
student.age = 30;
console.log(student);

let student2 = {
    name: 'John',
    age: 25,
}
student2 = {name: 'Jarif', age: 26};
console.log(student2);

// loop
let sum = 0;
for(let i=0; i<=10; i++){
    sum = sum + i;
}
// console.log(i);
console.log(sum);

