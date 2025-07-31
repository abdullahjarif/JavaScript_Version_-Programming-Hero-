// decremental while loop 
let n = 20;
while(n>=11){
    console.log(n);
    n--; 
}

// incremental while loop 
let m = 11;
while(m<=20){
    console.log(m);
    m++; 
}

// give me 1 to 30 which is divisible by 5
console.log("Divisible Result");
for(let k = 1; k<=30; k++){
    if(k % 5 === 0){
        console.log(k);
        
    }
}

// give me 1 to 30 which is divisible by 3
console.log("Divisible by 3 Result");
for(let j = 1; j<=30; j++){
    if(j % 3 === 0){
        console.log(j);
        
    }
}

// give me 1 to 30 which is divisible by 3
console.log("Divisible by 3 sum Result");
let sum = 0
for(let j = 1; j<=30; j++){
    if(j % 3 === 0){
        console.log(j);
        sum = sum + j;
        
    }
}
console.log("Sum Result ", sum);


// give me 1 to 30 which is divisible by 3 or 5 --> union 
console.log("Divisible by 3 or 5 Result");
for(let j = 1; j<=30; j++){
    if(j % 3 === 0 || j % 5 === 0){
        console.log(j);
        
    }
}

// give me 1 to 30 which is divisible by 3 and 5 --> intersection
console.log("Divisible by 3 and 5 Result");
for(let j = 1; j<=30; j++){
    if(j % 3 === 0 && j % 5 === 0){
        console.log(j);
        
    }
}

// give me 1 to 30 which is divisible by 3 and 5 --> intersection
console.log("Divisible by 3 and 5 sum Result");
let total = 0;
for(let j = 1; j<=30; j++){
    if(j % 3 === 0 && j % 5 === 0){
        console.log(j);
        total = total + j;
        console.log("Result ",total);
        
    }
}
console.log("Sum Result ",total);

