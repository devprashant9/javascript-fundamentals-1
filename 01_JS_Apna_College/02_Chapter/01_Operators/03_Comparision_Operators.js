/*
            Comparision Operators: {Returns boolean values (true or false)}

                ==: equal to
                ===: equal to and type
                !=: not equal to
                !==: not equal to and type
                >: greater than
                >=: greater than equal
                <: less than
                <=: less than equal
*/

// ---------- Greater, less, greater equal, less equal----------

let a = 10;
let b = 20

console.log(`a = ${a} and b = ${b}`);
console.log(a > b); 
console.log(a < b);
console.log( a >= b);
console.log(a <= b);
// ------------------------------
console.log("====================");
// ----------- "== vs ===" --------
 a = 10;  // number
 b = "10"; //string with same value

 console.log(a == b); //does not compare typeof, only compares value
 console.log(a === b); //checks both typeof and values

//  ---------------------
console.log("=====================");
// ----------!= vs !== -----------
 a = 30;
 b = "45";
 console.log(a != b); // as 30 and 45 are not equal so "true"
 console.log(a != b); // 30 and 45 are not equal which is true and also a is of datatype number and b is of datatype string and they are also not equal so both condition "true"
//  -----------------