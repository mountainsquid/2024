// Programming session: 59
// Date: Feb 14 2024
// Session: 30 minutes

// JSON is similar to object literal 
// JSON = JavaScript Object Notation
// JSON used for web dev, API and data storage 
// JSON structure uses key value pair 
// function and scope, are interested and related 
// book Javascript In Less than 50 Pages 
// book Head First Javascript Programming

function substract(a, b) {
    return a - b 
}

console.log(substract(5, 10))

function addBabe(herName) { 
    return herName + 'is registered'
}

console.log(addBabe("lisa"))

// huh that's interesting 
// I can't re-assign the key value pair inside the object literal, why is that? 
const thing = { 
    nameOfThing: "bob",
    ageOfThign: 35
     
}

delete thing.ageOfThing // using delete keyword to remove the value 
console.log(thing.nameOfThing)
console.log(thing.ageOfThing)
