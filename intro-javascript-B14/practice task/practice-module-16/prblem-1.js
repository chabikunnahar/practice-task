// Input
// Function একটি Parameter গ্রহণ করবে — keyword (String): "var" / "let" / "const"
// নিয়ম (Rules)
// "var" হলে Return করবে "Can redeclare, can reassign"
// "let" হলে Return করবে "Cannot redeclare, can reassign"
// "const" হলে Return করবে "Cannot redeclare, cannot reassign"
// Validation
// Return "Invalid" যদি keyword এই তিনটির একটিও না হয়।

// Traditional function
function describeDeclaration(keyWord){
    if (keyWord !=="var" && keyWord !=="let" && keyWord !=="const"){
        return "Invalid"
    }
    if(keyWord ==="var"){
        return "Can redeclare, can reassign";
    }
    else if (keyWord ==="let"){
        return "Cannot redeclare, can reassign";
    }
    
    return "Cannot redeclare, cannot reassign";


}
console.log(describeDeclaration("const"));


// Arrow function
 const keyWordDescribe = (keyWord) =>{
if (keyWord !=="var" && keyWord !=="let" && keyWord !=="const"){
        return "Invalid"
    }
    if(keyWord ==="var"){
        return "Can redeclare, can reassign";
    }
    else if (keyWord ==="let"){
        return "Cannot redeclare, can reassign";
    }
    
    return "Cannot redeclare, cannot reassign";
}
 console.log(keyWordDescribe("var"));
console.log(keyWordDescribe("let"));
console.log(keyWordDescribe("const"));
console.log(keyWordDescribe("abc"));