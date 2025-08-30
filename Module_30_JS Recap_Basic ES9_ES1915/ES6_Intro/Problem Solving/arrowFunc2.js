const givenNameLength = (friends) => {
    const evenNameLength = [];
    for(const name of friends){
        if(name.length % 2 === 0){
            evenNameLength.push(name);
        }
    }
    return evenNameLength;
};

console.log(givenNameLength(['Asabeneh', 'Mathias', 'Elias', 'Brook', 'David', 'John'])); 