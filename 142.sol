// SPDX-License-Identifier: UNLICENSED

// SESSION: 142
// DATE: APRIL 01 2024
// TIME STUDIED: 20 MINUTES 

pragma solidity ^0.8.25;

contract storageMe { 

    // for this code, its a blue button is the name of the function
    // so the blue button = viewMe 
    // when I press the button, I am calling the function
    // the function returns a value of a uint 
    // this returns the value of the uint 
    // but I don't see the name of the uint 
    // why is that? 

    function viewMe() public pure returns (uint) {
        uint lisa = 18;
        return lisa;
    }

    // for this function why do I have to use the returns uint in the function delcaration
    // is it because solidity needs to know that it's supposed to return a uint? 
    function seeMe() public pure returns (uint) {
        return 19;
    }

    function reAssign() public pure returns (uint) {
        uint fav = 10;
        uint newfav = 11;
        fav = newfav;
        return newfav;

    }


}

