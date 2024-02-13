// Programming session: 58
// Date: Feb 12 2024
// Session: 30 minutes

// for object literal, "delete" is a keyword
// you can delete a property from the object using delete 

const myLoveLisa = { 
    herName: "lisa", 
    herAge: 35, 
    greet: function() { 
        console.log("hello lisa pizza")
    }
}

myLoveLisa.greet(); 

// object literal is defined by let NAME = { key:property,} syntax 

const myFavBook = { 
    bookTitle: "fight club",
    bookAuthor: "Chuck P",
    greet: function() {
        console.log('this book is the fucking bomb!')
    }
}

myFavBook.greet() 

// its an object literal
// the object literal has a name, like in most objects n shit
// key value pairs KEY: VALUE, 
// KEY: function() { }
// what access to that sweet ass, I mean object literal? Gotta call it by its right name
// or else you'll get a hang up 
// it's NAME OF OBJECT LITERAL, DOT NOTATION KEY NAME PAIR 
// in this case, punchUp.age, punchUp.nameUFC, punchUp.fight() etc
// feels good man 
// object literal, object spread operator, deconstructing, learn all about that 
// destructuring applies to arrays and object literals
// but why? because it makes the code look cleaner 
// 

const punchUp = { 
    nameUFC: "Strictland",
    age: 35, 
    fight: function() { 
        console.log("he's good at punching")
    }
}

punchUp.fight()

const kickUp = {...punchUp, sex: "male"}

console.log(kickUp.sex)
