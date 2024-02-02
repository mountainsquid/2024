// Programming session: 33
// Date: Feb 02 2024
// Session: 45 minutes

// time to learn about the ! (NOT) operator

// this is set to false
// not everyone is hot
// physical. the fact of life 
// she is simply not hot, so I set it to false

let isSheHot = false 

// this is the !NOT operator
// you turn something to the opposite
// the console output is true 
if (!isSheHot) { 
    console.log("yeah she is hot")
}

// let's keep drilling with another example of !(NOT) until you get it
// over and over again like an autistic 

// current output is yes 
let areYouFat = true
console.log("Are you currently fat?: ", areYouFat)

// current output is no
// so the ! is about saying the opposite. Like lying? 

let areYouRich = false 
console.log("Are you currently rich?: ", areYouRich)

if (!areYouFat) {
    console.log("Are you currently fat?: ", areYouFat)
}

// local scope is cool
// the let currenSong only exist instead the function
// I can still declare the same let variable name CurrentSong outside of the function


function PlayBP () {
    let currentSong = "Song played in the function PlayBP() Kill this love"
    console.log(currentSong)
}

PlayBP()

let currentSong = "Song playing, not in function: Shut down"
 console.log(currentSong)

let a = 10
let b = "string"

// learning how to do ====
// it works because it compares if the datatypes is the same or not
if (a === b) {
    console.log("datatype is the same") 
} else {
    console.log("datatype is not the same")
}

// null is cool. what is the point of null anyways? 
// interesting, null is NOT the same as undefined
// null used to signal empty database, APIs, and data structure, okay. 

let u = null

console.log("the value of u is: ", u)

let num1 = 2 
let num2 = 3

// learning about != which is not equal to, simple enough
// seems like the ! is more about boolean
// !=== is more strict
// != is less strict 
if (num1 != num2) {
    console.log("num1 is not num2")
}

let num3 = 3
let num4 = 4

if (num1 !== num2) {
    console.log("num3 IS different from num4")
}

// in my next few sessions I'm going to learn about DOM
// Document object model 
// and go on COde Academy to learn how to code 
