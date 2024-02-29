//SPDX-License-Identifier: UNLICENSED
// Programming session: 96
// Date: Feb 29 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// using smart contract you can store data permanently on the blockchain 
// variables for smart contracts stored in 3 locations: storage, memory, datacall  
// storage stored on the blockchain = state variable 
// memory = variable being executed during a function invoke 
// variables stored outside of a function = state variable, stored on the blockchain 
// functions in solidity = functions that create a transaction and functions that don't 
// function that don't do transaction are free (no gas) to call beacause ...
// it doesn't change the state of the blockchain 
// deploying a contract requires gas
// calling a function that writes on the blockchain requires gas 
// but why gas? so people can't spam the network and clog it up for free
// function f() public view returns (uint) { } 
// bigger the array is, the bigger the gas used (in the function itself?) 
// always write function where there is a limit to gas 
// you can return multiple values in the function in solidity 
// what is destructuring assignment in solidity?

contract solidIntro {
    string public text; 

    function set(string memory _text) public { 
        _text = text; 
    }

    function get() public view returns (string memory) {
        return text;
    }

    // testing function that refunds gas price 
    function givemegas() public returns (uint) {
        return tx.gasprice; 
    }


}
