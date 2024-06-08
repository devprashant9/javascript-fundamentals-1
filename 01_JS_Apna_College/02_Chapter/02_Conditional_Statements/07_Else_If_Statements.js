/*
        if (test expresiion) {
                
            //some code        
        }
        else if {
            
            //some code
        }
        else if {
        
            //some code
        }
        else {
        
        }

*/

// ----------- Demonstration 1 -----
let a = 10;
let b = 20;

if (a > b){
    console.log("A is Greater than B");
}
else if (a < b) {
    console.log("A is Less than C");
}
else if (b > a) {
    console.log("B is Greater than A");
}
else if (b < a) {
    console.log("B is Less than A");
}
else {
    console.log("A and B are Equal");
}

    // No matter you write how many conditions in (if elseif else) the execution stops as soon as  it finds the correct test expression and ignores all the remaining test expressions.
// ------------------------------------
