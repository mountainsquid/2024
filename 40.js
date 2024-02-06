// Programming session: 40
// Date: Feb 06 2024
// Session: 45 minutes

// need to review class and get good at it
// I'm thinking of doing "drills" where I just write down down the syntax so I can remember 
// when you're declaring a class, declare the class, declare the constructor, declare the properties 
// no error, good
// remember: declare class, declare constructor, assign parameters 
// constructor acts like somesort of setup function huh 
// this.gymName = assigning the object values to the properties 

class gymTime { 
    constructor(gymName, time) {
        this.gymName = gymName
        this.time = time 
    } 

}

class LisaGirl { 
    constructor(herName, herAge) {
        this.herName = herName
        this.herAge = herAge
    }
}

// it seems that when I'm creating the constructor 
// the parameters don't assign until you assign them inside the constructor
// seems like I'm bringing the dick's width and length to life using the constructor, feels good man 

class myDick { 
    constructor(length, width) {
        this.length = length
        this.width = width 
    }
}

class vaginaSize { 
    constructor(hole, lips) {
        this.hole = hole 
        this.lips = lips 
    }
}

// interesting when you declare a class you put a {}
// when you start the constructor function you also create another block of {}
// don't forget 

class bankAccount { 
    constructor(id, number) {
        this.id = id
        this.number = number
    }
}

// now let's create a class but include a function inside the class

class yell { 
    constructor(phrase1, phrase2) {
    this.phrase1 = phrase1
    this.phrase2 = phrase2 
    }
    scream() {
        console.log("OH YEAHHH!!!")
    }
}

// created class called yell
// then assigned myYell = new yell("OH NOOOO", "WHOOO WHOOO")
// first I declared a new instance of the class (object?)
// then I used the instance to call the function of yell 
// I also access properties of myYell using (.) 

const myYell = new yell("OH NOOOO", "WHOOO WHOOO")
myYell.scream(); 
console.log(myYell.phrase1)
console.log(myYell.phrase2)

// I'm creating a new class called myLady
// in this contstructor parameter, I've given 2 parameters 
// I also assign it properties within the constructor code 
// class has its own {} 
// constructor fucntion has its own block code {}
// screaming function has its own block code

class myLady {
    constructor(herName, herAge) { 
        this.herName = herName
        this.herAge = herAge
    } 
    screaming() { 
        console.log("make me a sandwhich!")
    }
}

// creating instance of a class
// instance is lisaGirl, class is myLady
// now I'm using console.log to access the property of lisaGirl.herName and lisaGirl.herAge  
const lisaGirl = new myLady("lisa", "25")
console.log("Her name is: ", lisaGirl.herName)
console.log("Her name is: ", lisaGirl.herAge)

// for (let i = 0; i <= 3; i++ ) { 
//     console.log(i)
// }
 
// in this code, it's i = 5 
//  if i is GREATER or equal to 3 
// then i-- each time 
// so it counts down 5 to 3 in the console 

// for (let i = 5; i >= 3; i--) {
//     console.log(i)
// }

// today I learned a new keyboard shortcut, how to comment lines out
// I also know 2 other keyboard shortcut, CTRL + B to open or close the menu
// and CTRL + ~ to close the terminal, like that. 
// so it's 3 useful keyboard shortcuts. Every day I will learn just 1 useful keyboard shortcut

// i is 3 
// if i is greater or equal to 0 
// i-- until it reaches 0 

for (let i = 3; i >= 0; i--) {
    console.log(i)
}
