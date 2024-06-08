/*

    primitive data type (7): numbers, string, boolean, null, symbol, undefined, BigInt
                        {typeof null prints object}

    non-primitive data type: objects

*/

let num=20;
// console.log(typeof(num));

let x=null;
// console.log(typeof(x)); //prints object

let bigNumber=1n;
// console.log(typeof(bigNumber));

let sym=Symbol("Hello World");
// console.log(typeof(sym));

// Object
const student={
    name: "Prashant Kumar Jha",
    age: 24,
    marks: 85.7,
    pass: true
}

console.log(student);
console.log(typeof(student));

    // to access object key's value
        console.log(student["marks"]); //use property name inside double quotes
        console.log(student.marks);

        // Updating value of a key
        student["marks"]=student["marks"] + 10;
        console.log("New Marks");
        console.log(student["marks"]);
