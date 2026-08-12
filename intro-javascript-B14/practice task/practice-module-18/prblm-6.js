//promoteEmployee(employee, newTitle) — Spread + Immutable Update Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
const promoteEmployee = (employee, newTitle)=>{
    const newEmployee = {...employee,title:newTitle};
    // console.log(employee)
    // console.log(newEmployee);
    return newEmployee;
    
}
console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"))