// Programming session: 78
// Date: Feb 21 2024
// Session: 30 minutes

// there is such thing as a function call stack, interesting I didn't know that 
// function stack is is sequential, hence single thread coding 
// async = not happening at the same time 
// I suppose you can think of async as multi-thread 
// why async? fetch data from a server, execute something with a delay, do something after an event 
// promises and web API for async coding 

const lisaHello = () => { 
    console.log("hello there friend")
}

const lisaDancing = () => { 
    console.log("this is lisa dancing for you")
}

// calls the lisaHello() function first 
// before calling on lisaDancing with 2 seconds delay 

lisaHello() 
setTimeout(lisaDancing, 2000) 

// there is something called task queue in javascript, keep that in mind  
// there is event loop in javascript, something to learn about later 

function f1() { 
    console.log("f1")
}


function f2() { 
    console.log("f2")
}

function main() { 
    console.log("main first")
    setTimeout(f1, 0)
    f2()
}

main() 
