// Programming session: 88
// Date: Feb 26 2024
// Session: 30 minutes

// class = blueprint
// object = the "physical thing" from the blueprint (class)
// create multiple objects from just 1 class, feels good man 
// why inheritance in OOP? to same time coding lol 
// define class, creat constructor 
class showBoobs { 
    constructor(boobs) { 
    this.boobs = boobs   
    
     
    }
}

const lisaBoobs = new showBoobs
lisaBoobs.boobs = "big"
console.log(lisaBoobs)

// created class
// created constructor 
// created object using new keyword

// create class => class hiLisa 
// create constructor => constructor(parameter1) { }
// include the "this keyword" within the body like this.parameter1 = parameter1 
// finally create the object itself using const newclass = new className 
// so it's really a 4-step progress for creating a class huh 

// in this code I've created a class named hello 
// then I created an object called lisa

class hello { 
    constructor (sayHi) {
        this.sayHi = sayHi
    }
    introduce() { 
        return `hey`
    }
} 

const lisa = new hello("its lisa")
console.log(lisa.introduce())







