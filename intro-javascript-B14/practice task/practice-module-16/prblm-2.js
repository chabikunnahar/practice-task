function bookTicket(movie, seats = 1, pricePerSeat =300){
// Return "Invalid" যদি movie String না হয় অথবা seats/pricePerSeat Negative Number হয়।
if(typeof movie !=="string" || seats<0 || pricePerSeat<0){
    return "Invalid"
}
 const total = seats * pricePerSeat;
//  <movie>: <seats> seat(s), Total ৳<total>"
 return `${movie} : ${seats} seats, Total ৳ ${total}`; 
}

// Arrow function

const bookedTicket = (movie, seats = 1, pricePerSeat =300) =>{

}
console.log(bookTicket("Jawan"));
console.log(bookTicket("Pathaan", 2));
console.log(bookTicket("Avatar", 4, 500));
console.log(bookTicket("The Dark Knight", 3));