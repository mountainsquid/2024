// Programming session: 49
// Date: Feb 10 2024
// Session: 25 minutes

// know the difference between sync and async  
// sync javascript when the code is executed line by line, until it's fucking done
// async is when the code goes on it's own, executes, and does everything it wants to do
// then it comes back and says "yeah I'm fucking done, thanks for waiting you f*cking nerd"
// for example this code:

/*setTimeout(function () {
    console.log("Async operation");
    callback();
  }, 2000);
*/ 

// would be asnyc because it stops to do its thing
// event lisenter, waiting for the user to click a button before the code does something 
// there is something called callback hell, learn about that later 
// what is promise and await in javascript? 

// why fucking inheritance? to reuse code, code cleanup etc. 

// I am creating a class called person
// inside the class there is a function that says hello

class person {
    talk() {
        console.log('hello')
    }
}

// I am creating a new instance of the object by using the new keyword
// I am accessing the function of the blueprint "person" by using the (.) operator 
let lisa = new person
console.log(lisa.talk())

// first class object in javascript (including function) can be treated as values
// and manipulated as any other data type 
// objects can be assigned a name
// it can return a value 
// it can be stored in a data structure (oh really, you can store a function in a data structure?)
// objects can have method and properties 
