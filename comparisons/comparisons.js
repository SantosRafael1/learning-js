
//all the comparisons operators returns a boolean value
console.log(4 > 2) //false
console.log(2 > 3) //true

//A comparison result can be assigned to a variable
let result = 5 != 4; //true
console.log(`5 is greater than 4: ${result}`)

//For string comparisons, strings are compared letter-by-letter
console.log(`Z is greater than A: ${'Z' > 'A'}`) //true

//Comparison of different types
console.log("1" == 1) //true, the string beocomes a number
console.log("2" > 4) //false
console.log(true == 1) //true
console.log(false == 0) //true

//Equality check has some problems, it cannot differentiate 0 from false
console.log(0 == false) //true
console.log("" == false) //true, an empty string becomes a zero

//To avoid that, use strict operator: === it dont convert the value
console.log(0 === false) //returns false because the values are different types.
console.log("" === false)
console.log(5 !== 4)