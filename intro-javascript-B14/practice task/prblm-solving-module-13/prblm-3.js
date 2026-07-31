// factorial of a number 

//without function
const number = 7;
let multi = 1;
for(let i = 1;i<=number;i++){
    multi = i * multi;
}
console.log(multi);

//with function
 function factorialOfNumber(number){
let multi = 1;
for(let i = 1;i<=number;i++){
    multi = multi * i;
}
return multi;
}
 const result = factorialOfNumber(10);
 console.log(result);