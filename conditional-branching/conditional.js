//to make decisions, we use conditionals branching
let year = 2000;
if(year == 2000) {
    console.log(`You're right!`);
}

//0 become false
if(0) {
    console.log(`It will not be excuted because 0 become false`);
}

//1 is true
if(1) {
    console.log(`1 become true`)
}

//passing the condition to a variable
let x = (year == 2000)
if(x) {
    console.log(`X is 2000`);
}

//many conditionals
let a = 3;
if(a == 1) {
    console.log(`a is 1`)
} else if(a == 2) {
    console.log(`a is 2`)
} else {
    console.log(`a is 3`)
}

//ternary operator
let age = 20
let accessAllowed = (age > 18) ? true : false;
console.log(`Access allowed? ${accessAllowed}`);

//multiple ternary operator
let number = 18;
let result = (number < 18) ? console.log(`You're so young!`) :
    (number == 18) ? console.log(`Nice age!`) : console.log(`You're getting older!`)
    
