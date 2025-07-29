const ages = [];
const numbers = [12, 25, 35, 36, 26, 89, 86, 48, 50, 60, 80];
console.log("1'st length " + numbers.length);
console.log(numbers);

// push elements
numbers.push(90);
numbers.push(65);
console.log("After pushing then length is " + numbers.length);
console.log(numbers);

// pop elements 
numbers.pop(); // remove the last element from the array
console.log(numbers);
console.log(numbers.length);

// again push
numbers.push(70, 80, 100);
console.log(numbers);
console.log(numbers.length);

// friends name 
const friends = ['rafik','salam','kalam', 'jarif', 'abdullah'];
console.log(friends);
console.log(friends.length);

friends.push('Nihal');
console.log(friends);
console.log(friends.length);

const out1 = friends.pop();
const out2 = friends.pop();
const out3 = friends.pop();
// const input1 = friends.push('Samia');

console.log(friends);
console.log(friends.length);

console.log(out1, out2, out3);
// console.log(input1);






