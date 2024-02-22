// Programming session: 83
// Date: Feb 22 2024
// Session: 30 minutes



let blackPink = ["lisa", "jenny", "jisoo", "rose"]
console.log("Just regular blackpink lineup: ", blackPink)
blackPink.push("Minnie")
console.log("popping Minnie into the line up: ", blackPink)
console.log("^ notice how she is at the end of the list")
console.log("it's time to add a number at the beginning of the stack using unshift")
blackPink.unshift("Suhua")
console.log("Shua being added to the front using unshift: ", blackPink)
console.log("this is great it's working")
console.log("now I'm going to use shift to remove something")
blackPink.shift()
console.log("Suhua going to be removed using unshift: ", blackPink)
console.log("remove lisa from the list using shift")
blackPink.shift()
console.log("lisa has been removed, she broke her legs: ", blackPink)
console.log("going to use pop to remove minnie from the back of the bus")
blackPink.pop() 
console.log("now Minnie has been kicked out of the group: ", blackPink)
console.log("now I'm going to use pop 3 times to remove everyone from the group")
blackPink.pop() 
blackPink.pop() 
blackPink.pop() 
console.log("now the group is empty", blackPink)

// so the cool thing is, for whatever reason, you want to kick people out of the bus
// at the front of the bus or at the end of the bus is up to you 

let num1 = [1, 2, 3, 4, 5]
num1.reverse()
console.log(num1)

const doubleNumbers = num1.map(number => number * 2)
console.log(doubleNumbers)

// why loops in javascript? to save time, in a way that functions can save you time 
// one thing I have to remember is the sytnax for the for loop
// for keyword, () {} that is what I should remember in my head 
// for ( ; ; ) {} ... this is a nice way to remember it 
// for ( ;; )  {} 
// you should have this thing where you're dreaming of coding

function sayHi() { 
    for (i = 0; i < 5; i++ ) 
    console.log("sytnax for for loop is for ( ;; ) ")
}

sayHi()

// this is something I have to learn is looping through an array 
