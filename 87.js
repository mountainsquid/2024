// Programming session: 87
// Date: Feb 26 2024
// Session: 30 minutes

// create the class keyword using class first 
// then create the constructor 
// create class by using the keyword class
// create constructor by using constructor keyword 

class blackPink { 
    constructor(herName) { 
        this.herName = herName
    }

    // now its time for the method 
    sayHi() {
        return `Hi this is ${this.herName}`
    }    
}

// create member object using the class blueprint 
// new keyword creates an object from the class, creats memory and calls the constructor function 
const lisa = new blackPink("Lisa")

console.log(lisa)
console.log(lisa.sayHi())
