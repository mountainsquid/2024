// Programming session: 27
// Date: Feb 01 2024
// Session: 30 minutes

// figured I nee to get good at functions
// and get indepth about it
// a few concepts that I need to cover like invocation, apply, blind, closures
// what are those? I don't know. Just need to focus 3 steps at a time and build that knowledge block

// parameters in a function = names of the value in the function 
// arguments in a function = values passed to the function 
// function (a) <--- paramter 
// function (10) <---- argument 

// addShit(a, b) as the parameters 
// return is a + b 
// at the end of the code, function is going to give me the end result 
// that's what I visualize anyways 

function addShit(a, b) {
    return a + b 
}

// time to pass argument (values) into the function 
// a = 5, b = 5 
// the output will be a + b because that was the return value 

console.log(addShit(5, 5))

// parameter in the function
// return "hello" with name 
// seems like I can't use template literal is that true? 

function greet(name) { 
    return "hello: " + name
}

// huh, interesting. I was getting an error until I made "bob" as a string
console.log(greet("bob"))

// possible to assign value inside the parameter or not? 
// interesting, local variable only exist within the function and not outside of it 
let y = 10; 
function wut(y) {
    return 10; 
  
}

console.log(wut(y))

// let's do a tip calculator 
// when doing the tip calculator
// included the price without the tip
// included the price for the total + tip

let beer = 10
let chicken = 12
let totalCost = beer + chicken
let tip = totalCost * 0.10
let tipIncluded = totalCost + tip 

console.log("total cost of the meal is, no tip: " + "$" + totalCost) 
console.log("total cost of the meal is, including 10% tip: " + "$" + tipIncluded) 

// asking ChatGPT how to print the current time 
// then asking it to explain what does the code mean
const currentTime = new Date();
console.log('Current time:', currentTime.toLocaleTimeString());

// end of 30 minute learning session. 
