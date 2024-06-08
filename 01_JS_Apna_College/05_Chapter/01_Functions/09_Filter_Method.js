// node 09_Filter_Method.js


// returns new Array based on some condition

let array = [45, 39, 58, 46, 79, 15, 19, 1, 0];

let evenNums = array.filter((value) => {
    if (value % 2 == 0) {
        return(value);
    }
});
console.log(array);
console.log(evenNums);