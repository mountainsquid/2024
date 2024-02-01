// Programming session: 30 
// Date: Feb 01 2024
// Session: 30 minutes

let a = 5 
let b = 4

// I am adding shit
console.log(a + b)

// I am subtracting shit
console.log(a - b)

// I am dividing shit
console.log(a % b)

// Arithmetic Operators
// then we fucking go to the comparsion operators 
// so many operators. The simple logic makes up the complex

// != this shit is not equal to
// 5 is not equal to 6 

if (a != b) {
    console.log("A is not equal to B: ")
} 

let c = 5 
let d = 5 

if (c == d) {
    console.log("C is equal to D ")
} 

// == operator, equal in value? Surely it isn't the assign value 

if (a > b) {
    console.log("A is greater than B")
}

// what is an example of "less than" that is useful in coding
// say b = bankAccountAmount 
// if there are trying to withdraw a LARGER AMOUNT than the bankaccount, then ATM won't let them 
if (b < a) {
    console.log("b is less than a")
}

let bankAccountAmount = 100
let withdrawAmount = 200 
let amountLeft = bankAccountAmount - withdrawAmount 

// if the amount is GREATER, then you can withdraw 
if (withdrawAmount > bankAccountAmount) {
    console.log("STOP RIGHT THERE. YOU'RE TRYING TO WITHDRAW TOO MUCH")
}

// work with DOM and figure out how to take user's input
// start coding where the code is event driven flow 
console.log("After the withdraw, this is how much you have:", '$' + amountLeft)

// finally we get to the logical operators
// AND, OR, NOT
// ||, &&, ! 
// seems like the ! value is mostly for boolean 

let fruit = "apple" 

switch(fruit) {
    case "apple":
        console.log("oh dear god you have apples")
        break
    case "bananas": 
        console.log("you got yourself some BA-NA-HAHAHAA")
        break
    default: 
        console.log("I don't know what you have anon-san")
}

// ok thats great by why use switch case over if statements? 
// is it because it's more convenient? More nice? what is it ?
// why switch statement? because it's easier to read and organize
// huh, like a modern update of the if statements
// nested ifs is a pain in the ass to read 

// THAT'S ALL THE LEARNING FROM THIS SESSION, BYE.
