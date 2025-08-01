/**
 * Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
console.log(numbers);
var singleStr = '';
for(var name of numbers){
    singleStr += name;
}
console.log(singleStr);
