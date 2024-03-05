//SPDX-License-Identifier: UNLICENSED

// Programming session: 113
// Date: March 05 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 
  
// I think time to talk about units in solidity
// seems like array, struct and string you need to tell what storage 
// space you need to put it in, when it's a return function 

contract a { 
    uint gei_1 = 1 gwei;

    function read() public view returns (uint) {
        return gei_1;
    }

    function returnYou() public pure returns (string memory) {
        return "hello";
    }

    // this function simply returns the value of lisa because it's in the function parameter
    // seems like this function also takes an agrument is that true
    // function uses calldata which is variables that is temporary only during the function execution 
    function lovingYou(string calldata lisa) public pure returns (string calldata) {
        return lisa;
    }

    function sayLove(string memory creampie) public pure returns (string memory) {
        return creampie;
    }

    function sayAh(string memory ah) public pure returns (string memory) {
        return ah;
    }
   
}
