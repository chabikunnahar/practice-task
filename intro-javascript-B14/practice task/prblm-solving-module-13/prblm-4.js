//Write a program that prints the numbers from 1 to 100.

//If a number is divisible by 3, print "Fizz".If a number is divisible by 5, print "Buzz".If a number is divisible by both 3 and 5, print "FizzBuzz".Otherwise, print the number itself.

//without funtion 
// for(let i = 1; i<=100; i++){
//     // console.log(i);
//     if(i%5===0 && i%3===0){
//         console.log("FizzBuzz");
//     }
//     else if (i%3===0){
//         console.log("Fizz");
//     }
//     else if (i%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }


// }

//with Function
function checkFizzBuzz(number){
 for(let i = 1; i<=number; i++){
    // console.log(i);
    if(i%5===0 && i%3===0){
        console.log("FizzBuzz");
    }
    else if (i%3===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }


}   
}
const result = checkFizzBuzz(20)
console.log(result);