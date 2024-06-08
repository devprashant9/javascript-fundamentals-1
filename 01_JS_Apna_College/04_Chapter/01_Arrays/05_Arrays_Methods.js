// node 05_Arrays_Methods.js

let array = [250, 645, 300, 900, 50];

array.push(30) //If we log this it will return length of the array
array.push(50, 60, 70);
console.log(array);

console.log(array.pop()); //It simply pops element from last index of array
console.log(array);


// Converts to String
let str = array.toString()
console.log(typeof(str));


// concat(): joins two array and returns result
// unshift(): add element to start
// shift(): delete element from start and return

// ------------ slice() vs splice () -------------
console.log("=================");
console.log("==================");
let array1 = [250, 645, 300, 900, 50];
console.log(array1);
console.log(array1.slice(0, 4));

// splice (startIndex, deleteCount, newElement)
console.log(array1.splice(2, 1)); //returns deleted element

let array2 = [250, 645, 300, 900, 50];
array2.splice(2, 2, 101, 102);
console.log(array2);