// Programming session: 71
// Date: Feb 19 2024
// Session: 30 minutes

// local scope = only visible within the function, used within the function 
// ... also known as variable shadowing

let sexyLisa = "She is sexy"

// think of the local variable being more important inside the function than the global variable
// simple as ... it's that simple 

function hello() { 
    let sexyLisa = "She is sexy inside teh function"
    return sexyLisa
}

console.log(hello()) 
console.log(sexyLisa)

// pass the argument into the parameter 5 
// but the return is num + 1 
// think of return as "this code is done, here is the result"
// huh, that's interesting. think of return as "the function is done, here is the result"

function add(num) { 
    return num + 1 
}

// assigning the return to a variable
// then I can work with the data some more 
// this is something new that I didn't know before 
let finalAdd = add(5)
console.log(finalAdd)

// this is a function that returns console.log funny enough 
// it uses boolean and returns two answers
// simple as 

function lisaAge() { 

let lisaAge = false

    if(lisaAge == true) { 
        return console.log("her age is 25")
    } else {
        return console.log("she is NOT 25 years old")
    }
}

lisaAge()

//  == equality operator 
//  === strict equality operator, has to be the same type 
