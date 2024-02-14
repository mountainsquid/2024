// Programming session: 60
// Date: Feb 14 2024
// Session: 30 minutes

// functions are values
// what the fuck is that? 
// so you can save a function into a variable? That's interesting

// anon function because it doesn't have a name 
// anon function being used as callback function in javascript 
// anon function not accessible outside of the local scope 
// function expresion = anon function assigned to variable 
// regular function is hoisted but an anon function is not hoisted

let monaLisa = function() { 
    console.log("hello there")
}

console.log(monaLisa)

// you can create a function inside an object literal 
// creating an anon function in the object literal 

const herName = { 
    name: "Black pink", 
    sing: function() { console.log("black pink in your area")}
}

herName.sing() 

//  passsing a function inside another function's parameter is a callback
// using function call back for async coding, handle events and customized execution flow 

// this code should run the first() function
// then once it's done, it will call the second() function 
function first(second) {
    console.log('this is the 1st function')
    second()
}

function second() {
    console.log('this is the 2nd function')
}

first(second) 
