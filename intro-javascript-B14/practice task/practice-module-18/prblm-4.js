//swapValues(a, b) — Destructuring .....Return [b, a] using array destructuring assignment, no temporary variable.
const swapValues = (a, b) => {
    [a,b]=[b,a];
    return [a,b];
}
console.log(swapValues(10,20));