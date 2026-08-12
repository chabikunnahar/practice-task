//cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
const cloneAndUpdate=(arr, index, newValue)=>{
    const newArr = [...arr];
    newArr[index]= newValue;
    return newArr;
    // console.log(arr)
    // console.log(newArr)
}
console.log(cloneAndUpdate([5, 10, 15], 1, 99))