//check a number is Odd or Even
function checkOddEven(a){
    if (a%2===0){
        const result ="The number is Even";
        // const result = console.log("The number is Even" , a);
        return result;
    } else {
        const result = "The number is Odd";
        return result;
    }
}
const number = checkOddEven(7);
console.log(number);