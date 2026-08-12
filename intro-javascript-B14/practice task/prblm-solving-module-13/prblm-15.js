// return All even numbers ,and then their sum
// without function
// const arr = [10,20,50,150,6,7,9,11,23];
// let evenNumbers =[];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         evenNumbers.push(arr[i]);
//         sum += arr[i];
//     }
// }
// console.log(evenNumbers)
// console.log(sum);

// with function

// function for even number Array
function evenNumbers(arr){
    let evenNumbers =[];
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenNumbers.push(arr[i]);
    }
}
return evenNumbers;
}
const FinalArray = evenNumbers([10,20,50,150,6,7,9,11,23])
console.log(FinalArray);

// function for All even number sum  of an array

function sumOfEven(sum){
    let evenSum = 0;
    for(let i =0;i<sum.length;i++){
        evenSum += sum[i];
    }
    return evenSum;
}
const sumEven = sumOfEven(FinalArray);
console.log(sumEven);