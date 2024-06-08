// node 04_Arrow_Functions.js

/*
        Syntax: 
                const sum = (a, b) => {
                    return (a + b);
                };

                use semicolon after entire syntax

*/

const Sum = (a, b) => {
    console.log(a + b);
};
Sum (20, 30);


const difference = (a, b) => {
    return(a - b);
};

let diff = difference (10, 10);
console.log(`Difference is ${diff}`);


