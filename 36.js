// Programming session: 36
// Date: Feb 03 2024
// Session: 45 minutes

// what is getElementById
// you literally get that element by their ID name

// assign const, grabbing the elementbyID first 
// I suppose you have to grab your friend first before you do something to it huh 
// assign myfriend = document.getElementById("myParagraph")
// so you can interact with that data and do something with it 

const myfriend = document.getElementById("myParagraph")

// changing the outfit of your friend 
// despite refreshing the page, it shows "surprise change of paragraph" in the HTML page
// that's interesting
// grasping the basics, let's more on to the next and next. 
// moving to the next step, every day, to the next fucking step 
myfriend.textContent = "surprise change of paragraph"

// so what's the difference between between DOM Manipulation and event listeners?
// DOM manipulation deals with changing the elements directly
// event listeners deals what the user is doing, like clicks, button presses n shieeeet

// interesting that getElementbyID has the varibale name in quotes "" I'll keep note of that 
const button1 = document.getElementById("myButton")
    button1.addEventListener("click", () => {
        const p = document.createElement("p") 
        p.textContent = "you have clicked the button" 
        document.body.appendChild(p)
    }) 

// the code works but I'm not sure why I'm getting a debugging error 
// the DOM is the same as HTML except it's represented as javascript object 
// hmm okay gotchu...
// using method to select the element to change it 
// .addEventListener() as method to interact the element 
// styleproperty to interact with the DOM
// body.append ... append = change something in the HTML doc 
// 
body.append(button1)

// okay I have created and assigned my button to an ID, now what? 

    let document = document.getElementById("ohFack")
    button.addEventListener("click", () => {
    document.getElementById("ohFack").textContent = "change?";
});

// GET ELEMENTBYID. GRAB IT BY THE BALLS.
// THEN YOU CAN CHANGE IT N SHIEEET.
