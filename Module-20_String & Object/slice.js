const country = "Bangladesh";
const part = country.slice(0,6);
console.log(part);

// split()

const sentence = "he is good and hardworking person";
console.log(sentence);

console.log(sentence.split('')); // split letter by letter
console.log(sentence.split(' ')); // split word by word

const friendsStr = "Jarif, Rahim, Karim, Fahim, Dalim";
console.log(friendsStr.split(','));

const realFriendStr = ["Jarif", "Rahim", "Karim", "Fahim", "Dalim"];
console.log(realFriendStr.join(' + '));



