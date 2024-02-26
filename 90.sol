//SPDX-License-Identifier: UNLICENSED
// Programming session: 71
// Date: Feb 19 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// State mutability keywords in Solidity: view, pure, payable 
// visibility specifiers: private, internal, external, public 
// emit is a keyword 
// msg.sender is a global variable  


contract solidIntro {

    // time to create the struct
    // to me, the struct looks alot like value key pairs in javascript (object literal)
    // I wonder if there is a difference, I'll ask chatGPT later 

    struct Color { 
        uint red; 
        uint green;
        uint blue;
    }

    // mapping to store the colors 
    // what is mapping in solidity, I forgot
    // it's a type of data structure isn't it 
    mapping(string => Color) public colors;

    // function that add colors to the mapping 
    function addColor(string memory name, Color memory color) public { 
        colors[name] = color; 
    }

    // function to get color by name 
    function getColor(string memory name) public view returns (Color memory) {
        return colors[name];
    }
}

// when it comes to mapping you're using map to store user name and addresses, feels good man
// voting system, I'm guessing you're keep track of the addresses and tally up the votes 
