//input: Prashant Kumar Jha
// output : @prashantkumarjha16

let string = prompt("Enter Your Name:");
string = string.trim();

let length = string.length;

let username = "@" + string + length;
document.write(username)