//SPDX-License-Identifier: UNLICENSED

// Programming session: 113
// Date: March 05 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 
  
// there are special variables in solidity such as ... 
// block.gaslimit and msg.sender 
// these global variables you can call and use anywhere within the .sol file 
// block.gaslimit and msg.sender are considered environmental variables, but what are those anyways? 
// I have learned about environmental variables, amazing stuff. 

contract a { 
    uint public timestamp = block.timestamp;
    uint public chainID = block.chainid;
    uint public value = msg.value;
    


}
