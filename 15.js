// programming session 15, 20 minutes (#15)
// date: Jan 30 2024 

// WTF IS THE WHILE LOOP
// While loop is ... do something while the condition is true

// set what the current views of the music video is 
let currentViews = 10;

// set the goals what views you want the view to be 
let goalViews = 15;

while (currentViews < goalViews) {

    // start streaming the video 
    console.log("Increasing view count by 1"); 

    // increase the viewcount by 1 
    currentViews++; 

    // check if we have reached the goal 
    if (currentViews === goalViews) { 
    
    // announce it
    console.log("WE DID IT BROS!")
    }

}

// let's try again so we can remember the syntax
// this time we're going to bake some cookies 

let bakeCookies = 0;

while (bakeCookies < 5) {
    console.log("Starting with 0 cookie. Keep baking until we hit 5");
    bakeCookies++
}

console.log("we have baked all the cookies")

// let i = 1 
// if i is less than 5
// then keep adding 1 to i 
// until it's 5 
// then stop the loop

for (let i = 1; i <= 5; i++) {
    console.log(i); 
}
