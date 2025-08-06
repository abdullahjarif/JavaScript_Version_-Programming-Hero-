function calculateFinalScore(obj){
    // if input doesn't object give "Invalid Input" error message
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    
    
    const {name, testScore, schoolGrade , isFFamily} = obj;
    
    if(typeof name !== 'string' || typeof testScore !== 'number' || testScore >= 50 || typeof schoolGrade !== 'number' || schoolGrade >= 30 || typeof  isFFamily !== 'boolean'){
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;

    if(isFFamily){
        finalScore = finalScore + 20;
    }
    return finalScore>=80;
}

console.log(calculateFinalScore(
    { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
));
console.log(calculateFinalScore(
    { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
));
console.log(calculateFinalScore(
    "hello" 
));
