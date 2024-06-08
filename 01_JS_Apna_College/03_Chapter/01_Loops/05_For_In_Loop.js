//node 05_For_In_Loop.js

    // Used for all OBJECT iteration

const students = {
    name: "Prashant Kumar Jha",
    class: "MCA",
    age: 24,
    city: "Pune",
    college: "Allard",
    duration: "2023 - 25"
}

for (let key in students) {
    console.log(key); //prints keys
}

console.log("============");

for (let key in students) {
    console.log(students[key]); 
}