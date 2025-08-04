function calculateTax(income, expanses){
    if (income > 0 || expanse > 0 || income >= expanses) {

        let difference = income - expanses;
        let tax = difference * 0.20;
        return tax;
        
    }else{
        return "Invalid Input";

    }
    
}

let totalCalculateResult = calculateTax(10000, 3000);
console.log("Total payable tax is ",totalCalculateResult);
let totalCalculateResult2 = calculateTax(34000, 1753);
console.log("Total payable tax is ",totalCalculateResult2);
