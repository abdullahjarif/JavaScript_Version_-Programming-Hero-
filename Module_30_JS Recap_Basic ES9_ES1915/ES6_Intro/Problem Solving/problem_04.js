const findMaxArray = (arr1, arr2) => {
    const combinedArr = ([...arr1, ...arr2]);
    // return Math.max(...combinedArr);
    return Math.min(...combinedArr);
}

const arr1 = [10, 20, 30];
const arr2 = [5, 15, 25];
// const result = findMaxArray(arr1, arr2);
const result2 = findMaxArray(arr1, arr2);
// console.log(result);
console.log(result2);