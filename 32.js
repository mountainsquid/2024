// Programming session: 32
// Date: Feb 02 2024
// Session: 45 minutes

// in the last session I have already learned about if, else if, else 
// then that has evolved into switch case 
// then ternary operator as a more elegant form of if flow 
// it evolved 3 levels: if, switch, ternary operator
// damn ... the game keeps going higher 
// I'm thinking of you combine if flows with loop flows it's going to be more powerful right 

// repDone is how many reps you have
// repGoal is how many reps you're going to do, incremented by 1 
// while (CONDITION INSIDE HERE) 
// then use incremental operator ++ or -- 
// if the code below is flawed then there would be a debug error but there isn't 

let repDone = 0 
let repGoal = 10 

while (repDone < repDone) {
    console.log("current repdone: ", repDone)
    console.log("keep pumping until you hit 10 rep")
    repDone++
}

console.log("completed all reps")

// same concept below but how do I make it display each count? 
// energy level at 100, you're full of energy
// you're going to keep listening to blackpink until you're tired of it
// that's why while (energyLevel > 0) the conditional where you're tired and 
// don't even want to dance anymore 
// good thinga about console.log is that it will display the countdown 
// energyLevel -= 25 a statement that substracts 25 on each loop cycle 
// as the loop suggest, it's going to keep looping itself in the code
// until the conditional is no longer TRUE, then it stops 
// includding the energyLevel -= 25 part

let energyLevel = 100; 

while (energyLevel > 0) {
    console.log("current energy count: ", energyLevel)
    console.log("keep listening to blackpink") 
    energyLevel -= 25
}

console.log("tired now")

// what is the difference between for and while loop anyways?
// while loop, known number of repetition, specific sequences 
// while loop, unknown number of repetition, dependent on variable 
// for(inital; condition; increment/decrement)
// while(condition)

for (let daysLeft = 4; daysLeft > 0; daysLeft--) {
    console.log("Only: " + daysLeft + "days until their comeback")
}
console.log("their comeback is finally here")

// time for another for loop 
// keep drilling until you get it 
// seems like for loop is a tiny bit more complex than while loop
// but its still simple to understand
// there's 3 parts to the for loop
// declare the variable, the condition, the increment/decrement
// that's it, nothing too hard to remember, is it? 

for (let i = 1; i <= 5; i++) {
    console.log("adding +1 until 1 hits 5! ", i)
}

// declare z 
// if z is GREATER than 0 ...
// then keep substracting z by 1 until it hits 0 
// simple as 
// what is a practical use case for this?
// pretend you want to count down from 10 push ups
// keep counting down by -1 until you hit 0
// or someone account is credited with 10
// and they take out 1 each time
// they keep taking out by 1 until they hit 0 

for (let z = 10; z >= 0; z--) {
    console.log("-1 until z hits 0! ", z)
}

// b is at 0
// if b is LESS than 3, keep adding +1 to b
// why is this useful?
// say it's an RPG game
// everytime you hit a monster, the character gains +1 experience point
// but of course IRL, you want to randomize the point 

for (let b = 0; b <= 3; b++) { 
    console.log("keep adding +1 to b: ", b)

}

// I don't know, perhaps my brain works in a different way
// but I have trouble telling the difference between > and <
// or perhaps I just need more practice :) 
// > greater than
// < less than 
// >= greater than or equal to 
// <= less than or equal to 

let c = 3 

// sometimes you gotta go back to basic 
// it has been more than a decade since I was in math class
// so I need to have a reminder on the greater and less than symbols huh 
if (c > 2) {
    console.log(`C is greater than 2`) 
}

if (c < 10) {
    console.log(`C is greater than 10`) 
}

if (c >= 2) {
    console.log(`C is greater than 2 >=`) 
}

// ! NOT operator
// think of of the ! operator as the oppposite that flips the truth

let playBlackPinkSong = false; 

// if (!playBlackPinkSong) means "THE SONG IS NOT PLAYING"
if (!playBlackPinkSong) {
    console.log("why aren't you playing blackpink song?")
} else {
    console.log("black pink is the best!")
}







