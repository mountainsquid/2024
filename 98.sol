//SPDX-License-Identifier: UNLICENSED
// Programming session: 97
// Date: Feb 29 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// it's blank in here
// what happens if I declare a variable here ...
// huh that's interesting ... 
// string public hello;
// uint, unsigned integers, non-negative whole numbers 
// int, signed integers, negative and whole numbers 
// decimal numbers don't exist in solidity, is that true
// address is a datatype in solidity? 

contract yes { 
    bool public warm; 
    uint256 public myAge = 5; 
    uint8 public lisaAge = 18;
    uint public myCucumber = 8; 
    bool public night = false; 
    bool public day = true; 
    uint256 public a = 5; 

    function changeWarm() public {
        warm = true;
    }

}
