let weight = 75.0;
let height = 1.75;

let BMI = weight / (height)^2;

console.log("Your BMI is " + BMI);

if(BMI < 18.5){
    console.log("You are underweight");
    
}else{
    if(BMI <= 24.9){
        console.log("You are normal");
        
    }else{
        if(BMI <= 29.9){
            console.log("you are overweight");
            
        }else{
            console.log("you are obese");
            
        }
    }
    
}
