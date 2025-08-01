/**
 * looping technique
 * for loop
 * while loop
 * for ... in loop --> object
 * for ... of loop --> array
 * do while loop 
 */

const friends = ['elon', 'bill', 'mark', 'waren'];
console.log(friends.length);

for(const friend of friends){
    console.log(friend);
    
}

// for(let i=0; i<10; i++){
for(let i=0; i<friends.length; i++){
    console.log(i);
    console.log(friends[i]);
    
}

// for loop
const marks = [50, 56, 89, 66, 54, 48];
for(let i=0; i<marks.length; i++){
    console.log(i + ' --> ' + marks[i]); 
}

// while loop
const marks1 = [50, 56, 89, 66, 54, 48];
let j=0;
while(j < marks1.length){
    // console.log(i);
    console.log(j + ' --> ' + marks[j]);
    j++;
    
}