/**
 * ternary --- three parts
 * 
 * if/else another structure
 * condition ? true_portion : false_portion
 */


const age = 8;

// if(age>= 18){
//     console.log("you can vote");
    
// }else{
//     console.log("tmi ghumay thako");
    
// }

// simple ternary
// age >= 18 ? console.log("you can vote") : console.log("ghumaw tmi");

let price = 5000;
const isLeader = true;
// const isLeader = false;

// if(isLeader === false){
//     price = 0;
// }else{
//     price = price + 100;
// }

// console.log(price);

// price = isLeader === false ? 0 : price + 100;
// console.log(price);



// optional semi advanced ternary

price = isLeader === true ? (price = price > 1000 ? price / 2 : 0) : price + 1000; // 2500
console.log(price);

