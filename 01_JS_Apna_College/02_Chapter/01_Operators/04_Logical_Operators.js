/*
            Logical Operators {returns (true or false)}
                &&: logical AND
                ||: logical OR
                !: logical NOT

*/


let a = 5;
let b = 10;
let c = 30;

let condition1 = a < b; // true
let condition2 = b > c; // false
let condition3 = b < c; // true
let condition4 = b < a; // false

// -------------- Logical AND ------

console.log(condition2 && condition3); // false && true = "false"
console.log(condition1 && condition2); // true && false = "false"
console.log(condition1 && condition3); // true && true = "true"
console.log(condition2 && condition3); // false && true = "false"
console.log(condition2 && condition4); // false && false = "false"

// returns true if both condition are true or else return false if any of the condition is false

// ----------------------------------
console.log("=====================");

// ------------- Logical OR ----------

console.log(condition2 || condition3); // false || true = "true"
console.log(condition1 || condition2); // true || false = "true"
console.log(condition1 || condition3); // true || true = "true"
console.log(condition2 || condition3); // false || true = "true"
console.log(condition2 || condition4); // false || false = "false"

// returns true if any of the condition are true or else return false if both are false

// -------------------------------
console.log("===================");

// ---------------- Logical NOT ----------
        //requires only 1 expresion. returns true if false and returns false iftrue
console.log(!condition2); // false = "true"
console.log(!condition1); // true = "false"
console.log(!condition1); // true = "false"
console.log(!condition2); // false = "true"
console.log(!condition2); // false = "true"

// ----------------------