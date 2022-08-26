//A function in JS is a special kind of value, therefore, can be an expression

//This is a function expression:
let sayHi = function () {
    console.log("Hello World!");
};

sayHi();

//As a function is a value, we can even copy it to another variable
let func = sayHi;
func();

console.log(typeof func); //function
