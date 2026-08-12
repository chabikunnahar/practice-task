function  manageInventoryObject(obj,action){

 // Validation
    if (
        typeof obj !== "object" ||
        obj === null ||
        Array.isArray(obj)
    ) {
        return "Invalid";
    }

    if (
        action !== "keys" &&
        action !== "values" &&
        action !== "entries" &&
        action !== "seal" &&
        action !== "freeze" &&
        !action.startsWith("delete:")
    ) {
        return "Invalid";
    }


  if(action === "keys"){
    return Object.keys(obj);
  }
  if(action === "values"){
    return Object.values(obj);
  }
  if(action === "entires"){
    return Object.entries(obj);
  }
  if(action.startsWith("delete")){
    const actionArray = action.split(":");
     delete obj[actionArray[1]];
     return obj;
}
if(action === "seal"){
 Object.seal(obj);
 return obj;
}
if(action === "freeze"){
  Object.freeze(obj);
  return obj;
}

}

const product = {
    id: 101,
    name: "Laptop",
    brand: "Dell",
    price: 75000,
    stock: 15,
    category: "Electronics"
};