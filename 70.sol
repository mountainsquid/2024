//SPDX-License-Identifier: UNLICENSED
// Programming session: 67
// Date: Feb 18 2024
// Session: 30 minute

// learning about memory keyword 
// learning about returns keyword
// state variable persisting beyond the function call huh 
// calldata, storage, memory,  
// storage exist even outside of the function call ? 
// calldata read-only 
// storage, long-term storage of data on the blockchain 
// memory variable is NOT stored on the blockchain, I figured this is for gas optimizatin huh 
// string is secretly an array that's why you have to include the memory keyword after 


pragma solidity ^0.8.0;

contract simpleContract {

    function add(uint256 a, uint256 b) external pure returns (uint) {
        return a + b; 
    }
}
