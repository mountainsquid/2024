//SPDX-License-Identifier: UNLICENSED
// Programming session: 103
// Date: MARCH 02 2024
// Session: 30 minutes

// create event in the contract 
// something events happen and then use emit keyword? 
// if a variable isn't global, solidity doesn't automatically create getter function for that variable 
// getter function, reads the state of the variable 
// setter function, changes the state of the variable 
// dear diary, today I learned what a state variable is in solidity
// ther is a difference between state variable and global variable
// but why do we need state variables? 
// keep record of account balance, ownership (of NFTs?) and high stores in a game 
// state variable lives in the blockchain 
// non-state variables in a function doesn't live on the blockchain 
// state variable can be defined as private, public, internal, sealed 
// common data structure in solidity: map, struct, array
// 


pragma solidity ^0.8.0;

contract c { 
uint256 public readThis = 12345; 

function getData() public view returns (uint256) {
    return readThis;
    }
}
