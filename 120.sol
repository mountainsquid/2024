//SPDX-License-Identifier: UNLICENSE
// Programming session: 120 
// Date: March 07 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 

contract a { 

    // something about the syntax of enum that I have to remind myself
    // use the keyword enum (obviously)
    // then the enum name, I'm starting to see a pattern here 
    // follow by a scope {} because there's going to be variables inside this bad boy 
    // last "variable" (jenny) doesn't have a comma, don't forget that 
    enum blackPinkmembers {
    lisa, 
    jisoo,
    rose,
    jenny
    }

    enum newJeans { 
    Minji,
    Hanni,
    Danielle,
    Haerin,
    Hyein

    }

    // enum = Enumerable, list of predefined const values, if that's really fooking true 
    enum fight {
        punch,
        kick,
        teep,
        elbow
    }
    
}
