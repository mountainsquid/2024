// Programming session: 82
// Date: Feb 22 2024
// Session: 30 minutes

// time for .map method array 
// what is it for?
// it takes the list of array, then creates a new array 
// super interesting now that I think about it
// there is a difference between expression and statement in javascript, take note of that 


let blackPink = ["lisa", "jenny", "jisoo", "rose"]
console.log("Just regular blackpink lineup: ", blackPink)
blackPink.push("Minnie")
console.log("popping Minnie into the line up: ", blackPink)
console.log("^ notice how she is at the end of the list")

let num1 = [1, 2, 3, 4, 5]

const doubleNumbers = num1.map(number => number * 2)
console.log(doubleNumbers)
