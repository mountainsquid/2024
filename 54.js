// Programming session: 54
// Date: Feb 12 2024
// Session: 30 minutes

numA = 5
numB = 6

// if numA is LESS or equal to ... 
// since this isn't true, then run the next block of code
// think of if else statement as blocks of code running
// actually you can think ALL of Javascript as running blocks of code
// if the first condition is true, then the block of code stops running
// if it ISN'T true, it goes into the next  block of code
// we're block of code and shit. 

if(numA >= numB) {
    console.log('NUM A IS A BIG MAN')
} else {
    console.log('NUM B IS A BIGGER MAN YEAAHHH')
}

var firstName = "Robert"
var LastName = "Dick"

// if both of the condition is true, then the condition is true and then code will run 
// why use && LOGICAL OPERATOR? 
// because it makes the code look more clean 
// for the OR operator, if only 1 of the condition has to be true for it to run 
// for OR, you don't need both keys to open, you just need 1 key, then using || 
// if you need 2 keys to open the door, then use && heh 

if ((firstName == "Robert") || (LastName = "Dick")) {
    console.log("yes, indeeed your name is ROBERT DICK")
}

// why use for loop?
// because it goes back to the philosophy DRY (DON'T REPEAT YOURSELF)
// if I want to do somethign infinite times I use the for loop
// this is how you scale your operation with code 

// finally learned how to increment more than 1 at a time using += 
// feels good man 
for (x = 0; x <= 10; x += 2) {
    console.log(x)
}
