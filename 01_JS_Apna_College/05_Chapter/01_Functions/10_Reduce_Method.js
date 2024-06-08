// node 10_Reduce_Method.js

// performs some operations and reduces the array to a single value and returns that single value

// array.reduce(result, value)

    // the value of 1st parameter is the element indexed at 0 by default and runs till 1 less than size of array

    // the index of 2nd parameter is the element indexed at 1 by default and runs till last element

    // after each iteration the value of the 1st parameter gets overwritten with the new value as some task is performed inside the function or with returned value 
    
    //  and the 2nd parameter increases its index by 1

    // and the final result is returned and stored in the assigned variable


let array = [2, 3, 6, 4, 3, 4];

let sumReduce = array.reduce((sum, value) => {
    // console.log(sum);
    // console.log(value);
    return(sum + value);
});

console.log(sumReduce);

let largest = array.reduce((prev, max) => {
    if (prev > max) {
        return(prev);
    }
    else {
        return(max);
    }
});
console.log(largest);