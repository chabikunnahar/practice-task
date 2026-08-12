const mergeInventory =(arr1,arr2)=>{
if(!Array.isArray(arr1)|| !Array.isArray(arr2)){
    return "Invalid";
}
const final = [...arr1,...arr2];
return final;
}
console.log(mergeInventory([1,2],[3,4]))
console.log(mergeInventory([1,2,3,4,(4,5,6)]))

const highestScore =(numbers)=>{
    if(!Array.isArray(numbers)){
        return "Invalid"
    }
return (Math.max(...numbers));
}
console.log(highestScore([3,7,2,9,4]));
console.log(highestScore("3,7,2"));