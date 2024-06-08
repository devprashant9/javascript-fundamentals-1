// node 01_Arrays.js

let heroes = ["ironman", "spiderman", "thor", "hulk"];
console.log(heroes);
console.log(heroes[1]);

heroes[1] = "batman";
console.log(heroes[1]);

console.log("============");
//--------------------------------------------------


let marks = [25, 60, 98, 45, 60];
console.log(typeof(marks));
console.log(marks.length);
marks[8] = 95; //evalutes to true
console.log(marks); 

console.log(marks[5]); // prints undefined
console.log(marks[6]); // prints undefined
console.log(marks[7]); // prints undefined

console.log(marks[-1]); // prints undefined

// negative indexing can be achieved by marks.at(-1)
console.log(marks.at(-1));


//-------------------------------------------------

console.log("==============");
let info = ["Prashant", 24, ["carrot", "apple", 450], "MCA"];
console.log(typeof(info));
console.log(info);
console.log(info[2]);
console.log(info[2][2]);

console.log(info.length);
console.log(info[2].length);
console.log(info[2][0].length);
console.log(typeof(info[2][0]));