//SPDX-License-Identifier: UNLICENSED
// Programming session: 101
// Date: MARCH 01 2024
// Session: 30 minutes

// https://docs.soliditylang.org/en/v0.8.24/ helpful website 

pragma solidity ^0.8.0;

contract hello { 
    // assigning address to an address keyword that's cool 
    address public checkAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    // this is an interesting syntax, I will get used to this 
    address payable testAddress = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2); 

    // why is a constructor needed here, care to explain? 
    constructor() payable {}

    function getaAddressBruh() public view returns (uint) {
        return checkAddress.balance;
    }

    function payMe() public { 
        testAddress.transfer(1 ether);
    }
}
