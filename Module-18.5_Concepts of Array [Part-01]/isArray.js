const friends = ['jarif', 'nadiya', 'samia', 'rakib', 'salam', 'kalam'];
const friends2 = ['jarif', 'nadiya', 'samia', 'rakib', 'salam', 'kalam'];
const nums = [];

const food = 'ros gol l a';
const age = 25;

// check array or not array
// isArray()

console.log(Array.isArray(friends));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));
console.log(Array.isArray(age));

// join() methods returns an array of strings.
const result = friends.join('|');
console.log(result);

// concate()
const concateArray = friends.concat(friends2);
console.log(concateArray);

// slice()
const sliceFriends = friends.slice(1,4);
console.log(sliceFriends);



