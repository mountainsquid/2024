// programming session 15, 20 minutes (#16)
// date: Jan 30 2024 

// parameters are values for the function when you call it 
// construct the function
// the code block inside the function
// call the function

function clap() { 
    console.log('clap'); 
}

clap();
clap();

// time for some else if statement
// get that control flow
// feels good man

let energy = "high";

if (energy == "low") {
    console.log("hit a smooth body roll because energy lvl low")
} else if (energy == "med") {
    console.log("drop a shoulder move cause lvl energy mid") 
} else {
    console.log("break out the break dance")
}

function randomSwordState() {
    let random_value = Math.random();
    if (random_value < 0.5){ 
        sword_state = "sharp"; 
    } else {
        sword_state = "broken";
    }
     return sword_state;
}

let sword_state = randomSwordState(); 

if (sword_state == "broken") {
    console.log("your sword is broken and you cannnot fight")
} else if (sword_state == sharp) {
    console.log("you're slicing through the enemies")
} else { 
    console.log("you have killed all the enemies")
}

// I am almost at the end of the less
// and I'm getting a debugging error 
// "ReferenceError: Cannot access 'sword_state' before initialization"
// I don't know how to fix it but I'll fix it later
// this session learning about function and else if statement
// need to remember the syntax a bit 
