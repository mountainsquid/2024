// Programming session: 24
// Session: 20 minutes
// Date: Jan 31 2024

// what we doing now? Continue to learn about functions, there's more things I need to know

// declare a function adddTwo
// have a parameter but it isn't defined yet, it's just x
// have a return x + 2
// remember that x isn't defined yet 
function addTwo(x) { 
    return x + 1; 
}

// console.log the function addTwo
// giving the value of x = 5 
// but it just isn't 5
// it also x + 2 
// which gives it 7
// we know this as proof because it says in the console log when we run the program
// we ran the program again but changed x + 1
// and the answer was 6 

console.log(addTwo(5))

// let's do something more by having more parameters

// declare a function named "add"
// there are two parameters in the function (a, b)
// the return value is a + b 
function add(a, b) { 
    return a + b
}

// if this is correct then the output should be 10 
// the (a, b) earlier was undefined 
// we declared it without defining it 
// now we're giving it (5,5) before
// at the end of the function the return is a + b
// thus giving it 10 
// feels good man
console.log(add(5,5))

// a callback function is a function that calls another function? 
// huh, interesting, like a booty call huh 
// okay then. how do I use a callback function. tell me oh mighty one 

function getAutoGraph(name, address) { 
    // do something with the name and address
    console.log(`signing this for ${name}, the address is ${address}`)
}

// here is the callback function that gets called later 
function callBack() {
    // do something once the autographs have been signed 
    console.log("autographs signed and returned")
}

// call the getAutoGraph function 
getAutoGraph("bob", "123 Elm street")

// calling the callback function 
callBack(); 

// I can understand the part where you have the parameters
// I understand the part where you give values to the parameters
// but the callback function seems overly simple
// is there more to it? 

function hello(name = "world") {
    console.log(`hello ${name}`)
}

// without giving it a value
// the it goes back to the default value of name defined in the parameter itself 
console.log(hello())











