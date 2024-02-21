// Programming session: 78
// Date: Feb 21 2024
// Session: 30 minutes

// promise arugment as resolve and reject 
// "function as argument" don't forget about that, then it becomes a call back 
// function call back is useful for async operator, feels good man 

// resolve and resolve in promise, learn more about that 
// promise either fulfilled or rejected, remember that 
// below is Google Gemini generated code, I'll it's not useful but I'll learn more about it later 

function jumpChallenge(yourDistance) {
    // Simulate jumping (random distance between 1 and 5 meters)
    const friendDistance = Math.floor(Math.random() * 5) + 1;
  
    return new Promise((resolve, reject) => {
      if (yourDistance > friendDistance) {
        resolve("You jumped farther! Hooray!");
      } else {
        reject("Oops, your friend jumped farther! Go practice!");
      }
    });
  }
  
  // Your jump distance (replace with your guess)
  const myJump = 3;
  
  jumpChallenge(myJump)
    .then(message => {
      console.log(message); // "You jumped farther! Hooray!" if you win
    })
    .catch(error => {
      console.error(error); // "Oops, your friend jumped farther! Go practice!" if you lose
    });
