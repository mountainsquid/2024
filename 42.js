// Programming session: 42
// Date: Feb 07 2024
// Session: 45 minutes

// let's learn about math function because why not
// declare and assign a value to x
// assign x and round it up using math function
// then console.log it 
// Math.ceil(x) rounds the number up 
// Math.floor(x) rounds the number down 

// so, when I first started learning about Javascript, I thought using a function was hard
// but now I understand how to use a function, especailly the parameter, argument, return
// I learned the difference between a method and function 
// if, while, for, switch doesn't seem so complicated anymore 
// and then I moved on to class 

let x = 5.50 
x = Math.round(x)
console.log(x)

let z = 5.50 
z = Math.floor(z)
console.log(z)

let y = 5.50
y = Math.ceil(y)
console.log(y)

// let's drill moving class, typing it out and shit 
// when you declare a class 
// declare the name and then declare the constructor right away
// then assign the property values 

class thot {
    constructor(herName) {
        this.herName = herName
    }
}

// I have successful created a class because there is no debugging error when I typed out the code

class fighter { 
    constructor(fighterName) { 
        this.fighterName = fighterName
    }
}

class bankAccount { 
    constructor(bankID) {
        this.bankID = bankID 
    }
}

// now that I have constructed the bankAccount blueprint
// I gave it a constructor, with a parameter too 
// then I assigned it with property bankID
// now it's time to create a new instance, and pass an argument into that parameter
// then I'm going to console log the myBank with myID number 
// and there you have it 

let myBank = new bankAccount(12345)
console.log("my bankID is: ", myBank.bankID)

// assign variable name poo to string "poo" using let 
let poo = "poo"

// using switch with poo variable in the condition bracket 
// the keyword is case, break and default. remember that 
// if variable poo matches with poo, say someone shit in the lake 
// and then the code ends there
// otherwise move on to the default section and run that block of code
// that block of code is "sars ... he is pissing in the subway"
switch (poo) {
    case "poo": 
     console.log("someone took a shit in the lake") 
        break; 
    default: 
    console.log("sars ... he is pissing in the subway")
}

let currentExercise = "squat" 

switch(currentExercise) { 
    case "squat": 
    console.log("you're squatting nice job bro")
    break
    case "bench": 
    console.log("bench bro reporting in")
    break 
    default:  
    console.log("you're not squatting today?")
    
}

// in this real life coding example, we're going to use the amount of $$$ you have in your bank account
// using let, we assign variable name accountAmount to 1000

// instead of using if conditional to control the program flow, we're going to use switch case 
// it makes the code easier to read and less messy
// switch(conditional) {}
// switch syntax has switch and then block of code, so don't forget about your {}
// then you use case (varaible): (don't forget about the colon)
// then display something, or do something. I wonder if you can call a function inside a switch statement?
// you absolutely can call a function inside a switch statement
// so switch statement to call a code, keep that in mind 
// anyways, case (if it matches the data point) then it display a block of code.
// interesting, I did 1000 <1001: and there isn't a beed for a bracket
// I suppose because there is a colon so the computer knows what to do 

let accountAmount = 2000

switch(accountAmount) { 
    case 1000: 
    console.log("you have $1000, can date now") 
    break 
    case 2000:
    console.log("you have $2000")
    break 
    default: 
    console.log("no money, no honey")
}

// that's all the coding for this session, bye. 


