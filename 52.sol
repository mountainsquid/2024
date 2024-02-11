// Programming session: 52
// Date: Feb 11 2024
// Session: 30 minutes


//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19; // stating our verison of solidity

// a contract and then a function inside the contract 
// functions in solidity can have 4 visibility, public, private
// external, internal 
// there is "view" and "pure" keyword in solidity, take note of that
// view and pure, read state of the blockchain, doesn't cost gas right?
// seems like if it's a public function that requires to do something in the blockchain
// yeah it's going to cost some gas 
// view or pure function doesn't cost gas because it doesn't modify the state 

contract SimpleStorage { 

    uint256 public herAge = 18; 
    function displayAge(uint256 _herAge) public {
        herAge = _herAge;
    }

    function getHerAge() public view returns(uint256) {
        return herAge;
    }
    

}


