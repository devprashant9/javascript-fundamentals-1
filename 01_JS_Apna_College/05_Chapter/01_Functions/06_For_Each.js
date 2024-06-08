// node 06_For_Each.js

/*

----------- forEach () is a Function that Works as a Loop -------------------
            usually ONLY used for array
            no need to call
            usually a function is paased in arrow function format
            used when we want to perform operations on individual elements
            does not return a value

            arr.forEach(callBackFunction)
                a callback function is a function that is passed as an argument to other function. also known as higher order function
        
                forEach(value, index, array)

*/

let array = [25, 36, 98, 46, 79];

array.forEach((value) => {
        console.log(value);
});
