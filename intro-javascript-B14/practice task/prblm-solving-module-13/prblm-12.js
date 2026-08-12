// filter numbers greater than a value

// without function
const numbers = [12, 45, 7, 89, 23, 56, 91, 34];
const num = 45;
let filterArray = [];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>num){
        filterArray.push(numbers[i]);
    }
}
console.log(filterArray);

// with function
function filterTheNumber(Array,num){
let filterArray = [];
for(let i=0;i<Array.length;i++){
    if(Array[i]>num){
        filterArray.push(Array[i]);
    }
} 
return filterArray; 
}
const result = filterTheNumber([5, 10, 15, 20, 25, 30, 35, 40],25);
console.log(result);