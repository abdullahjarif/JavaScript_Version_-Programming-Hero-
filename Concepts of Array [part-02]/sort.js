const person = ['Akib', 'akib', 'rakib', 'Rakib', 'Sakib', 'Nokib', 'Shakib', 'anis', 'Anis'];
console.log(person);
const sortPerson = person.sort();
console.log(sortPerson);

// main array
const weight = [3, 5, 2, 9, 6, 44, 12, 10, 24];
console.log(weight);

/**
 * assending sort --> small to large value 
 * descending sort --> large to small value
 */

// const sortWeight = weight.sort(); not working properly 
const sortasc_Weight = [...weight].sort(function(a,b){
    return a-b; // sort small to large value 
}); 
console.log(sortasc_Weight);

const sortdsc_Weight = [...weight].sort(function(a,b){
    return b-a; // sort large to small value
}); 

console.log(sortdsc_Weight);



