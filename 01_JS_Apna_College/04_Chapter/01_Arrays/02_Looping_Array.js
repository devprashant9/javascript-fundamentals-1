// node 02_Looping_Array.js

let heroes = ["ironman", "spiderman", "thor", "hulk", "batman"];

for (let values in heroes){
    console.log(heroes[values]);
}
console.log("===============");
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
console.log("================");
for (let values of heroes){
    console.log(values);
}