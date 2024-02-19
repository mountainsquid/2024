// Programming session: 70
// Date: Feb 19 2024
// Session: 30 minutes

// bracket notation, kinda like array index 
// huh that's interesting it prints out i because it knows the index of string using bracket notation 
var herName = "lisa"
console.log(herName[1])

// push method, adding more indexes into an array 
// using the push method  
var blackPink = ["lisa", "jenny"]
console.log("just adding 2 members in this group: ", blackPink)
blackPink.push(["jisoo", "rose"])
console.log("now this should show all 4 members", blackPink)

// push method, as in pushing something inside the box 
// likewise pop method, you're popping it out 

console.log(blackPink.pop())
console.log(blackPink.shift())

// for the shift() method, it removes the first index and then "returns it" 
// it displays what it had removed 
function useShift() { 
let gIdle = ["Soyeon", "Miyeon", "Minnie", "Yuqi", "Shuhua"]
console.log("before shift function, regular lineup: ", gIdle)
console.log("shift() method had removed this: ", gIdle.shift())
console.log("after shift function lineup: ", gIdle)
}

useShift() 

function useUnshift() { 
    let gIdle = ["Soyeon", "Miyeon", "Minnie", "Yuqi", "Shuhua"]
    console.log("before unshift function, regular lineup: ", gIdle)
    console.log("unshift() method had added this: ", gIdle.unshift("JAY PARK"))
    console.log("after unshift function lineup: ", gIdle)

}

useUnshift()

// this is cool
// I'm using functions to make the code more reusable and modular 
// 2 weeks ago I couldn't understand using methods that interact with arrays
// and now I can use it, doesn't seem so hard 
// pop() and push() is part of Last-In-First-Out (LIFO)
// the explaination on youtube is confusing
// the aha moment for me is to code and see it with my own eyes
// index get added at the end of the bus 
// then index at the end of the bus gets removed
// like a person who sneaks in at the end of the bus through the back door
// then the person gets off before the bus driver can tell the person to pay lol 
