// node 01_User_Function.js

/*
        function funName () {
                // Some Code
        }
        
        funName ()

*/


// Without Parameter
function myFunction () {
    console.log("Welcome to Apna College");
    console.log("I am Learning Javascript");
}

myFunction () // function will now be executed without calling you cant get output

// with parameter
let str = "Hello World";

function first (message) {
    console.log(message);
}

first(str);

// while calling the function the variable name should match with the original declared variable.

// however inside the function argument tyou can take any variabe name as that becomes a block scope