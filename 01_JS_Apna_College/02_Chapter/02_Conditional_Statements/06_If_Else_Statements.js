/*
        if (test expresiion) {
                
            //some code        
        }
        else {
            //some code
        }

        if test expression is true code inside if block is executed. If false the code inside else block is executed
*/

let votingAge_1 = 20;

if (votingAge_1 >= 8) {
    console.log("Eligible to Vote.");
}
else {
    console.log("Not Eligble to Vote");
}

console.log("===========================");

let votingAge_2 = 16;
if (votingAge_2 > 18) {
    console.log("I Will Not Execute");
}
else {
    console.log("Not Eligble to Vote");
}
