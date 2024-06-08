let array = [250, 645, 300, 900, 50];

// using for-in
for (let value in array) {
    discountedPrice = array[value] - (0.1 * array [value]);
    array[value] = discountedPrice;
}
console.log(array);

// using for-of
let index = 0;
for (let value of array) {
    discountedPrice = value - (0.1 * value);
    array[index] = discountedPrice;
    index++;
}
console.log(array);

// running both code snippets would give different values as the vale of the array has been vhanged in for-in loop therefore on printing array in for-of it will have different values

// comment either of the code snippet to see correct output

