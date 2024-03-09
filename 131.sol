//SPDX-License-Identifier: UNLICENSE
// Programming session: 131
// Date: March 09 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

contract a {

    // declaring a variable ends with a ;
    // but declaring function and construction ends up with block scope {}
    // something to keep in mind 
    // first you declare the struct (blueprint)
    // then you add data to the struct 
    // huh that's interesting
    // can use struct inside the mapping that is amazing 

    address owner; 
    string secret; 
    string[] blackPink = ["lisa", "rose"];
    
    uint[] dumbBells = [1, 2, 3, 4, 5];
    function payMe() public payable {}
    constructor(string memory _pay)  {
        secret = _pay;
        owner = msg.sender;

    }
}

