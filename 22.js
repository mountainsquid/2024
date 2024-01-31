// Programming session: 22
// Session: 20 minutes
// Date: Jan 31 2024

// time to refresh about learning about arrays 
// array is a bunch of variables pegged to a number in the memory
// then I can call it using [1] [2] [0] and shieeeet
// but how do I loop through an array? 
// this is what ChatGPT is for 

// seems like you're going to have sex with all the ladies and some guy named craig
let haveSexList = ["lisa", "jenny", "maria", "craig"]

// display your array 
// display the first variable in the list 
// is it really a variable? or value? let's ask ChatGPT
// okay ChatGPT says it's a value, not a variable. thanks mang 
// array will show Lisa because she is first in the list 
console.log(haveSexList[0])

// I want to show all the values in the array
// it is showing all the values in the array nicely, good
console.log(haveSexList)

// but how the fuck do I loop through the array? 
// fine, it's looping through but what does the code do?
// let's ask Google Bard
// i = 0; 
// if i < is smaller than haveSexlist
// keep adding 1 to it using ++ 
// then display it through console using the haveSexList[i]

for (let i = 0; i < haveSexList.length; i++) {
    console.log(haveSexList[i])
}

// ++ (increment operator)
// -- (decrement operator), going down -1 at a time huh 

// not sure why counting is displayed at 5 ... weird 
let counting = 5
let newCounting = --counting
console.log("counting is: ", counting)
console.log("newCounting is: ", newCounting)

let lisaCount = 18; 
console.log(lisaCount)

// this is correct
// need to place the decrement in front of the variable

let newLisaCount = --lisaCount
console.log(newLisaCount)

// first declare variable repsLeft 
// assign the repsLeft with 10 
// declare firstSet, then assign it to repsLeft
// but give --Repsleft to subtract it 
// then display it in console the new value of repsLeft
// yes I'm aware that I'm autistic

let repsLeft = 10; 
let firstSet = --repsLeft
console.log("number of reps left: ", firstSet)

// conclusion of this 20 mins lesson
// arrays is part of data structure 
// get good at arrays n shieeet
// next up I'm going to learn about objects in Javascript

