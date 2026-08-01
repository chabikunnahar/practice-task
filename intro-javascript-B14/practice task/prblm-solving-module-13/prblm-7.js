// check if a string is palindrom
// without function 
const str = "madam";
// const str = "Zara";

let reverse = '';
for(let i = str.length-1;i>=0;i--){
    // console.log(str[i]);
    reverse += str[i];
}
if(str===reverse){
        // return "palindrom";
        console.log("palindrom");
    }
else{
        // return "not palindrom";
        console.log("Not palindrom");
    }

// with function
function  strReverse(str){
    let reverse = ""
    for(let i = str.length-1;i>=0;i--){
        reverse +=str[i];
    }
if(str===reverse){
    return "palindrom";
}
else{
    return "not palindrom"
}
}
const result = strReverse("palindrom")
const result1 = strReverse("121")
console.log(result);
console.log(result1);

