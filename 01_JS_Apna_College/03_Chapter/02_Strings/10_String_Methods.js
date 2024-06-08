// node 10_String_Methods.js

let myname = "Prashant";

console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

let str = "  cat  is a     pet animal  "; // four extra spaces
console.log(str.length);

let str1 = str.trim (); //removes all spaces from start and end
console.log(str1.length); //should  be 4 less than original string

//slice (start, end) {returns substring from start to end - 1 }

//concat (str1, str2) {joins stri and str2}

//replace(oldValue, newValue) {only 1st occurrence}
// replaceAll() {replaces all occurrences}

//charAt(index) //extracts character at given index
