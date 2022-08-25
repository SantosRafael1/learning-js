//we use functions when we need to repeat the same code many times

function sayHello(){
    console.log("Hello!");
}

sayHello()
sayHello()

//parameters
function showMessage(from, text = ">.<") {
    from = "*" + from + "*" //makes 'from' looks nicer
    console.log(from + ": " + text);
}

showMessage("Rafa", "Hello there!");
showMessage("Anne", "HEY! WHAT'S UP!!");
showMessage("Ann") //text parameter has a default value

//returning value
function checkAge(age) {
    if(age >= 18) {
        return true;
    } else{
        return console.log("Do you have permission from your parents?");
    }
}

let age = 15
if(checkAge(age)) {
    console.log("Access granted");
} else {
    console.log("Access denied!")
}

//it is possible to call the return without a value, it exit the function immediately
function showMovie(age) {
    if(!checkAge(age)) {
        return;
    }

    console.log("Showing the movie!");
}
