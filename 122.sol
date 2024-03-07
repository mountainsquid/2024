//SPDX-License-Identifier: UNLICENSE
// Programming session: 122
// Date: March 07 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

contract a { 

    // declaring the enum 
    // think of enum holding a list, it's a dictionary after all 
    enum status { 
        pending,
        arrived,
        shipped,
        cancelled
    }

    // making enum a public variable 
    status public herStatus;

    // enum, struct, mapping come at me bro

    enum her { 
        name,
        age,
        height
    }
    // I suppose I have to create this in order to access the enum 
    // something that has to do with scope 
    her public Lisa;
    her public Minnie;
    her public Jisoo;
    her public Jenny;
    her public Rose; 

}
