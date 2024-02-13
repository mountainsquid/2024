// Programming session: 56
// Date: Feb 13 2024
// Session: 30 minutes

//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// constructor can only run it once 
// memory is a keyword in solidity 
// finally debugged and ran my  first hello world in solidity
// feels good man 
// I debugged it alright 

contract hello {
    string lisaHello; 

    constructor() {
        lisaHello = "hello world";
    }

    function sayHello() public view returns(string memory) {
    return lisaHello;
    }
}

contract dataTypes {
    // time to define datatypes n shieeeet
    // let's go :) 
    // that's interesting payable is a keyword in solidity 
    // payable is the keyword where the contract or function can get ether
    // as in "fuck you, pay me" type of thing
    // pretty cool
    // function getPay payable public() 
    // a public function, any contract or person can interact with it

    uint256 myNumber = 555;
    bool lisaAge = true; 
    string lisaName = "Lisa";
    address payable myAddress = payable(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
    // interesting syntax uint256[] remember that my friend 
    uint256[] addressBook = [1, 2, 3];
    string[] myFriendNames  = ["jennie", "lisa"];

    // another thing I need to learn is the mappings keyword in solidity
    // which looks like key value pair in javascript 

}
