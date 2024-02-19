//SPDX-License-Identifier: UNLICENSED
// Programming session: 71
// Date: Feb 19 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// what am I doing in this code
// I created a contract called solidIntro 
// then I'm going to add a bunch of functions in the contract
// it seems that solidity is about adding a bunch of functions and calling it, so far
// using external so the function can be called from outside 
// pure doesn't write anything it seems 

// State mutability keywords in Solidity: view, pure, payable 
// visibility specifiers: private, internal, external, public 
// emit is a keyword 
// msg.sender is a global variable  


contract solidIntro { 

    uint256 a; 

    function addTogether(uint256 a, uint256 b) external pure returns (uint256) {
        return a + b;
    }

    function minusWhy(uint256 a, uint256 b) external pure returns (uint256) {
        return a - b; 
    }

    function setValueOk(uint256 _a) external { 
        uint256 a = _a; 
    }

}
