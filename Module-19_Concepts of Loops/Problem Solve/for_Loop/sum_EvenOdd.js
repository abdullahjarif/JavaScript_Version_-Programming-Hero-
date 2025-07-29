// let num = 1;
// let sum = 0;

// while(num <= 10){
    
//     console.log(num);

//     if(num % 2 !== 0){
    //         console.log(num + " is odd");
    //         sum = sum + num;
    //     }
    //     num++;
    // }
    // console.log("Total Sum is " + sum);  
    
    
    let sum = 0;
    for(let num = 1; num <= 10; num++){
        if(num % 2 !== 0){
            console.log(num);
            console.log(num + " is odd");
            sum = sum + num;
            
        }else{
            console.log(num);
            console.log(num + " is even");
            // sum = sum + num;
            
        }
    }
    console.log("Total Sum is " + sum);  