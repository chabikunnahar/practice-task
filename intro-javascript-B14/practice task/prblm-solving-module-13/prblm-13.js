// loop through an objects properties
// without function
// case-1
const college = {
    name:"sabee",
    id :78,
    sub:"math"
}
for(let key in college){
    console.log(key,":",college[key])
}

//case -2
const keys = Object.keys(college);
console.log(keys);
for(let i =0;i<keys.length;i++){
    // console.log(keys[i]);
    const key = keys[i];
    console.log(key,":",college[key]);
}
// const values = Object.values(college)
// console.log(values)
// const keys = Object.keys(college);
// console.log(keys);

// with function 
function objects(college){
const keys = Object.keys(college);
// console.log(keys);
for(let i =0;i<keys.length;i++){
    // console.log(keys[i]);
    const key = keys[i];
     console.log(key,":",college[key]);
}
}
const student = {
    name: "Sabikun",
    age: 20,
    department: "CSE",
    university: "State University of Bangladesh",
    cgpa: 3.90,
    isGraduated: false
};
const result = objects(student);