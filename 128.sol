//SPDX-License-Identifier: UNLICENSE
// Programming session: 128
// Date: March 08 2024
// Session: 15 minutes

pragma solidity ^0.8.0;

// the point of coding isn't to remember the syntax 
// but to think about what exactly are you coding
// how does this tool fit in the toolbox? 
// what is the point of the struct? 
// point of struct is to create a "class"
// so I can create 10,000 instances 
// when I think about it, struct is about DRY (don't repeat yourself)
// what is software anyways, it's all about scale 

contract a {
    // define the struct, as if it's some sort of blueprint 
    struct newJeans { 
        string name;
        uint8 age;
        string danceMove; 
    }
    
    // declare the public variable.
    // I wonder if this is kinda like creating a new instance? 
    newJeans public hannie; 
    newJeans public minji; 
    
    // need to create a constructor for this struct
    // because need to create the global variable instead the constructor
    // but why ought? 
    // when I deploy the contract I can see the struct 
    // struct reminds me of object literal in javascript, that's cool
    constructor() {
        hannie.name = "hannie";
        hannie.age = 18;
        hannie.danceMove = "booty pop"; 
        minji.name = "minji";
        minji.age = 19;
        minji.danceMove = "shoulder roll";
    }
}
