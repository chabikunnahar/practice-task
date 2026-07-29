//1. Combine two arrays into one new array. Log the result.
const arr =['a','b','c','d','f'];
const nums =[1,2,3,4,5,6];
const combine = arr.concat(nums);
console.log(combine);

//2. Take a portion of an array (not the whole thing) without changing the original. Log the result.


//3. Turn an array of words into a single sentence string.
const sentence = ["I","am","sabikun"];
const joined = sentence.join(' ');
console.log(joined);

//4. Check two variables (one array, one not) and log whether each is an array.
const vari1 =[2,3,4,5];
const vari2 ="sentence";
console.log(Array.isArray(vari1));
console.log(Array.isArray(vari2));

//5. Reverse an array of at least 5 items. Log the result.
const reverse =['abul','kabul','babul','chabul','mukbul'];
console.log(reverse.reverse());

//6. Sort an array of names alphabetically. Log the result.
const sort =[2,1,5,3,7,8,9,5,4,10];
console.log(sort.sort());
const sort1 = ['sabikun','miku','sabu','redu','nusu'];
console.log(sort1.sort());

//7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).
let numbers = [50, 2, 100, 25, 10];
let ascending = numbers.sort((a,b)=>a-b);
console.log(ascending);

//8. Given an array of numbers, log only the values greater than 10, using a loop.
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>10){
        console.log(numbers[i]);
    }
}

//9. Given an array of numbers, calculate and log the total sum, using a loop.
const num =[5, 12, 8, 20, 3, 15];
 let sum = 0;
 for(let i=0;i<num.length;i++){
    // console.log(num[i]);
    sum = sum+num[i];
    // console.log(sum);
 }
 console.log(sum);