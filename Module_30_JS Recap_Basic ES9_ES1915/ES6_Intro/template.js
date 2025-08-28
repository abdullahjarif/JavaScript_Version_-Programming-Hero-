const fname = 'jarif';
const lname = 'hasan';
const greeting = 'welcome to my world';

const fulname = fname + ' ' + lname + ' ' + greeting;
console.log(fulname);

const a = 10;
const b = 20;
const result = "Sum of " + a + " and " + b + " is: " + (a + b);
console.log(result);

const c = 40;
const d = 40;
const math = `Sum of ${c} and ${d} is: ${c + d}`;
console.log(math);

// `` backtick is used for template string
// ${} is used to embed expressions inside template strings

const numbers = [10, 20, 30, 40, 50];
const sumNumbers = `Sum of ${numbers[1]} and ${numbers[3]} is: ${numbers[1] + numbers[3]}`;
console.log(sumNumbers);


const numbers2 = [10, 20, 30, 40, 50];
const student = {name: 'jarif', age: 22};
const sumNumbers2 = `Sum of ${numbers2[1]}, ${numbers2[3]} and ${student.age} is: ${numbers2[1] + numbers2[3] + student.age}`;
console.log(sumNumbers2);

const email = 'Hi John \n' 
            + 'I hope you are doing well. \n'
            + 'I would like to meet you to discuss our project. \n'
            + 'Please let me know your availability. \n'
            + 'Best regards, \n'
            + 'Jane';
console.log(email);

const challange = `Hi John
I hope you are doing well.
`
console.log(challange);
