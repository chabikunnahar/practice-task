//getEmployeeDept(employee)—Nested Destructuring...Given{name, job:{ title, department } }, return { title, department } using nested destructuring.
const getEmployeeDept=(employee)=>{
    const {job:{title,department}}=employee;
    return {title,department};
}

const obj = { 
    name: "Nadia", 
    job: { title: "PM", department: "Product" } 
}
console.log(getEmployeeDept(obj));