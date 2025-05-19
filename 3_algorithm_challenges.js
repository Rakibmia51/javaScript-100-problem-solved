// give a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example
    // for
        //picture = ["abc", "ded"]
    // the output should be 
        //addBorder(picture) = ["*****", "*abc*", "*ded*"]


    //Input & outPut
        // [input]array.string picture
        // Hints - (concat, unshift, push)

//note : A non-emty array of non-empty wqual-length strings.


function addBorder(picture){

    let wall = "*".repeat(picture[0].length + 2)
    picture.unshift(wall);
    picture.push(wall);

    for(let i = 1; i<picture.length -1; i++){
        picture[i]="*".concat(picture[i],"*");
    }

    return picture
}

console.log(addBorder(["a", "ded"]));
