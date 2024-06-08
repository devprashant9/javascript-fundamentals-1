// In JS opening and closing of curly braces denotes a block or scope

/*  
        { opening braces
            Some Code
    } closing braces
*/

// Block 1
{
    let number=20;
    const score=10;
    var price=100;
    console.log("value of number in block a", number);
    console.log("value of score in block a", score);
    console.log("value of price in block a", price);
}

// Block 2
{
    let number=800;
    const score=90;
    console.log("value of number in block b", number);
    console.log("value of score in block b", score);
    console.log("value of price in block b", price);
}

// Block 3
{
    let number=50;
    const score=60;
    console.log("value of number in block c", number);
    console.log("value of score in block c", score);
    console.log("value of price in block c", price);    
}

// value of var is accesssed by all the block