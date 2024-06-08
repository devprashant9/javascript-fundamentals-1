// node 09_Tempelate_Literal.js

// It just a type of string but of other format 

    // written inside backticks (``)

let str = `my name is prashant.
            i love jvascript
            i love to eat
            i do MCA`;
console.log(str);

// prints the string as it is

// however we cannot write string in this format using double quotes that is in multiple lines.

// uncomment below snippet to check

// let string2= "my name is prashant.
//             i love jvascript
//             i love to eat
//             i do MCA";

// -------- used to inject variables (String Interpolation) -----

let a = 25;
let b = 30;
console.log(`Sum of a ia ${a} and b ${b}: ${a + b}`);

console.log("=========================");
// ----------- Escape Characters 

let string = "My name is: \n\t Prashant Kumar Jha"
console.log(string);

let stringNew = "cat\n\tdog"
console.log(stringNew.length);

// \n: new line {counted as single character in a string}
// \t: tab