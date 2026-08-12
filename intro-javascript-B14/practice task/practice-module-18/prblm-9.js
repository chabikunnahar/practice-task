// splitFirstRest(arr) — Rest Syntax ,,,Return { first, rest } where first is the first element and rest is an array of all remaining elements.
const  splitFirstRest=(arr)=>{
    const[first,...rest]=arr;
    return {first,rest};
}
console.log(splitFirstRest([10, 20, 30, 40]));