for(let i=1; i<=100; i++){
    for(let j=1; j*j<=i; j++){
        if(j*j === i){
            console.log("square root number found! ",i);
            break;
        }
    }
}
