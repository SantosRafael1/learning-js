//JS is dinamically typed, so it is not necessary specify the type of the variable;

//number
let n = 123; //automatically becomes an integer
n = 2.33 //It is now a double

console.log(1/0) //Infinity is a special value that is greater than any number
console.log("not a number" / 2); //NaN is a computational error

//Strings
let str = "Rafa";
let message = `My name is ${str}`;
console.log(message);
console.log(`The result is ${4 + 2}`);

//boolean
let isTrue = true;
let isFalse = false;

console.log(isTrue);
console.log(isFalse);

let isGreater = 4 > 5; //returns a boolean value
console.log(isGreater); //false

//null

let something = null; //null represents nothing, empty or even an unknown value
console.log(something); //prints null

//undefined

let age;
console.log(age); //undefined means that a value is not assigned