//find the smallest number in an array
// without function
const number = [500, 120,20, 5010,1220];
let smallest =number[0];
for(let i=0;i<number.length;i++){
    if(smallest > number[i]){
         smallest = number[i];
    }

}
console.log(smallest);

//  with function
function min(numbers){
   let smallest =numbers[0];
for(let i=0;i<numbers.length;i++){
    if(smallest > numbers[i]){
         smallest = numbers[i];
    }

}
return smallest; 
}
const result =min([500, 120,20, 5010,1220,10]);
console.log(result)