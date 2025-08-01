/**
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

    Input: const statement = 'I am a hard working person'

    Output:

    'person working hard a am I'
 */

const statement = 'I am a hard working person';
const revStatement = statement.split(' ').reverse().join(' ');
// first split this statement word by word
// then reverset this word of statement
// then remove , replace with white space 
console.log(revStatement);

