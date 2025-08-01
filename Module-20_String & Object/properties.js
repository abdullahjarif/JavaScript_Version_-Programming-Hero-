const person={
    name: 'Jarif',
    age: 25,
    profession: 'Developer',
    sallary: 25000,
    isMarried: true,
    'favPlaces': ['dhaka', 'sylhet', 'bandarban']
}
person.sallary = 30000; // dot notation update
person['age'] = 26; // bracket notation update
person['favPlaces'] = ['bali', 'maldives', 'karachi'];
console.log(person);

// dot notation
// dot symbol
console.log(person.name);
console.log(person.age);
const income = person.sallary;
console.log(income);

// bracket notation
const boyos = person['age'];
console.log(boyos);
console.log(person['favPlaces']);

// console.log(person);

