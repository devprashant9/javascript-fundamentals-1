// node 05_Practise.js

let str = "abCdEFGhijkLmNoPqrsTUVwxYZ";
str = str.toLowerCase();

function vowels (string) {
    let count = 0;
    for (let value of string) {
        if (value == 'a' || value == "e" || value == "i" || value == "o" || value == "u") {
            count += 1;
        }
    }
    return (count);
}

let num = vowels (str);
console.log(`Numbers of Vowels are: ${num}`);


const newString = (string) => {
    let count = 0;
    for (let value of string) {
        if (value === 'a' || value === "e" || value === "i" || value === "o" || value === "u") {
            count += 1;
        }
    }
    console.log(`Numbers of Vowels are: ${count}`);
}
newString(str);