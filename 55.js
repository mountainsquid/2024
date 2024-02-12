// Programming session: 55
// Date: Feb 12 2024
// Session: 30 minutes

// an object is simply a data that has its own methods and properties 

// constructor fuction 
// but is a constructor function necessary to create a class?
function person(herName, herAge) { 
    this.herAge = herAge
    this.herName = herName
}

let lisa = new person("lisa", 25)

console.log("lisa age is", lisa.herAge)

// object literal, let's fucking go 
// for object literal, think of it as objectName.propertyName when you're accessing it 

const monaLisa = { 
    name: "lisa", 
    age: 30,
}

console.log(monaLisa.name)
console.log(monaLisa.age)

// yes its possible to have a literal object within a literal object
// but the code wouldn't look aesthetic  

const bigDee = { 
    length: 6,
    grith:  5,
}

console.log("the length of his big dee is ", bigDee.length)

// what is  APIs (Application Programming Interfaces)
// what is JSON (JavaScript Object Notation)
