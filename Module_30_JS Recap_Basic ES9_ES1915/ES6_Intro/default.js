// default --> if value is not provided then it will take default value
function addNumbers(num1 = 99, num2 = 0) {
    console.log(num1, num2);
    return num1 + num2;

}
const result = addNumbers(10, 20);
console.log(result);

const result2 = addNumbers(10);
console.log(result2);

const result3 = addNumbers();
console.log(result3);

function fullName(fnam, lnam = 'Chowdhury') {
    const name = fnam + ' ' + lnam;
    return name;
}
fullName('Abir');
const name = fullName('Abir');
console.log(name);


function friends(nums = []){

}

function persons(obj = {}){
    
}