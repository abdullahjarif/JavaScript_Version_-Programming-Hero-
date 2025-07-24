let age = 37;
let price = 1500; // let's say food price = 500

if(age <= 12){
    console.log("your food is free");
} else if (age >= 60){
    // 50% discount
    const discount = price * 0.3;

    console.log("your discount amount " + discount +" tk.");
       
    const payAmount = price - discount;

    console.log("tomake pay korte hobe " + payAmount +" tk.");

}else if(age >= 45){
    // 25% discount
    const discount = price * 0.25;

    console.log("your discount amount " + discount +" tk.");
       
    const payAmount = price - discount;

    console.log("tomake pay korte hobe " + payAmount +" tk.");
}else if (age>=35){
    // 10% discount
    const discount = price * 0.1;

    console.log("your discount amount " + discount +" tk.");
       
    const payAmount = price - discount;

    console.log("tomake pay korte hobe " + payAmount +" tk.");
}

else{

    console.log("you pay fully " + price +" tk.");
    
}
