// Programming session: 50
// Date: Feb 11 2024
// Session: 30 minutes

// function expression because it doesn't even have a name
// instead it got created by being called functio() lol 
let yell = function() {
    return "hello"
}

yell() 

const greet = () => "hello"

const message = greet() 
console.log(message)

function cal(a, b) {
    console.log(a + b)
    return a + b
}

cal(5, 6)

// calculate the area of the rectangle 

const width = 10
const height = 5
const areaTotal = height * width

console.log("the total area of rectangle is:", areaTotal)

// ask user to input A, B, C
// then give answers depending on the input

let userInput = 'A'

switch (userInput) {
 case 'A': 
 console.log("you picked A")
 break
 case 'b': 
 console.log("you picked b")
 break
 case 'c':
 console.log("you picked c")
 break
 default: 
 console.log('wrong input bro')
}

// dice game 


let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

// function that calculates the side of a square 

function calSquare(a, b) {
    let area = a * b 
    return area 
}

console.log(calSquare(5, 5))






















