//SPDX-License-Identifier: UNLICENSED
// Programming session: 97
// Date: Feb 29 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// visibility: public, private, internal, external 
// behavior: view, pure, payable 
// so it goes visibility -> behavior as the order when declaring a function 
// view = doesn't modify the state of the blockchain
// so if someone tries to touch the blockchain view tells them to get their f*cking dirty hands off
// but wtf is concerned modifying the state? 
// modifying the state: write variable state, emitting events, using self destruct, creating other contracts
// calling any functions not marked pure or view, using low level calls
// modifier function interesting 
// _; (execute the rest of the code
// you can inherit, then override the inherited functions, feels good man 
// constructor special function that gets created at the time of contract creation
// constructor() {} ... only used once don't forget 


contract a {
    function get() public pure returns (string memory) {
    return "contract A";
    }

}

contract b is a {
    function fetch() public pure returns (string memory) {
        return "contract B";
    }
}
