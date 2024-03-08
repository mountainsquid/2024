//SPDX-License-Identifier: UNLICENSE
// Programming session: 125
// Date: March 08 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

contract a {
    
    uint[] loopy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


      function sumArrayElements() public view returns (uint) {
        uint sum = 0;
        for (uint i = 0; i < loopy.length; i++) {
            sum += loopy[i];
        }
        return sum;
    }

    function countToFive() public pure returns (uint) {
        uint count = 1;
        for (uint i = 1; i <= 5; i++) {
            count += 1;
        }
        return count;
    }

    function even(uint _count) public pure returns (bool) {
        if (_count % 2 == 0) {
            return true;
        } else { 
            return false;
        }
    
    }

    function odd(uint _count) public pure returns (bool) {
        if(_count % 2 == 1) {
            return true; 
        } else { 
            return false;
        }
    }

    function gayMan(string memory _one) public pure returns (string memory) {

    }

    // there is something I should remember for the for loop
    // is that I have to declare the i variable inside the () 
    // then after the () there is the {} because you'll run a block of code 

    function noCode() public pure { 
        for(uint i = 0; i < 5;  i++) {

        }
    }


}
