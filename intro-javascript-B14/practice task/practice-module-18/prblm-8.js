// getManagerName(employee) — Optional Chaining ...Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
const getManagerName=(employee)=>{
     const result = employee?.manager?.name;
     return result;
}
console.log(getManagerName(  { name: "Mim", manager: { name: "Tanvir" } }))
console.log(getManagerName({ name: "Rafi" }))
