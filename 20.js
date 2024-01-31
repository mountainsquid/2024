// programming session 15, 20 minutes (#20)
// date: Jan 31 2024 

// oh god, oh god, fr fr no cap 
// learning about template literal
// wtf is a template literal
// template literal, easier way to work with text using `` (backticks)
// instead of the usual '' and "" 
// then you can insert shit with it using ${} 
// feels cool man 

for (let order = 1; order <= 3; order++) { 
    console.log(`taking order number ${order}, what can I shake for you today?`)
    console.log(`here is your ${order} sir have a nice day`)
}

// declare the const 
// why use const, because it's constant, why not 
// AHHHHHH
// declare const namely
// assign "john" into namely
// put john into the shelf namely
const namely = "john"

// time to use the template literal because why not 
// console.log output is "hello john"
console.log(`hello template literal${namely}`)

// const name and age 
// using some more template literal 
const age = 25; 
console.log(`hello ${namely}. My age is ${age}`)

// message1 assigned to strings using template literal
// cause why the f*ck not 
// help me god I'm a code monkey 
// I have hands and I must type 
const message1 = (`hello ${namely}. My age is ${age}. NICE TO MEET YOU BLACKPINK`)
console.log(message1)

// this is f*cking interesting
// you can add numbers in literal template
// I wonder what else if you can with literal templates?
// keep on learning every day and remember 
// learning 20 minutes session at a time oh god oh god fr fr no cap 
const message2 = (`I am currently ${age}. But in 10 years, I'll be ${age + 10}`)
console.log(message2)
