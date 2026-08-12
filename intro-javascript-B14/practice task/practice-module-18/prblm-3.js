//  getLowestPrice(prices) — Spread Operator .....Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).

const getLowestPrice = (prices)=> Math.min(...prices)
const arr = [340, 120, 560, 90]
console.log(getLowestPrice(arr)); 

