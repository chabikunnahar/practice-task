// sumAllPrices(prices) — for...of Given an array of numbers, return their sum using for...of.
const sumAllPrices=(prices)=>{
    let sum = 0;
    for(let number of prices){
      sum = sum + number;
    }
    return sum;
} 
console.log(sumAllPrices( [100, 250, 75]));