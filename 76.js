// Programming session: 76
// Date: Feb 20 2024
// Session: 30 minutes

// why array? because it groups similar items together for easy access
// arrays so you can create a mega database huh 
// using arrays in functions because why not 
// start practicing looping through the array 

// regular function 
function favGirls() { 
    let blackPink = ["jenny", "jisoo", "lisa", "rose"]
    blackPink.push("Minnie")
    console.log(blackPink)
    let myfavBlankPink = blackPink[0]
    console.log("my fav member is: ", myfavBlankPink)
}

favGirls() 

// chad arrow function. But what's the difference between the two anyways? 
const favFruits = () => { 
    let fruits = ["banana", "berry", "cherry"]
    fruits.pop()
    console.log(fruits)
    let favFruit = fruits[0]
    console.log(favFruit)
}

favFruits()
