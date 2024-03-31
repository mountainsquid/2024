// SPDX-License-Identifier: UNLICENSED
// date: APRIL 01 2024
pragma solidity ^0.8.25;

contract storageMe { 

    // mapping is key-dictionary datatype structure 
    // think of it as key-value pair 
    // no struct or enum allowed in the mapping but other datatypes allowed
    // so perhaps it's no custom datatype in the mapping 
    // mapping as unique key value pair, feels good man 
    // mapping

    mapping(uint => string) public idols;
    mapping(uint => bool) public cool; 
    mapping(uint => string[]) public numbers; 
    mapping(uint => string[]) public stringsBro;
    mapping(uint => string) public users; 
    mapping(uint => bool) public trueOrNot; 

    constructor() { 
        idols[1] = "Lisa"; 
        idols[2] = "Jenny"; 
        idols[3] = "Jisoo";
        idols[4] = "Rose";  
    }

    // this function is within the contract 
    // it doesn't do much other then when I press the button
    // it returns the value of 25;
    // so I'm guessing when I pressed the button on remix solidity it's calling the function
    // to return the value of roseAge ... is this correct? 
  
    function helpme() public pure returns (uint256) {
        uint256 roseAge = 25;
        return roseAge;
    }


}
