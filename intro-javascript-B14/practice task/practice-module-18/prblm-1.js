// calculateBill(amount, taxRate = 0.05) — Default Parameters Return the final bill after tax is applied. Default tax rate is 5% when not provided.

const calculateBill =(amount, taxRate = 0.05)=>amount+(amount*taxRate);
console.log(calculateBill(1000,.10));
console.log(calculateBill(1000,.50));
