// node 08_Map_Method.js

// Creates a New Array with the results of some operation. The Value its callback returns are used to form new Array

// Syntax: array.map(callBackFunction (value, index, array))

let array = [2, 4, 6, 8];

let newArray = array.map((value) => {
    return(value*value)
});
console.log(newArray);