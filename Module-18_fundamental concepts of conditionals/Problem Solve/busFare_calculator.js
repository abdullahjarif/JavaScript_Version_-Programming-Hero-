let age = 9;
let ticketFare = 1375;

if(age >= 60){
    
    // 15% discount
    let discountFare = ticketFare * 0.15;
    console.log("Discount amount: " + discountFare);
    let payAmount = ticketFare - discountFare;
    console.log("Pay amount: " + payAmount);

}else if (age >= 10){

    // 50% discount
    let discountFare = ticketFare * 0.5;
    console.log("Discount amount: " + discountFare);
    let payAmount = ticketFare - discountFare;
    console.log("Pay amount: " + payAmount);
    
}else{
    console.log("your ticket is free");
    
}