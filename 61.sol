//SPDX-License-Identifier: UNLICENSED
// Programming session: 61
// Date: Feb 14 2024
// Session: 30 minutes

// payable function enables contract to recieve ETH 
// viritual function, what is it? 
// state variable is stored in the blockchain itself 
// statically typed language, so you always have to declare the variable type 
// 


pragma solidity ^0.8.0;

contract helloWorld {

    uint256[] favNums; 
    bool isGay = true;
    bool isStraight = false;
    string lisaName = "Lisa";
    uint256 finger; 

    uint256[] public blackPink = [1, 2, 3];

    event sayHello(string message);

    function lisaHello() public {
        emit sayHello("hello this is lisa");
    }

    function fingerMe() public view returns(uint256) {
        return finger;  

    }

// there's read function, which just reads the function 
// and there's write function which costs gas me thinks 
// read function, free
// write function costs gas

    function addingFingers() public { 
        finger = finger + 1;
    }

    // this is a constructor function that can only be used once, but is that true? 
    constructor() {
        finger = 0; 
    }
}
