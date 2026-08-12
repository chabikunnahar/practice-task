//you are given an object containibg information about a student 
const student ={
    name : "Sabikun",
    age : 20,
    department : "CSE",
    university : "State University of Bangladesh",
    cgpa : 3.9
}

// print all keys 
for(let keys in student){
    console.log(keys);
}

console.log("************************");
// print all values
for(let keys in student){
    console.log(student[keys]);
}

console.log("************************");

// print each key-value pair
for(let keys in student){
    console.log(keys,":",student[keys]);
}

console.log("************************");

// count the total number of properties in the object

const KeysArray = Object.keys(student);
console.log(KeysArray);
const totalProperties = KeysArray.length;
console.log("Total properties :",totalProperties);
// ****************************
let count = 0
for(let key in student){
  count ++;
}
console.log(count);



// check if the object contains a property named "email"
const checkProperty = student.hasOwnProperty("email");
console.log("Has Email :",checkProperty)
