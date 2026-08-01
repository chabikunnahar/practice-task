// reverse a string

// without Function
const sentence = "never give up";
let reverse ="";
for (let i = sentence.length-1; i>=0;i--){
    // console.log(sentence[i]);
    reverse +=sentence[i];
}
console.log(reverse);

// with function 
function reverseString(sent){
    let reverse = "";
    for (let i = sent.length-1; i>=0;i--){
        const letter = sent[i];
          reverse += letter;
    }
    return reverse;
    }
const result = reverseString("I Love You");
console.log(result);

// using built-in fucntion 
const str = "I am  a student";
const parts = str.split('')
// console.log(parts);
const reverse1 = parts.reverse()
console.log(reverse1);
const reverseStr = reverse1.join('');
console.log(reverseStr)
