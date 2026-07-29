//Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

let username = "snjubly708";
let password = "sabikun150";
let role = "Admin";
if (username === "snjubly708" && password === "sabikun150") {
    console.log("Login Successful");
    
   let result = ( role === "Admin"?"Welcome Admin": "Welcome User"); 
   console.log(result)   
}
else {
    console.log("Invalid Login");
}