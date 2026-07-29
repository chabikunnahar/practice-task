let hasTicket = true;
let age = 20;
if(!hasTicket && age>18){    // hasTicket = true but !hasTicket = !(not)true = false 
    console.log(" Entry Allowed");
}
else{
    console.log("Not Allowed")
}


//Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).
 
let isWeekend = false;
let isHoliday = true;
if (isWeekend || isHoliday){
    console.log("No work today");
}
else{
    ("No Holiday Today");
}

let isPassword = true;
let isUsername = true;

if (isPassword  && !isUsername){
    console.log("Login successful");
}
else{
    console.log("Invalid Password or username");
}


//Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.
let hasPermission = false;
if (!hasPermission){
    console.log("Access Denied");
}


//Using isOnline, use the NOT operator to print "User is offline".
let isOnline = false;
if (!isOnline){
    console.log("User is offline");
}