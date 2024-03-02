

//SPDX-License-Identifier: UNLICENSED
// Programming session: 104
// Date: MARCH 02 2024
// Session: 30 minutes
pragma solidity ^0.8.0; 

// contactor, only get run once (for whatever reason, because ...?)
// constructor is gets run during the creation of the contract that's why
// require keyword = requires specific condition before the code runs 

contract eatingNuts { 

    function checkMyNuts(uint a) public pure returns (bool) {
        require(a==0, "a is indeed 0");
        return true;
    }

}


