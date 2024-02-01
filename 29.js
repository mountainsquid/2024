// Programming session: 29
// Date: Feb 01 2024
// Session: 30 minutes

// time to diver deeper into javascript
// I wonder what's the common Javascript keywords? 
// linear flow, conditional flow, looping flow, functional flow
// event driven flow, async flow, recursive flow, iterative flow
// that is alot of flows to learn. I will learn them all

var a = 1;
let b = 2;
const c = 3; 

// good programming practice to declare all the variables at the top 

// naming multi variables with assigned values in 1 line 
let pajeet = "hello sir", carName = "Volvo"
console.log(pajeet, carName)

let undefinedjeet 
console.log(undefinedjeet)

// you can reassign values with var, but not with let or const 
// we can test this with var, assign it twice and it doesn't have a debugging error
// can see that it is assigned from 20 to 22 
var age = 20
console.log(age)
var age = 22 
console.log(age)

// let's experiment with that with let 

// this code caused an error 
// it says SyntaxError: Identifier 'lisa' has already been declared
let lisa = 20 
console.log(lisa)
// let lisa = 21
// console.log(lisa)
// keep that in mind 

// ES6 (2015) considered to be modern javascript
// there are some autistic rules for let keyword 
// hoisted ... when you hoisted a variable to the top but why? 

// const cannot be re-declared
// const cannot be reassigned
// const have blockscope 

const show = "show me your penis"
const pi = 3.14
console.log(pi)

// this line would give you an error
// once you define a const its there forever 
// pi = 3.14 + 10
// interesting, since const is pernament, you to assign it a value right away 

// what's cool about learning from web3 school is that it's about the basics and fundamentals
// fundamentals is where you go deep and wide.
// otherwise you'll have gaping holes in your game and wonder why there's so many bugs 

// assign operator = 
// without it, nothing will get assigned
// variables have names but no values
// thank you so much my assigned operator 
let myAge = 10;
console.log("name age is: ", myAge)
