const math = Math.max(10, 1, 90, 20, 15, 35, 30, 45, 40);
console.log(math);

const math2 = Math.min(10, 1, 90, 20, 15, 35, 30, 45, 40);
console.log(math2);

const arr = [10, 1, 90, 20, 15, 35, 30, 45, 40];
console.log(arr);

console.log(Math.max(...arr)); // Spread operator to pass array elements as individual arguments
console.log(Math.min(...arr)); 


// use spread operator to copy array
const nums = [1, 2, 3, 4, 5]
const nums2 = nums;
nums2.push(6);
console.log(nums);

const friends = ['John', 'Jane', 'Jim'];
const bondhu = friends; // copy by reference
bondhu.push('Jack');
friends.push('Jill');
console.log(friends);
console.log(...bondhu);

// advance
const newFriend = [...friends, 'Joe']; // add extra element while copying
console.log(newFriend);


