// count word in a sentence 

// without function
const sentence = "I Love Bangladesh";
let divideSentence = sentence.split(" ");
// console.log(divideSentence);
console.log(divideSentence.length);


// with function
function countWords(sentence){
let sentenceToArray =  sentence.split(" ");
const word = sentenceToArray.length
return word;
// return sentenceToArray;

}
const result = countWords("I am learning JavaScript every day.")
console.log(result);