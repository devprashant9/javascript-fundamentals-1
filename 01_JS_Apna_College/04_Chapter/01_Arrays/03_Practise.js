let array = [85, 97, 44, 37, 76, 60];
let average;
let sum = 0;
for (let values of array) {
    sum += values
}
console.log(`Average is: ${sum/array.length}`);