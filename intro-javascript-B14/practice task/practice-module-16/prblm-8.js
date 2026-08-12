function printObjectDetails(obj, loopType){
    if(loopType !=="forin" && loopType !== "forofentries" && loopType !==  "entriesDestructure"){
        return `Invalid ${loopType}`
    }
    let result = []
    if(loopType === "forin"){
        // const keysOfArray = Object.keys(obj);
        // return keysOfArray;
        for (let key in obj){
            result.push(`${key}:${obj[key]}`);
        }
        return result;
    }
    
    if(loopType === "forofentries"){
        const entiresObj = Object.entries(obj);
        console.log(entiresObj);
       for(const [[key1 ,value1],[key2,value2]] =entiresObj ){
        // console.log(key1,value1);
        // console.log(key2,value2);
    }
}
    if(loopType === "entriesDestructure"){
         return Object.entries(obj).map
    }
}
// console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "forofentries"));
// console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"));