const sqrArr = (numbers) => {
    let sum = 0;
    for (let number of numbers) {
        let squared = number * number;
        sum = sum + squared; 
    }
    let avg = sum / numbers.length; 
    return avg;
};

console.log(sqrArr([1, 2, 3, 4, 5])); 
