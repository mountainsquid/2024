// Programming session: 26
// Date: Feb 01 2024
// Session: 30 minutes

// time to learn more about objects 
// I suspect that its really useful for algos and such
// there is something I should remember about object
// is that there isn't any keyword that declares that its an object
// you just declare it as const but should I declare it as var?
// let's ask AI
// so it seems that it is good practice to declare it as const 

const bigPenis = { 
    length: 8,
    grith: 3.5,
    color: "brown", 
}

// display that indeed, the penis is brown
console.log(bigPenis.color)

// then uses delete keyword to delete the value of color 
// the delete keyword deletes the property and the value itself
// why would you want to use something like this?
// say there is a program in a database
// and you want to delete that off the record
// I suppose you would use this keyword

delete bigPenis.color

// now in console the color is "undefined"
// first it was brown and now it's undefined
// the color of the penis is gone
// what kind of magic is this? 
// that's because the code for javascript is interpreted
// the code is run from top to bottom in a sequenced order 

console.log(bigPenis.color)

// time to access the propertries of the object
// and display it on console
// okay the length and the color of the penis is showing
// great!

console.log(bigPenis.length) 
console.log(bigPenis.color)

// okay now I need to remember the syntax of the object, 
// it goes like KEY: PAIR, 
// to declare the object itself you're not going to use a keyword
// instead you're going to just declare const NAME = {}
// reminds me how array goes like var NAME = ["thing"]

const smallPenis = { 
    color: "brown",
    length: 4, 
    big: false,
}

// this shows the boolean value of the penis.big property  
console.log(smallPenis.big)

// calling the function in the object
// I guess its the property of the function? 

// let's try again

const blackPink = {
    members: ['jenny', 'lisa'], 
    perform: function() {
        console.log("BLACK PINK IS PERFORMING 🎤💃")
    }
}

// created the function within the object
// and now the function is working when called 
// interesting, when you create a function in the object
// you just use the word function() because the line...
// perform: function(), the perform is the name already
// I have that in mind 

blackPink.perform()

// interesting, there is a "this" keyword in javascript 
// "this" keyword refers to an object
// in Javascript, almost everything is an object wtf.
// objects being written as name : value pairs 
// const gay_man = { name: "john doe"}

const gamingPC = { 
    laptopName: "victus",
    cost: 1000,
    yell: function() {
        console.log("my laptop is yelling")
    }
}

// to access the function in the object
// simply use the key (it's the key, right?)
// and add () 

gamingPC.yell() 

// assign the object function to stupid because why not
var stupid = gamingPC.yell() 
console.log(stupid)
