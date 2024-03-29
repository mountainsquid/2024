// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// supposedly there's declarative function and non-declarative
// when it comes to function scope, it's the  accessibility and visibility of a function within a smart contract
// that's why there's public, private, internal, external
// ok that makes sense 
// there are more things a function could do 
// like modify state variables, emit events, creating other contracts, using self destruct 
// send ether via calls, make the function view or pure, using low level calls (what's that?) 

contract MyContract {
    uint lisaAge = 30; 

    function getAge() public view returns (uint256) { 
        return lisaAge;
    }

// for this function, it reassigns lisaAge to _lisaAge and I can update the value
// then I use getAge() to get the status / value update of _lisaAge huh that's interesting 

    function updateAge(uint _lisaAge) public {
        lisaAge = _lisaAge; 
    } 

}
