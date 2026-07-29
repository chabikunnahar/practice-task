//Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.


// using nested if-else
let cartTotal = 1005;
let isMember = true;
if (cartTotal > 1000){
    if(isMember){
        console.log("get 20% discount");
    }
    else{
        console.log("get 10% discount");
    }
}
else {
    console.log("No Discount");
}

//using logical operators

let cart_Total = 1500;
let ismember = true;

if (cart_Total > 1000 && !ismember) {
    console.log("20% Discount");
}
else if (cart_Total > 1000) {
    console.log("10% Discount");
}
else {
    console.log("No Discount");
}