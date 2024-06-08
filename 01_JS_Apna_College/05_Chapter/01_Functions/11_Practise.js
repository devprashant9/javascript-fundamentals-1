// node 11_Practise.js

/*
    Given marks of students. filter out marks of students that scored 90+

    taake n input from user
    create array from 1 to n
    reduce method to calculate sum of all elements
    reduce method to calculate product of all element
*/

let marks = [90, 95, 85, 99, 91, 94, 100];

let highest = marks.filter((value) => {
    if(value > 90) {
        return (value);
    }
});

let sum = marks.reduce((prev, next) => {
    return(prev + next);
});

let product = marks.reduce((prev, next) => {
    return(prev*next);
});
console.log(`Students Scoring 90+ Marks List: ${highest}`);
console.log(`Sum of all Marks is ${sum}`);
console.log(`Product of all Marks is ${product}`);