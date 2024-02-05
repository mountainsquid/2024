// Programming session: 38
// Date: Feb 05 2024
// Session: 45 minutes

// so, I need to learn about 2D arrays because that's used in programming 
// visualize 2D array as cars in a parking lot ...
// thinking of 2D arrays as multi-dimensional arrays but why use it? 
// 2D array has rows and columns

const candyBox = [ 
    ["milky way", "Captain Crunch", "twix"], 
    ["skitties", "M&M", "gummy bears"],
    ["lolli pops", "jelly beans", "pocky"]
]

// candyBox[0] <--- row 0 
// candyBox[0][0] <--- access row 0, column 0 
// candyBox[0][1] <--- access row 0, column 1 
// candyBox[0][2] <--- access row 0, column 2

console.log(candyBox[0][0]) //output milkyway but why is that? Because it's [0][0] location 
console.log(candyBox[0][1]) //output should be "captain crunch"
console.log(candyBox[0][2]) //output should be "twix" 

// candyBox[1][0] <--- access row 1, column 0
// candyBox[1][1] <--- access row 1, column 1
// candyBox[1][2] <--- access row 1, column 2 

console.log(candyBox[1][0]) //output should be "skitties"
console.log(candyBox[1][1]) //output should be "M&M"
console.log(candyBox[1][2]) //output should be "gummy bears"

// 2D array, array within an array
// I wrote this line of code without having an error
// so this is the syntax and it works 
let boxofCondoms = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
]

console.log(boxofCondoms[0][0]) // should be 0 
console.log(boxofCondoms[1][0]) // should be 4 
console.log(boxofCondoms[2][0]) // should be 8 
console.log(boxofCondoms[2][1]) // should be 9  
console.log(boxofCondoms[2][2]) // should be 10 
console.log(boxofCondoms[2][3]) // should be 11 
console.log(boxofCondoms[1][3]) // should be 7 
console.log(boxofCondoms[1][2]) // should be 6 

// ok I think I've figured out 2D arrays, simple enough. 
// its simple if you simply break it down to the simplest parts 

// create the function
// call the function
// don't forget
// functions create a scope
// if statements create a scope?
// DRY = DON'T REPEAT YOURSELF. OOP AND FUNCTIONS KEEP YOUR CODE DRY.


// what is happening in this code
// you made a function named goFuckYourself with the parameter herName
// then you console.log something that you scream when you go fuck yourself
// but that's only creating the function, you have to call it too
// then you called the function, and passed the argument "stacy" into the parameter "herName"
// think of the parameter as a place holder, and as the value into that place holder. 

function goFuckYourself(herName) { 
    console.log("AHHH I AM FUCKING MYSELF: ", herName )
}


// I need to figure out function beginner, intermediate, and advance 
// this guy is good at explaining because he's a teacher at a university. good stuff.

