/* Function তিনটি Parameter গ্রহণ করবে — customerName (String), items (Array of String), total (Number)
Output / নিয়ম
Template Literal (backtick) ব্যবহার করে Multi-line String Return করতে হবে
Format exactly:Receipt for <customerName>Items: <item1, item2, ...>Total: ৳<total>
Return "Invalid" যদি items Array না হয় অথবা Empty হয়।
 */
function  generateReceipt (customerName, items, total){
if (!Array.isArray(items)|| items.length === 0 ||  typeof total !=="number" ){
    return "Invalid"
}
return `Recipt for ${customerName}\nItems : ${items}\nTotal :৳${total} `
}
console.log(generateReceipt(
    "Sabikun Nahar",
    ["Burger", "Fries", "Coke"],
    750
));
console.log(generateReceipt("Rahim", "Burger", 300));
console.log(generateReceipt("Rahim", ["Burger"], "three Hundred"));