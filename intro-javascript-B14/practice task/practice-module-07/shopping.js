let productName = "Wireless Mouse";
let price = 15;
let quantity= 4;
let taxPersent = 5;
let subTotal = price*quantity;
let taxAmount = subTotal *(taxPersent /100);
let finalPrice = subTotal + taxAmount;

console.log("----Shopping Bill----");
console.log("Producgt Name :", productName);
console.log("Price per unit :",price);
console.log("Quantity :", quantity);
console.log("SubTotal :",subTotal);
console.log("Tax (" + taxPersent + "%):", taxAmount) ;
console.log("Final Price :",finalPrice );
console.log("-----------------------------");
