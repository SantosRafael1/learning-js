
//String conversion
let value = true;

value = String(value); //converts value to str. Now it is "true"
console.log(typeof value);

//Numeric conversion

console.log("4" / "2"); //math operation is automatically converted to numberic

//converting explicitly
let str = "123";
console.log(typeof str);
let n = Number(str);
console.log(typeof n);

//Boolean conversion:
//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, 
//become false. Other values become true.

console.log( Boolean(1) ) //true
console.log( Boolean(0) ) //false

console.log( Boolean("Hello") ) //true
console.log( Boolean("") ) // false