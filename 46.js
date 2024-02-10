// Programming session: 46
// Date: Feb 10 2024
// Session: 45 minutes

// what is a ternary operator? 
// it's a short hand syntax for writing mini if-else statement
// simple as 
// something like this: condition ? valueifTrue : valueifFalse 

// basically, ternary operator is like (CONDITION) -> (IS IT TRUE) - (IS IT FALSE)
let poo = false 
let pooState = (poo == true) ? "there is poo on the floor" : "there is no poo"
console.log(pooState)

// this should display "she is 18 year old" 
// cause you're using the greater than, or equal to 18 
let herAge = 18
let lisaAge = (herAge >= 18) ? "she is 18 years old" : "she is NOT 18" 
console.log(lisaAge)

let amount = 1000
let yourAmount = (amount >= 999) ? "MOAR THAN $1000" : "you have LESS THAN 1 GRND"
console.log(yourAmount)

// Syntax is var assign = (condition) ? : 

// var = variables limited to a function  
// let = variables limited into a block scope {} 
// for example, if use let i = 5 inside a for loop, and I tried to access it outside of the for loop
// it would not work because it's outside of that block scope 
// var declared within a blocksope of a function cannot escape outside of the function 
// huh seems like it's working for me 
// use let when declaring global varible don't forget 
// consider using let over var 

fook() 
function fook() {
    for (let i = 0; i < 3; i++)
   console.log(i)

}

let members = ["lisa", "jisoo", "jenny", "rose"]

// spread operator
// what does it do and whats its good for? 
console.log(...members)

for (let i = 0; i < members.length; i++) {
    console.log(members[i])
}

// what the fuck is a rest parameter
// and what does it do? that's the question 
// rest parameters, can have indefinite numbers in the function's parameter 
// function sum(...nums) <-- this is a rest parameter syntax 
// first principle, what the fuck is it, what does it do, and why use it? 
// call back. What is it? 
// it seems that call back function is, once the function is done, it calls another function inside the code
// 









