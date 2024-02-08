// Programming session: 45
// Date: Feb 08 2024
// Session: 45 minutes

// need to get into expressive function and arrow function 
// assign a variable to the function 
// use the function() ... I wonder if it can take variables?

let fook = function() { 
    console.log('hello there fook')
}

fook()

// arrow function 
// assign the variable to the arrow function 
// instead of the function keyword just use => 

let hello = () => {
    console.log("wtf hello")
}

hello() 

let goodbye = () => {
    console.log("goodbye using arrow function")
}

goodbye() 

let sexytime = () => {
    console.log('sexy time')
}

sexytime() 

const addNumbers = () => { 
    let see1 = 5
    let see2 = 10
    return see1 + see2  
}

const result = addNumbers()
console.log(result)

// what is happening with this code
// you're creating an arrow function 
// instead of creating a regular or expressive function 
// this function has no parameter 
// then inside the blockscope, I have declared pee1, pee2 using let 
// the variables are blockscope'd meaning that they only exist within that function 
// the return is the computing of value of pee1 + pee2 

const noNumber = () => { 
    let pee1 = 1
    let pee2 = 2
    return pee1 + pee2
}

// seems like noNumber code is to add 2 variables together and then return the result
// nothing much to it huh
// then I assign the sum of the calculation of noNumber() into finalNoNumber
// then using that finalNoNumber display into the console.log 
// seems lik arrow function is more concise, doesn't even need {} sometimes 
// no this. keyword with arrow function? 

let finalNoNumber = noNumber() 
console.log(finalNoNumber)

// I am learning node.js because I want to learn about coding a telegrambot in javascript
// let's get to it 
// node.js is a runtime on a server, but what does that mean? 
// telegram.js.org is a powerful node.js modecule that interacts with telegrambot API 
// what the FUCK is the differenceb between GIT and github :o 
// github, git is used for writing code on a team
// git = version control system 
// github is hosted git on the cloud, yeah baby 
// git for tracking changes 
// git history backup just in case you fucked up the code 
// git for team based development 
// git is cli, github is webbased 
// trunkbased development, different versions of the code and shieeet
// 

















