const school = "RAJ UK Uttara Model School and College";

console.log(school);
console.log(school.toLowerCase()); // convert lowercase
console.log(school.toUpperCase()); // convert uppercase


const subject = "Chemistry";
const book = "ChemIsTry";

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("Case same");
    
}else{
    console.log("Different case");
    
}

// trim()
const drink = " water";
const liquid = " water     "

if(drink.trim() === liquid.trim()){
    console.log("Case same");
    
}else{
    console.log("Different Case");
    
}