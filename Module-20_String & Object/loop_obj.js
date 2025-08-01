const mobilePhone = {
    brand: 'Samsung',
    color: 'black',
    camera: '12mp',
    price: 25000,
    isNew: true
};

// for ... of --> array
// for ... in --> object

for(const prop in mobilePhone){
    console.log(prop);

    console.log(mobilePhone[prop]);
    
    
}
const keys = Object.keys(mobilePhone);
console.log(keys);

for(const key of keys){
    console.log(key,':', mobilePhone[key], ':', typeof mobilePhone[key]);
    
}
