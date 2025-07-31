console.log("Skip Odd Value");

for(let i=0; i<=40; i++){ // skip odd
    if(i%2 === 0){
        continue;
    }
    console.log(i);
    
}

console.log("Skip divisible by 5 Value");
for(let j=55; j<=85; j++){
    if(j%5 === 0){
        continue;
    }
    console.log(j);
}