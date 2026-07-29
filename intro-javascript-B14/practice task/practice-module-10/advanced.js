//1. Given an array of numbers, remove duplicates and log the unique values only.
const num = [1, 2, 3, 2, 4, 5, 1, 6];
let uniqueArray =[];
for(let i=0;i<num.length;i++){
    

    if (uniqueArray.includes(num[i])){
        continue
    }
    else {
        uniqueArray.push(num[i]);
    }
    }
    console.log(uniqueArray);

//2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.
const mixedArray = ["sabee",26,"jubly",8, 5,'EEE'];
let numberArray = [];
let stringArray = [];
for(let i = 0;i<mixedArray.length;i++){
   if(typeof mixedArray[i] === 'number'){
    numberArray.push(mixedArray[i]);
   }
   else if(typeof mixedArray[i] === 'string') {
    stringArray.push(mixedArray[i]);
   }
}
console.log("Number Array",numberArray);
console.log("String Array ",stringArray);

//3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).
const numbers =[22,68,25,67,33,78];

let maxValue = numbers[0];
let minValue  = numbers[0];
for(let i=0;i<numbers.length;i++){
   if(numbers[i]>maxValue){
     maxValue = numbers[i];
   }
   if(numbers[i] < minValue){
    minValue = number[i];
   }
   
}
console.log(minValue);
console.log(maxValue);

//4. Flatten a nested array (array containing arrays) into a single flat array.

//5. Rotate an array left by one position (first item moves to the end). Log the result.
 const arr = [
    [2,3],[4,7],[3,6]
 ];
const flatArray = [ ];
for(let i =0;i<arr.length;i++){
    // console.log(arr[i]);
    for(let j=0;j<arr[i].length;j++){ //arr[i].length means arr[i] er length .
        flatArray.push(arr[i][j]);
        // console.log(arr[i][j]);
    }
}
console.log(flatArray);

//5. Rotate an array left by one position (first item moves to the end). Log the result.
const num1 = [2,4,7,8,5,3,9];
let rev = [];
for(let i=num1.length-1;i>=0;i--){
    rev.push(num1[i]);  
}
console.log(rev);
