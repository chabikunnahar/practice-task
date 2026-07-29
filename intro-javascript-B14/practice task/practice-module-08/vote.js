//using age and hasID, use nested if-else to check whether someone is eligible to vote.
let age = 18;
let hasID = true;
if (age>=18){
    if(!hasID){
        console.log("Eligible to Vote");
    }
    else{
        console.log("ID Required");
    }
}
else{
    console.log("NOt Eligible");
}

