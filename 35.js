  // Programming session: 35
// Date: Feb 03 2024
// Session: 45 minutes

// lack of sleep
// my brain is working at 20%
// brain fog, can barely get through this session
// but it doesn't matter, just put in the time try to code 

// arrow function with the parameter name, with string literal template 
// console.log outputs James but it doesn't show for some reason 
const sayHello = name => 'hello  ${name}'
console.log(sayHello("james"))

// class becomes object. Instant methods, instant properties, whatever the fuck that means 
// Object oriented programming = encapulation, inheritance, whatever the fuck that means 

// creating a class for blackPink
// I suspect that this is the "template" then I create inheritances off it? 
// I'll learn more about inheritance and encapsulation in a second ...
// then creating a constructor is necessary for creating a class
// I'll learn what is a constructor is in a bit 
// this keyword is to create an object within a class 
// primitives = data types in javascript, like number, string, boolean, null 

// declare the class
// create the constructor
// create the function 

class blackPink { 
    constructor(name) {
        this.name = name
    }
    shout() {
        console.log("blackPink in your area")
    }
}

// new keyword create object from class  
// constructor initalize the properties before it can get going
// like starting up a car, I suppose 

const lisa = new blackPink("lisa")
lisa.shout() 

// let's dig into class a bit more
// because this shit is interesting and powerful
// you create a function within the class but is it real? 
// or is it just a "blueprint"

class workOutA { 
    constructor(exericse, set, rep) {
        this.rep = rep 
        this.set = set
        this.exericse = exericse
    }
    perform() {
        console.log(`This exercise: ${this.rep} reps ${this.set} sets for ${this.exericse}`)
    }
}

// is this inheritance?
// no it doesn't because it doesn't use the extend keyword
// it just creates instances 
// but what is an instance in a class?
// class as the blueprint 
// instance as creating the thing into "real life "
// interesting shit 

const workOutB = new workOutA("bench press", 5, 5)
const pullUps = new workOutA("pull ups", 5 ,5)
const squats = new workOutA("squats", 5, 5)
const biCurls = new workOutA("bicep curls", 5, 5)
const deltRise = new workOutA("delt rise", 5, 5)

pullUps.perform()
workOutB.perform()
squats.perform() 
biCurls.perform()
deltRise.perform()


// what is inheritance in OOP (object oriented programming)
// seems like inheritance is when an adult shits out (gives birth) to a child
// the child has the adult's DNA, this it has inherited the adult's IQ and traits 

// 45 minutes of learning ... brains just warming up perhaps 
