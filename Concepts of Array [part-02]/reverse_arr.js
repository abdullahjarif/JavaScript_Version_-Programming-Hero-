const weight = [1, 2, 3, 4, 5, 6, 7]; // reverse --> [7,6,5,4,3,2,1]
// console.log(weight);

// const revWeight = weight.reverse();
// console.log(revWeight);


// reverse another way
const reversed = [];
for(const weightNum of weight){
    console.log(weightNum);
    // reversed.push(weightNum); // keep same to same as array
    reversed.unshift(weightNum); // keep opsite side to as array
    
}
console.log(reversed);


