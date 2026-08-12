function extractUserInfo(userObj){
    const{user:{name:userName ="sabikun",
        age:userAge = 21
    },
    hobbies
    }
    = userObj;
    const [firstHobby ="programming"]= hobbies;
    if(!userName){
        return `Invalid`;
    }
    // "<name> (<age>) likes <firstHobby>"
   return `${userName} (${userAge}) likes ${firstHobby}`

}
const mainObj = extractUserInfo({
    user: {
        name: "Rahim",
        age: 22
    },
    hobbies: ["Coding", "Reading"]
});
console.log(mainObj);







// const {user: {name: userName,age},hobbies} = userObj;
// const object ={
//     user: {
//         name: "Rahim",
//         age: 22
//     },
//     hobbies: ["Coding", "Reading"]
// };
// const{user:{age = 34}} = object;
// const{hobbies:[first,second]} = object;
// console.log(age);
// console.log(first,second);