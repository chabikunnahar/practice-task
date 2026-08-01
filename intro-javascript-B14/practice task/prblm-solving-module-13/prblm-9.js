//find the largest number in an array

// without function

const number = [500, 120,20, 5010,1220];
let largest =number[0];
for(let i=0;i<number.length;i++){
    if(largest < number[i]){
        largest = number[i];
    }

}
console.log(largest);

// with function
function max(numbers){
    let largest =numbers[0];
for(let i=0;i<numbers.length;i++){
    if(largest < numbers[i]){
        largest = numbers[i];
    }

}
return largest;
}
const result =max([500, 120,20, 5010,1220,10000]);
console.log(result)