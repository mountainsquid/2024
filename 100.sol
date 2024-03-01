//SPDX-License-Identifier: UNLICENSED
// Programming session: 97
// Date: Feb 29 2024
// Session: 30 minutes

// https://docs.soliditylang.org/en/v0.8.24/ helpful website 

pragma solidity ^0.8.0;

contract hello { 
    // assigning address to an address keyword that's cool 
    address public checkAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    // creating a function that gets the balance of said dress
    // but is checkAddress.blance, the balance is a method right? 
    // ok it's not a method but a property, gotchuuu
    function getaAddressBruh() public view returns (uint) {
        return checkAddress.balance;
    }
}
