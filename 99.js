// Programming session: 99
// Date: Feb 29 2024
// Session: 30 minutes

// class is the blueprint
// instance is the "tangle" copy of the class
// use 'class' keyword to create class
// use 'new' keyword to create instance 
// constructor is to initialize the object 
// constructor always have the name constructor()
// when you use the keyword 'new' the constructor is automatically called
// a constructor must belong to a class
// 
// 
// 


const createKpop = (herName, danceMove, group) => { 
  return { // this is an object literal but written shorthand 
    herName,
    danceMove,
    group,
  }
}

// this is a function call 
const lisa = createKpop("Lisa", "Ass Buster", "Black Pink")
lisa.danceMove = "BOOB POPPER"
console.log(lisa) 

const minnie = createKpop("Minnie", "The Hip pop", "gidle")
console.log(minnie) 
