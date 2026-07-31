//sum of a range of numbers(1 to n)
function sumRange(n){
    let sum = 0;
    for(let i =0; i<=n;i++){
        sum = sum + i   
    }
    return sum;
}
// const sum = sumRange(10);
const sum = sumRange(20);
console.log(sum)