/*function calculateBMI(Weight, Height ){
if(Weight<=0 || Height<=0){
    return "Invalid";
}
const BMI =  Weight / (Height * Height);
const ecxactBMI = Number(BMI.toFixed(2))
return ecxactBMI;

}*/


//Arrow Function
const calculateBMI = (Weight, Height )=>{
  if(Weight<=0 || Height<=0){
    return "Invalid";
} 
const BMI =  Weight / (Height * Height);
const ecxactBMI = Number(BMI.toFixed(2))
return ecxactBMI; 
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));
