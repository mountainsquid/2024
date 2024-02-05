// Programming session: 39
// Date: Feb 05 2024
// Session: 45 minutes

// function header
// function body 
// call the function 
// function name, parameters, return keyword
// you can create a function that adds variables together 
// function calling another function? Possible, how do I do that with javascript? 
// if, else if, else 

// creating a function that greets people 
function sexBot() { 
    console.log("I am a sex bot, nice to meet you")
}

// creating yellBot function, that uses the function of the sexBot()
// a function within a function, feels good man 
function yellBot() {
    console.log(sexBot())
}

// when you call the yellbot(), it calls the sexBot() inside its body
// like inception of some sort 

yellBot()

// while loop as a control structure 
// keep repeating the code over and over again like an agent
// i as a counter variable for a while and for loop 
// class.name = 3000 ... the (.) is use to access the variable or property of the class
// in a class, there are properties. 


// here it is, I am making a class, feels good man 

class animal { 
    constructor(name) {
        this.name = name
    } 
    makeSound() {
        console.log("animal is making sound")
    }
}

// make a inheritance 
class cat extends animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed; 
    }
    makeSound() { 
        console.log("meow meow")
    }
}

const MyCat = new cat("mister cat", "Forest cat")
MyCat.makeSound(); 

// let's do another class
// keep repeating this like a drill but also read and understand what's working with the code
// do it over and over again until you have a deep understanding of this 

class fighter {  // declaring the class 
    constructor(martialArt) { // declaring the constructor function (but why?) 
        this.martialArt = martialArt // property assignment 
    }
}

// when I'm learning about class, I'm also learning about functions 
// simple function when you're creating a function you have to immediately set up the constructor
// don't forget that 

class mmaFighter {
    constructor(alias, age, fightStyle) {
    this.alias = alias 
    this.age = age 
    this.fightStyle = fightStyle 
    }
}

// that created a generic class of fighter
// now you have to create an instance of that class 
// so from blurprint into something real 
// now I want to pass arguments into the parameters 
// and create my own fighter named bob
// and let's see some of that fucking properties of bob, why not 

const myFighter = new mmaFighter("bob the fat ass", 35, "karate")

console.log(myFighter.alias)
console.log(myFighter.age)
console.log(myFighter.fightStyle)


// I have successful debugged the code
// it isn't that hard... for now. 
// when you create the class
// immediately you have to put in the constructor function
// don't forget about that 
