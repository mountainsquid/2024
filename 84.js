// Programming session: 84
// Date: Feb 24 2024
// Session: 30 minutes

// arrow function because the other function is so old school 
// using for loop, 3 times 
// using for loop because it's useful for array 
// but if you're looking to loop through propertries then you're looking at for in 
let loopMe = () => { 
    for(i = 0; i < 3; i++) {
    console.log("SCREAM 5 TIMES FOR ME") } 
}

loopMe(); 

// create an arrow function called lisaGirl
// using arrow function because it looks more aesthetic
// inside the function I created an object literal called lisaLisa
// I'm creating this object literal because I want to loop through it using for in loop
// why? because I'm trying to learn for in loop and what its good for 

let lisaGirl = () => { 
    const lisaLisa = { 
        name: "lisa",
        age: 35, 
    }

    for (let key in lisaLisa) { 
        console.log(`${key}: ${lisaLisa[key]}`)
    }
}

lisaGirl()
