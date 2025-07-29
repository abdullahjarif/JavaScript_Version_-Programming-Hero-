const friends = ['jarif', 'nadiya', 'samia', 'rakib', 'salam', 'kalam'];
console.log(friends.includes('jarif')); // check this element is exist in array.
console.log("Array Length " +friends.length);

// includes()
console.log(friends.includes('arif'));

// usefull ekta jinis
if(friends.includes('Jarif')){
    console.log("let's go party");
    
}else{
    console.log("ghumai thako");
    
}

// find index of element of a array
// indexOf()
console.log("Index " + friends.indexOf('jarif'));
console.log("Index " + friends.indexOf('nadiya'));
console.log("Index " + friends.indexOf('kalam'));
// console.log("Index " + friends.indexOf('Jarif'));
console.log("Index " + friends.indexOf('tometo')); // return -1 doesn't exist in array


