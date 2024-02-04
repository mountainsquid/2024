// Programming session: 37
// Date: Feb 04 2024
// Session: 45 minutes

// classes offer re-usable code, like you write it once, then use it again
// write it once, run it forever. this is how you scale with code
// same thing with writing. write it once, spam it forever 
// function you can keep re-using the code
// classes you can use inheritance to make it more useful
// why encapsulation? protection from data change by accident, makes the code modular (but how?)

// time to learn about constructor 
// create the constructor 
// seems like the constructor is just a function, has the form of a function 
// constructor =  initialize objects of a class,
// function = re-usable blocks of code 
// call a constructor by using the new keyword 
// call a function by just calling it 
// a class is a cookie cutter. It's just a template
// a class instance is the actual cookie itself, made by the cookie cutter lol
// when you take the cookie cutter (class) to make a cookie (object instance)

class blackPinkMember { 
    constructor(name, position) {
        this.name = name 
        this.position = position 
    }
}

const lisa = new blackPinkMember("lisa", "rapper") 

console.log(lisa.name)

// let's great another class with dogs n shieeet 
// a class is just a cookie cutter template 
// it's just generic dog
// after this I'll make an instance for my dog

class dogs { 
    constructor (name, breed) {
        this.name = name 
        this.breed = breed
    }
}

const myDog = new dogs("Milk", "hair dog")

console.log(myDog.name)
console.log(myDog.breed)

// let's learn about inheritance 
// first have to create the generic man class 
// like he's a generic man, then set up him to a more specific RPG character 
class man { 
    constructor (name, age) {
        this.name = name 
        this.age = age 
    } 

    shout() { 
        console.log("the man is fucking shouting")
    }
}

// time to set up the inheritance, let's go 
// what have I learned this session? 
// declare a class
// setup a constructor 
// set up a function within the class 
// next session I will learn how to inherit the class
// 
