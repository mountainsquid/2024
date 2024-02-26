// Programming session: 89
// Date: Feb 26 2024
// Session: 30 minutes

// object in javascript has properties and methods 
// writing the bare bone class 
// what the heck is prototype-based inheritance

class ninja { 
    constructor(name, email) {
        this.name = name 
        this.email = email 
    }
}

var bigNinja = new ninja("big ninja", "bigninja@hotmail.com") 
console.log(bigNinja)

var smallNinja = new ninja("shemale", "shemaleninja@gmail.com")
console.log(smallNinja)
var femaleNinja = new ninja("ayami", "ayami.tenchu@hotmail.com")
console.log(femaleNinja)

// what is the benefit of using prototype-based inheritance?
// because you create the blue print once and then you can create infinite objects 
// it's like a mold, and creating infinite objects from that mold 
// an example would be having an email account blueprint
// and then using that class to create 1,000,000 accounts 
// this is how you scale using software feels good man 

