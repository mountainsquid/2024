// Programming session: 44
// Date: Feb 08 2024
// Session: 45 minutes

// time to learn about while loop

let count = 0 

// while loop, keep doing it while the condition in the loop is true 
// for example, if its a standup fight, you can keep kicking the leg until the person is down 

while (count <= 5) { 
    console.log("count: ", count)
    count++  
}

// learning how to use while chant
// counting to 1, 2, 3, 4, 5
// while (something is true), keep doing the code 
// do while loop, ensures that the loop goes through once 
// while loop, even driven programming 
// can cause infinite loops so becareful 

let chant = 0 

while (chant <= 5) {
    console.log("blackpink in your area: ", chant)
    chant++

}

// there's nested if statements
// break keyword will stop and break the loop? 
// function expression is a anon function, no name on it 

const helloYou = function() {
    console.log('hello darkess my old friend')
}

helloYou() 

// function declaration is different from function expression
// what is the difference? 
// there is no name for function expression, which makes the function anon 
// learn about hoisting and closures in javascript 
// hoisting = can use a declared function before declaring the function lol 

// and just like that I've learned function expression and arrow function
// feels good man 
// but it's not good enough to know the syntax, have to figure out the WHY use arrow function 

let lisa = (herName) => {
    console.log('MY NAME IS LISA')
}

lisa()

// new code time 

// the variable herName is a local varible, so it only exists INSIDE the function
// there is no function name in arrow function, therefore you have to assign it to a variable 
// I wonder if you can hoist an arrow function? 
// seems like you can't hoist an arrow function, I just tried it 

let rose = (herName) => { 
    console.log('name is rose')
}

rose() 











