// Programming session: 35
// Date: Feb 03 2024
// Session: 45 minutes

// wake up and code
// what to code today?
// learn more about concepts and then code
// build a solid foundation
// no point in rushing when I don't know sure about the language
// go deep

// arrow function
// short and concise
// no need for this keyword
// perfect for quick tasks
// use them for callback (whatever that is)

// regular function
function dance() {
    console.log("it's time to dance in the regular function")
}
dance()

// arrow function 
const danceMore = () => console.log("it's time to dance in arrow function")
const danceBody = () => console.log("doing the bodyroll in the arrow function")
const danceFinger = () => console.log("fingering in arrow function")
const danceToes = () => console.log("REEEE ARROW FUNCTION")

danceBody()
danceMore()
danceFinger()
danceToes()

// multi line huh ... 
const sum = () => { 
    console.log("hello")
}

const handShake = () => {
    console.log("handshake time")
}

// using arrow function instead of the regular function
// the return keyword is like, DO SOMETHING to the variables
// then return the result
// therefore it's RETURNING SOMETHING
// THEREFORE THE RETURN KEYWORD
let feetShake = (d, f) => {
    return d + f 
}

// I had a brain fart moment, I forgot to console.log
console.log(feetShake(50,50))
sum()

// arrow function once again
// parameter is dance 
// what's funny is that it's lax about the data type
// so unlike C++ you don't have to go int, string etc declaring it first
// that's nice 

let blackPinkLisa = (dance) => {
    return dance
}

// this is where you pass the argument (value) into the function
// the parameter is a place holder. You declared it inside the function
// but you haven't given it a value ... yet 
// then you give it value OUTSIDE of the function scope
// that's nice 

console.log(blackPinkLisa("Money"))


const greedLoud = (lisaName) => {
    console.log("hello there: ", lisaName)
}

greedLoud("blackpink in your area")

// single line code for arrow function
// no need for {} to make the code more elegant 
// remember no need for the {} 
// instead of this keyword, use the => instead 
// again to make the code more beautiful 
// let NAME =  () 
// ^ that part is important to remember 

let solidCode = () => console.log("hello world")
solidCode()

// memberName as the parameter 
// there isn't even a need for a bracket ()
// god damn. 
// so eleglant, minimalist, simple

let sayHelloLisa = memberName => console.log("hello: ", memberName)
sayHelloLisa("lisa")

let sayHelloNewJeans = memberName => console.log("hello: ", memberName) 
sayHelloNewJeans("hanni")

// what does this code do? 
// you declare the arrow function sayHelloGidle with the line let sayHelloGidle
// then memberName is the parameter 
// then finally the block of code in the end => 
// so we can break it down into 3 parts 
// declare = parameters => code block 
// note that there are 8 ways to write arrow function 
// just have to slowly study it that's all 

let sayHelloGidle = memberName => console.log("hello: ", memberName)  
sayHelloGidle("Minnie")

// go ahead and create your list of members 
let blackPinkMembers = ["lisa", "jenny", "jisoo", "rose"]

// time to loop them through as a way to hype them 
for (let i = 0; i < blackPinkMembers.length; i++) 

// 45 minutes of learning, that's all the learning for this session. 
// time to take a break. 
