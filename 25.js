// Programming session: 25
// Session: 20 minutes
// Date: Jan 31 2024

// fine, it's time to learn about objects 
// this is a next level up from arrays 
// then there's 2D arrays? I'll learn about that later 
// but now it's time to learn about objects

// creating the object 
// interesting that object can contain string, number, and such...
// checking for error, don't see it. that's good 

const blackPinkMembers = {
    name: "rose", 
    age: 23, 
    talent: ["singing", "dancing", "rapping"]
}

// use console to print out the properties of the object 
console.log(blackPinkMembers.name) // output should be Rose 
console.log(blackPinkMembers.age) // output should be 23
console.log(blackPinkMembers.talent) // output should be "singing" etc in the array 

// add method to the object 
// but before getting to there I have to figure out why object in Javascript? 
// let's ask Poe ...
// think of object in javascript as a data structure
// I'm learning about this because I want to have a deep understanding of the fundamentals
// objects can have strings, numbers, booleans etc for storing complex data 
// property names for organizing the data 
// inheritance for objects? that's interesting 
// I'll learn what encapsulation about later 

// add a method to the object 
blackPinkMembers.sing = function() {
    console.log("singing")
}

// call the method 
blackPinkMembers.sing()

// but what is the difference between a function and a method in javascript? 
// a method is a function but attached to an object
// seems to be that a function is more powerful 

// declaring the object
// seems like I don't have to use the semi-colon 
const bigJohn = {
    name: 'john', 
    age: 36,
    dick_size: "8 inches",
    job: 'porn star'
}

// now I will use console log to access the key-pair for the object
// I suppose you can say that I'm going to access the property of the object 

console.log(bigJohn.name) // output should be "john"
console.log(bigJohn.age) // output should be 36
console.log(bigJohn.job)
console.log(bigJohn.dick_size) // yeah he has a big dick and porn star alright 

// interesting ... I can add a property of bigJohn outside of the object declaration area
// I didn't know that, interesting 
bigJohn.height = "6'0"
console.log(bigJohn.height)







