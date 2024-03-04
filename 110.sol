//SPDX-License-Identifier: UNLICENSED

// Programming session: 108
// Date: March 04 2024
// Session: 30 minutes


// huh that's interesning .. 
// in remix IDE, when you're in the deploy and run tab
// look at the deployed contracts, dark orange button is function 
// and the blue button is variables 
// that's interesting I didn't know that 
// I can only see the myPanty since it's declare public
// I can't see the other variables like myBra, myShoes ... where is it? 
// I need to create a function to see it or something?

pragma solidity ^0.8.0; 

contract a {
    // I can only see the public myPanty variable 
    string public myPanty = "my panties are red";
    uint private myBra = 5;
    string internal myShoes = "I have 10 shoes";
    string myBag = "I got 'em bags";

    // I can only see the public and external and interact with it
    // I guess public and external are similar 
    // and private and internal are similar too 
    function apple(uint a) public { berry(1); }
    function berry(uint a) private {}
    function cherry(uint a) internal {} 
    function dragon(uint a) external {}
}

contract b { 
    function pureForYou() public pure returns (uint) {
        return 5 + 4;
    }

    function punchTime() public pure returns (uint) {
        return 5;
    }
}
  
// view, pure and payable as function modifiers 
// when a variable is OUTSIDE of a function, it's called a state variable
// and you can change the state variable into another value, that's cool 
// How about something cool
// a function that reads the state variable
// a function that changes the state variable 
// I need to learn how to write those 
