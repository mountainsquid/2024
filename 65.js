// Programming session: 65
// Date: Feb 17 2024
// Session: 30 minutes

// constructor function is a function to create an object, simple as 
// create object hi 
// then create a function in that object 
// okay but where's the constructor function? 
// talk() function returns a string
// factory function = creates and returns a new object 

let hi = { 
    talk() { 
        return 'hello my friend'
    }
}

const greet = hi.talk()
console.log(greet)

// 4 major concepts with OOP: encapsulation, inheritance, polymorphism, abstraction 
// encapsulation = bunch properties and methods together but hiding internal implementations 

const lisa = {
    _name: "lisa", // private property (hidden but is it really?)

    // time to set a function
    greet() {
        return `hello my name is ${this._name}`
    }
}

const hello = lisa.greet()
console.log(hello)

// trying to access but won't get access ....
console.log(lisa._name)
