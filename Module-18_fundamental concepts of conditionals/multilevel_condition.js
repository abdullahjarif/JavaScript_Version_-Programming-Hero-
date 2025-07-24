/**
 * multilevel conditon
 */
const price = 4000;
if(price>5000){

    const discount = price * 0.1;
    console.log("your discount price " + discount + " tk.");
    
    const payAmount = price - discount;
    console.log("Pay korte hobe " + payAmount +" tk.");
    
}
else if(price >= 2500){

    const discount = price * 0.05;
    console.log("your discount price " + discount + " tk.");
    
    const payAmount = price - discount;
    console.log("Pay korte hobe " + payAmount +" tk.");

}
else{
    console.log("your price is " + price +" tk. There is no available discount right now.");  
}