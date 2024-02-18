// Programming session: 68
// Date: Feb 18 2024
// Session: 30 minutes

// creating a map object 
const lisaMap = new Map()

// adding key value pairs to the map
lisaMap.set("name", "lisa")
lisaMap.set("idol", "blackpink")

// map can use any data type, has built in methods like .set(), .get(), .has() 
// access values to the map 
// seems like map uses .set() and .get() methods 
const name = lisaMap.get("name")
const age = lisaMap.get("idol")
console.log("name: ", name)
console.log(age)

// constructing a new map object 
const bankAccount = new Map() 

// setting the key value pair 
bankAccount.set("bankname", "bank ID: 0185818")

// access value in map 
const bank = bankAccount.get("bankname")

// I can use bankAccount.get("bankname") inside the console.log
// but it's easier to assign bankAccount.get("bankname") to a variable 

console.log(bankAccount.get("bankname"))

// set map constructor using = new Map()
// set key value pair using .set() 
// access value map using .get()
// THEN assign assign bankAccount.get("bankname") to a variable
// then console.log it 

// construct, set, get 
let newComp = new Map() 

newComp.set("brand", "Thinkpad")

let mylaptop = newComp.get("brand")

console.log(mylaptop)
