// count vowels in a string 

// without function
const str ="proghramming hero";
let count = 0;
for(let i =0;i<str.length;i++){
    if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
        count++;
    }
}
console.log(count);

// with function
function findVowel(str){
    let count = 0;
for(let i =0;i<str.length;i++){
    if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
        count++;
    }
}
return count ;

}
const result = findVowel("Bangladesh");
const result1 = findVowel("A quick brown fox jumps over the lazy dog");
console.log(result);
console.log(result1);