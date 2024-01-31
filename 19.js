// programming session 15, 20 minutes (#19)
// date: Jan 31 2024 

// AND, OR, NOT
// &&, ||, ! 
// COMBINE THE OPERATORS BABY, OH YEAH 

// Think of && as a double confirmation 
// Think of both of the conditions has to be true 
// for the conditional to have a green light to GO! 

// || OR operator, becomes true if one of the variable is true
// return false if both of the conditionals are false 
let age = 17
let hasVIPpass = false; 

if (age >= 18 || hasVIPpass) {
    console.log("welcome to the club")
} else {
    console.log("you can't come in")
}

// only one of the above is true
// can still get in the club 
// if both is false, can't get in the club 

// there is operator precedence for || and && 
// && comes first, then || 

// declare var Dalat 
// assign it to the string "warm"
var daLat = "warm"

// declare var weather 
// assign value of Dalat into weather 
// like the value of Dalat into the box of weather 
var weather = daLat

// display the value of weather in console.log 
console.log(weather)

if (daLat == "warm") {
    console.log("the weather is indeed : ", daLat)
} else {
    console.log("the weather is not warm at all!")
}

// think of for loop as automating the repetitive tasks 
// you can set a loop that does it forever 
for (let i = 0; i <=5; i++) {
    console.log(i)
}
