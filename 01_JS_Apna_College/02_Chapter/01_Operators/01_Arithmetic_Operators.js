/*
            Arithmetic Operators
                addition: +
                subtraction: -
                multiply: *
                divide: /
                modulus: %
                exponentiation: **
                increment: ++
                decrement: --

*/

// -------- Arithmetic Operator ------------

let a = 20;
let b = 10;
console.log(`a = ${a} & b = ${b}`);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log("=====================");

a = 2;
b = 3;
console.log(`a = ${a} & b = ${b}`);
console.log(a**b);
console.log("========================");

a = 10;
b = 20;
console.log(`a = ${a} & b = ${b}`);
console.log(++a);
console.log(--b);
console.log("============================");

a = 99;
b = 199;
console.log(`a = ${a} & b = ${b}`);

console.log(a++); //holds the incremented value for next use but doesn't updates the variable
console.log(a + 1); //uses the incremented value

console.log(b--); //same as above
console.log(b + 1); //same as above

// -----------------------------------------