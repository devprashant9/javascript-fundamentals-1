
// Find sum of all elements from 1 to 100

let sum = 0;
let count = 1;

do {
    sum += count;
    count++;
}
while (count <= 100); //don't forget to add semicolon

console.log("Sum is", sum);

//runs atleast once if the test expression is wrong also of while