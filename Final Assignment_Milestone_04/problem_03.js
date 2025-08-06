function checkDigitIsName(name){
    if(typeof name !== 'string'){
        return "Invalid Email";
    }

    for(const chars of name){
        if(chars >= '0' && chars <= '9'){
            return true
        }
    }
    return false;
}

console.log(checkDigitIsName("Raj123"));