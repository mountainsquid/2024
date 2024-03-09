//SPDX-License-Identifier: UNLICENSE
// Programming session: 130
// Date: March 09 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// this is super interesting. msg.sender = owner declared inside a constructor so it's pernament
// if it's declare in a function, the msg.sender = owner then there's security risk
// that makes alot of sense 

contract RestrictedAccessContract {

    constructor() {} // this is an empty constructor that's fun

// huh that's interesting, private and internal cannot be payable 
// payable will always have to be public or external but why? 
function payMeBich() external payable {}
function payMEbich() public payable{}
function book() public payable {}
function bookNow() public payable {}

// huh that's interesting
// today I've learned something new
// ther is a difference between call and transact (send) in solidity
// but what is the difference? one doesn't use gas and is read-only, the only uses gas and changes things 

  function checkRemainingGas() public view returns (uint) {
        // Return the remaining gas for the current transaction or message call
        return gasleft();
    }
}
