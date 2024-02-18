// Programming session: 69
// Date: Feb 18 2024
// Session: 30 minutes

const { Collection } = require("@yuva1422/telegram.js")

// set as being a data structure 
// it's a new-ish type of data structure 
// but what's the benefit of using it? 

// welp here I am, creating a new set
// remember to use "new Set()"
// so it seems that array, set and map are kinda similar 
// both set and map are data structure 
// can add, delete, and such with map and set
// can iterate over using loops
// seems like sets don't allow duplicate in the object, can be useful I suppose 

const lisaSet = new Set()

// adding values to the set 
lisaSet.add("dance")
lisaSet.add("sing")

// checking value 
console.log(lisaSet.has("sing"))
console.log(lisaSet.size)

let girlFriends = new Set()

// time to add the girlfriends to the list 
girlFriends.add("Lisa")
girlFriends.add("Rose")
girlFriends.add("Jenny")

// time to loop through the set 

for (const value of girlFriends) {
    console.log(value)
}

// time to display all of your girlfriends for the world to see 
// using spread operator because why not 
console.log(...girlFriends)
console.log(girlFriends.has("jisoo"))

// 


// set up the array 
// then use the spread operator because why not 
let myLadies = ["jenny", "rose", "jisoo"]

// combine the spread operator because why not 
// combine set key value pairs and array 
console.log(...myLadies, ...girlFriends)


