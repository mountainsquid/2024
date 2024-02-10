// Programming session: 48
// Date: Feb 10 2024
// Session: 25 minutes

cereal(done)

function cereal(callMeBaby) {
    console.log('ur having cereal')
    callMeBaby()
}

function done() {
    console.log('AHH I COOMED')
}

// let's do this again, callback function let's go
// callback, passing a function as an agrument into another function's parameter
// function as first-class objects, whatever the means 
// pass the function by calling its name into the parameter, without the () 
// callback for event handling 
// callback for asnyc data fetching 

// Async, think of it as being on a journey on its own

punch(kick) // kick as a callback function for punch 

function punch(followUp) {
    console.log("BAM!you just threw a punch")
    followUp()
}

function kick() {
    console.log("WA-TAH! you just threw a kick")
}

sing(dance)

function sing(callback) {
    console.log("LA LA I AM SINGING")
    callback()
}

function dance() {
    console.log("LA LA I AM DANCING")
}
