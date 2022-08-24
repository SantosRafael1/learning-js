//OR operator; there is four possible logical operations.
//OR always returns true except when both operands are false.
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

let hour = 9
//the first condition is true
if(hour < 10 || hour > 12){
    console.log("The office is closed!")
}

//AND operator: returns true if both operands are true, otherwise false
//AND operator find the first falsy value
let a = 10
let b = 12
if(a == 10 && b == 12) {
    console.log("The time is 10:12")
}

//NOT operator: converts the original value to its opposite
let trueValue = true 
trueValue = !trueValue
console.log(trueValue) //retuns false