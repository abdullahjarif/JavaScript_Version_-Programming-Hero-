let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

let objProperty = Object.keys(myObject);
console.log(objProperty);

for(let key of objProperty){
    console.log(key, '|', myObject[key], '|', typeof myObject[key]);
    
}
