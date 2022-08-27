//Arrow functions is another very concise way to create a function, even better than function expression. It look like this:
let sum = (a, b) => a + b;
console.log(sum(5, 5));

let double = (n) => n*2;
console.log(double(2));

//if there are no parameters, parentheses must be empty
let saySomething = () => console.log("Gibberish");
saySomething();

//It can be used like function expression to create function dinamically
let age = 18;

let welcome = (age < 18) ?
    () => console.log("Hello") :
    () => console.log("Greetings");

welcome();

//multiline arrow function
let multiplication = (a, b) => {
    let result = a * b;
    return result;
};

console.log(multiplication(5, 9));