const mixedArray = ["sabee",26,"jubly",8, 5,'EEE'];
let nums =[];
let strg =[];
for(let i = 0;i<mixedArray.length;i++){
   if(typeof mixedArray[i] === 'number'){
    nums.push(mixedArray[i]);
      }
      else{
        strg.push(mixedArray[i]);
      }
    }
console.log(nums);
console.log(strg);