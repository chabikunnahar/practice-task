//1. Create an array with 3 items of your choice. Log it.
const arr = ['redu','khaled','imran'];
console.log(arr);

//2. Log the length of the array from Task 1.
const length = arr.length
 console.log(length)

//3. Log the item at index 0 and index 2 of the array.
 console.log(arr[0]);
 console.log(arr[2]);

//4. Change the item at index 1 to a new value. Log the array.
arr[1]= 'sabu';
console.log(arr);

//5. Add one item to the end of the array. Log the array.
arr.push('miku');
console.log(arr);
//6. Remove the last item from the array. Log the array and the removed value.
 const lastItem = arr.pop();
 console.log(lastItem);
 console.log(arr);

//7. Add one item to the start of the array. Log the array.
arr.unshift("sumu");
console.log(arr);

//8. Remove the first item from the array. Log the array and the removed value.
const firstItem = arr.shift();
console.log(firstItem);
console.log(arr);
//9. Check whether the array contains a specific value. Log true or false.
const contains = arr.includes('redu');
console.log(contains);
//10. Find the position of a specific value in the array. Log the number.
const position = arr.indexOf('imran');
console.log(position);

//11. Loop through the array with a for loop and log each item.
const numbers = [1,3,6,8,9,23,34,56,7,5,20];
// for(const number of numbers){
//     console.log(number);
// }
for(i=0;i<numbers.length;i++){
    console.log(i);
    console.log(numbers[i]);
}



//12. Loop through the array with a while loop and log each item.
const friends = ["jiba","marjia","sanju","borshu","sabu"];
let a = 0;
while(a< friends.length){
    console.log(a,friends[a]);
   a++;
}

