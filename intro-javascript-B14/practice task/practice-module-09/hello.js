//01. Write a for loop that prints "Hello" 5 times.

for (let i=1;i<=5;i++){
    console.log("Hello", i);
}


//02. Write a for loop that prints numbers from 1 to 10.

for(let i = 1; i<=10;i++){
    console.log(i);
}

//03. Write a while loop that prints numbers from 10 down to 1.

let num = 10;
while(num>=1){
    console.log(num);
    num--;
}

//04. Using a while loop, print "Loop চলছে" exactly 7 times.

let count = 1;
while(count <= 7){
    console.log("Loop চলছে",count);
    count++;
}

//05. Write a for loop that prints all even numbers between 1 and 30.

for(let i = 1;i<=30;i++){
    if(i%2===0){
    console.log(i);
    }
}

//06. Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum = 0;
for(let i=1;i<=20;i++){
   sum = sum + i;
   
}
console.log(sum);


// 07. Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.

// let number = Number(prompt("Enter a number"));
let number = 5;
for(let i = 1; i<=10;i++){
    console.log(number,'X',i,'=',i*number);
}

//08. Write a for loop that counts down from 20 to 1.

for(let i = 20;i>=1;i--){
    console.log(i);
}

//09. Write a for loop that calculates the sum of all even numbers from 2 to 50.
let sumEven = 0;
for(let i = 2; i<=50;i=i+2){
    sumEven = sumEven + i; 
}
console.log(sumEven);

//10. Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.
 for(let i =1;i<=50;i++){
    if(i>30){
        break;
    }
    console.log(i);
 }

 //11. Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

 for(let i=1;i<=20;i++){
    if(i%4===0){
        continue;
    }
    console.log(i);
 }

 //12. Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.

//  let i = 1;
//  do{
//     console.log(i);
//     i++;
//  } while(i<=5);


 let i = 1;
 do{
    console.log(i);
    i++;
 } while(i>10);

 //13. Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.
//for
 for (let i = 1; i <= 5; i++) {
    console.log(i);
 }
// while
 let a = 1;

while (a <= 5) {
    console.log(a);
    a++;
}

//do-while
let b = 1;

do {
    console.log(b);
    b++;
} while (b <= 5);