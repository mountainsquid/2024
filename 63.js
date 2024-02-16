// Programming session: 63
// Date: Feb 16 2024
// Session: 30 minutes

let lisa = true;

// for switch, it's checking the value of lisa 
// then it goes it through case by case, in a chronological order 
// then code stops when it hits the correct case, else it goes to the default section 
// I made an oppsie, I forgot about the break line. brutal. 

switch(lisa) { 
    case true: console.log("yes, you're lisa") 
    break 
    case false: console.log("you're not lisa") 
    break 
    default: console.log("you broke the case statement")
}

function checkMood() { 
    let mood = true 
    let sleep = true 
    if (mood == true && sleep == true){ 
        console.log('this is a good day')
    }
        else { 
            console.log("today is a NOT NOT NOT a good day")
        }
    
}

checkMood()

// looping through an array
// that's something you should learn how to code 
// real life example of looping througn an array would be a ecom shopping cart and updating the price 
// for OF loop good for working with arrays huh 

// finally learned how to loop through an array feels good man 
var blackPink = ["lisa", "jisoo", "rose", "jenny"] 

for(var eachMember of blackPink) {
    console.log(eachMember)
}
