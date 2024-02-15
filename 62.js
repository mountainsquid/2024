// Programming session: 62
// Date: Feb 15 2024
// Session: 40 minutes

// this is interesting, I'm learning a new way to create array, that I didn't know of
var groupNum = new Array("1", "2", "3")
console.log(groupNum[0]) // should show "1"

var groupNames = new Array("lisa", "rose", "jenny", "jisoo")
console.log(groupNames[2])
console.log(groupNames.length) // shows 3 because there's 3 elements in this. now it shows 4 

// pop and push in javascript 
// interact with the array, it doesn't stay static  
// a real life example would be a database. The data structure array needs to be updated 

var red = true

if (red == true) {
    console.log("this is true")
} else {
    console.log("this is false")
}

console.log(red)

// falsey and truesy in javascript
// 0 being false for some reason
// = assignment operator
// == compare operator "is it the same" operator 
// don't forget the subtle difference 

var a = 5
var b = 6 

// != not the same 
// == are they the same 
if (a == b) { 
    console.log("A and B AREN'T THE SAME") 
} else {
    console.log("A and B they're the same")
}

var c = 5 
var d = 5 

if (c != d) { 
    console.log("C and D AREN'T THE SAME") 
} else {
    console.log("C and D they're the same")
}

// == looking to see if they're the same 
// != looking to see if they're not the same 
// != checking to see if they're the same woman, they're not the same, they just look alike 
// > greater than
// < less than 
function calMe() { 
    let a = 7
    let b = 6 

    if (a < b) { 
        console.log("a is less than b") 
    } else {
        console.log("a is GREATER than b")
    }
    
}

calMe() 

// string literal is cool 
function rekt() { 
    let a = 35
    let b = 11 
    if (a > b) { 
        console.log(`${a} is greater than ${b} for sure`) 
    } else {
        console.log("A is LESS than B, for sho' yeah yeah")
    }
    
}


rekt()
