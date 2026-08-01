// sum and average of an array

// without function
const numbers = [12, 45, 7, 89, 23, 56, 91, 34];
let sum = 0;
for(let num of numbers){
    sum = sum +num;
}
let average = sum/numbers.length
console.log(sum,average)


// with function

function sumAndAverage(numbers){
let sum = 0;
for(let num of numbers){
    sum = sum +num;
}
let average = sum/numbers.length
return{
    sum,
    average
}
}
const result = sumAndAverage([12, 45, 7, 89, 23, 56, 91, 34]);
console.log(result);