// node 03_Return_Keyword.js

// the return keyword returns only 1 value, which can be anything arrays, string, numbers

// nothing is executed after return statement

//---------------------------------------------------------------
function Sum (a, b) {
    return(a + b);
    console.log("I Will Never Be Executed");
}

let sum1 = Sum(5, 7);
let sum2 = Sum(298, 355);

console.log(`Sum1 is ${sum1} and Sum2 is ${sum2}`);

// return keyword is used when we don't want to print inside the function but we want to send it to back to function call position for some  other task and obviously we can print also

// --------------------------------------------------------
let nameInitial = "Prashant";

function myString (myName) {
    let fullName = myName + "Kumar Jha";
    return (fullName);
}

let FullName = myString (nameInitial);

// ---------------------------------------------------------------

let array = [30, 55, 60, 90, 85];

function sumArray (array2) {
    for (let value in array2) {
        array2[value] = array2[value] + 10; //Increasing each element by 10
    }
    return (array2) //returning here becasue we want the final array
}

// returning inside will for loop will send each element with incrementd value, we dont want each element we want the final array so returning outside for but always inside function

let myArray = sumArray (array);
console.log(`Old Array ${array} and New Array ${myArray}`); //both will game same output because we are updating the original array only and storing also in original array thus values are overwritten

