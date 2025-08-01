const fname = "abdullah";
const lname = "jarif";
// const fullName = fname + ' ' + lname;

const fullName = fname.concat(' ').concat(lname);

console.log(fname);
console.log(lname);
console.log(fullName);

// check letter 
console.log(fullName.includes('d'));
console.log(fullName.includes('x'));

