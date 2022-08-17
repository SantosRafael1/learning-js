//An OPERAND is what operators is applied to.
//For instance:
console.log(5 * 1); //5 and 1 is the operands here.

//UNARY - if an operator has a single operand:
let x = 5;

x = -x;
console.log(x);

//BINARY - if the operator has two operands
let z = 3, y = 5;
console.log(z - y); //binary operator

//REMAINDER
console.log(5 % 2) //remainder of 5 divided by 2

//EXPONENTIATION
console.log(2 ** 2) //2²
console.log(5 ** 4) // 5 power 4
console.log(2 ** (4 / 2))

//CONCATENATION with binary +
let s = "my" + "string";
console.log(s);
console.log("1" + 2) //12, it is converted to string
console.log(2 + "1") // 21
console.log(2 + 2 + "1") //41, the first two values are integers, then it must return integer and concatenate with the string "1"

//others operators that is not + always converts the operands to numbers
console.log(5 - "2");
console.log("6" / "2") //converts both operands to number

//Plus operator applied to a unary operation doesn't do anything if the operands is just numbers
let f = 1
console.log(+f)

//If the operands is not number, the unary plus converts it to number
console.log(+true) //1
console.log(+false) //0

//converting string values to integer
let apples = "5"
let oranges = "3"

console.log(+apples + +oranges)

//Chaining assigments
let a, b, c;
a = b = c = 3 + 1; //they all have the same value
console.log(a)
console.log(b)
console.log(c)