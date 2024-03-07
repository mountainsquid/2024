//SPDX-License-Identifier: UNLICENSE
// Programming session: 123
// Date: March 07 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

contract a { 

    enum lisa { 
        name,
        age,
        height 
    }

    lisa public myLisa;
    lisa public myMinnie;
    lisa public myRose;

    // seems like there can only be 1 constructor per contract
    // that's interesting because the constructor creates the
    // the contrat ... 
    constructor() { 
    myLisa = lisa.name;
    myRose = lisa.name;
    myMinnie = lisa.name; 
    LisaGF.name = "lisa";
    } 

    struct girlfriend {
        string name; 
        int age;
        bool niceGirl; 
    }

    girlfriend public LisaGF; 

}
