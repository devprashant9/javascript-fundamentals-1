/*
        Grade as per criteria
            80 - 100 : A
            70 - 89 : B
            60 - 69 : C
            50 - 59 : D
            0 - 49 : F
*/

let studentScore = 66;

if (studentScore > 79 && studentScore <= 100) {
    console.log("Grade A");
}
else if (studentScore >= 70 && studentScore <= 89) {
    console.log("Grade B");
}
else if (studentScore >= 60 && studentScore <= 69) {
    console.log("Grade C");
}
else if (studentScore >= 50 && studentScore <= 59) {
    console.log("Grade D");
}
else {
    console.log("Grade ");
}

// You can also check the last condition also by writing test expression for marks [0-49]

// I have not checked because all scenarios have been chceked thus the remaining must be fail