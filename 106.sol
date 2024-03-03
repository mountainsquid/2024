//SPDX-License-Identifier: UNLICENSED

// Programming session: 106
// Date: March 03 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 

// the question is, why enum? 
// because it's easier to read for humans
// doesn't matter to a machine ... 
// enum kinda reminds of object literal in javascript 
// 

contract c { 

    Pizza public newPizza;
    enum Pizza { 
        small, // 0 
        medium, // 1
        large // 3 
    }

    soda public specialSoda;
    enum soda { 
        nosugar, 
        sugar,
        manySugar
    }

    women public specialWomen;
    enum women { 
        fat, 
        normal,
        skinny
    }

    laptop public thinkpad;
    enum laptop { 
        thinkpad104x,
        thinkpadGen4,
        Lenovo
    }

    // ok now that I have figured on how to write enum 
    // what is next? how do I access the key value pair? 
}


