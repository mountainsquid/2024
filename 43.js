// Programming session: 43
// Date: Feb 07 2024
// Session: 45 minutes

// for this purpose I'm going to create two functions 
// then I'm going to use switch case and call the function inside the switch case
// this is a drill so I can remember the syntax 
// and there you go, no syntax error 

function yell() {
    console.log("HOLY I AM YELLING")
}

function silence() {
    console.log("I am giving you the silent treatment")
}

let bankAccount = 400 

switch (bankAccount) {
    case 500: 
    yell() 
    break 
    default: 
    silence() 
}

function sex() { 
    console.log("I am ready for sexy")
}

function foreplay() {
    console.log("I am ready for sexy")
}

let sexSession = "afternoon"

switch (sexSession) {
    case "afternoon": 
    sex()
    break 
    default:
    foreplay()
}

// using && logic operator I'll detemrine if she's in an age range
// what's funny is that I had trouble with if else, else if statements
// but now I can write it 
// programming is extremely practical. it's about engineering something in the digital world 
// in this example, I'm going to do and age-range checker 
// if she's between 18 - 40 
// if she's under 17 and under, or 40 and older, then it states that otherwise 

let age = 17 

if (age >= 18 && age <= 40) {
    console.log("she is greater than 18, and less than 40") }
    else { 
        console.log("she is older than 40, or less than 18")
    }

// for this, I want to check if the weather is between 15 to 30 

let weather = 15

// is weather GREATER than 15, and LESS than 30?
// if BOTH of the statements are true, than the code runs 
// otherwise it runs into the next code block
// for && both statements have to be true, for the logic to pass
// otherwise it will return false
// if both of the comparsion is false, then it still returns false 
// so when thinking of the 4 possible combinations, 3 are false, 1 true 

if (weather >= 15 && weather <= 30) {
    console.log('weather is between 15 - 30')
} else {
    console.log('weather is NOT... ABSOLUTELY NOT, BETWEEN 15 - 30')
}

let myWifeIsPregnant = true

if (myWifeIsPregnant == true || myWifeIsPregnant == false) {
    console.log('my wife is pregnant')
} else {
    console.log('she got pregnant by a ...')
}

// regarding || OR LOGICAL operator, out of the 4 possible combination, 3 are true, 1 is false
// for OR LOGICAL operator, if one of the condition is true, then the rest is true
// for using AND logical operator &&, it's useful for checking in range.
// when you're thinking of using &&, just think "for this code, I use && to check the range"
// you can link a bunch of logical operators together like || and && 
// for || only 1 of the condition has to be true 

let g = true 

if (g == true || g == false) { 
    console.log('g is true')
} else {
    console.log('g is false')
}


// for || OR operator, only one of has to be true 
// for it to return true
// and we shall proof this hypthosis with the line of code below

let bigJohnson = true 
let smallCave = false 
let cerealTime = bigJohnson || smallCave 
console.log(cerealTime)
