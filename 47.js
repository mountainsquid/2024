// Programming session: 47
// Date: Feb 10 2024
// Session: 25 minutes

// time to learn about call back function but in code ought
// a function can be a variable 
// a callback function is when the function is done executing, it calls another function
// simple as but where's the code? 
// callback is a function set as a paramter inside another function, huh interesting
// ok so callback is used in asynchronous operations 
// think of call back as "hey, when you're done, call this next"
// but why? because javascript is a single thread language lol 
// I FUCKING DID IT. I DID THE CALL BACK FOR THE FUNCTION FEELS GOOD MAN
// First, cereal() gets done, then done() gets done 
// When you're invoking cereal(), you're passing the done() as a parameter inside the function 
// so a function name inside the parameter of another function. interesting but why? 
cereal(done)

function cereal(callMeBaby) {
    console.log('ur having cereal')
    callMeBaby()

}

function done() {
    console.log('AHH I COOMED')
}
