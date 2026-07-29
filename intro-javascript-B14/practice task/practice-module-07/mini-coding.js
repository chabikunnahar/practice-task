let price = 200;
let quantity = 3;
let discount = 10;
let totalPrice = price * quantity;
let discountPrice = totalPrice*(discount/100);
let finalPrice =  totalPrice - discountPrice;

console.log(finalPrice);

console.log("Total Price:", totalPrice);

console.log("Discount Amount:", discountPrice);

console.log("Final Price:", finalPrice);