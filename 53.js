// Programming session: 53
// Date: Feb 12 2024
// Session: 30 minutes

function fookyo() {
    console.log("yeah foook!")
}

fookyo()

// { inside here is the code block, declaration, etc}
// the fuck use parameters in a function anyways
// it goes back to the philosophy of DRY (Don't Repeat Yourself)
// with a function cal(a, b) you can write the generic function over and re-use it over and over
// ... again until the end of time. 

function cal(a, b) {
    return a + b 
}

console.log(cal(5,5))

// Data Abstraction = making the code look more simple by hiding the complicated stuff behind functions
// classes and modules 
// but why Data Abstraction? Because reusability, maintainability, testability
// programmers like DRY (Don't Repeat Yourself)

function fack(a, b) {
    return a - b 
}

console.log(fack(5,5))

// what does it mean to "pass" an argument into a parameter
// it means that something give a value to that parameter 
// like "fuck you" as argument into that function's parameter lol 

function apples(a, b) {
    return a + b 
}
console.log(apples("granny apple", "smith apples"))

// return keyword
// the program ran through var c = a + b 
// then the final line is like "give me the result of c" and it did 

function drinks(a, b) {
    var c = a + b 
    return c
}

console.log(apples(5, 5))

// creating 3 functions 
// calling the function inside another function
// feels good man 

function firstFun() {
    console.log("hello I'm FRIST FUNCTION =)")
}

function secFun() {
    console.log("222222")
}

function callFun() {
    firstFun()
    secFun() 
}

callFun()

// local variable = any variable that is inside of a function 
// global variable = any variable that is OUTSIDE of a function 
// simple as 

const yellLisa = 5 

// and just like that, I have a better understanding of global variable
// because yellLisa was outside of the function, it is a global variable
// since it's global, it can be used anywhere
// so I used the yellLisa variable inside the function lisaWut
// and it worked 

function lisaWut() {
    console.log(yellLisa)
}

console.log(yellLisa)

