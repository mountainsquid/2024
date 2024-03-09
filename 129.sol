//SPDX-License-Identifier: UNLICENSE
// Programming session: 129
// Date: March 09 2024
// Session: 30 minutes


// solidity is about functions calling other functions 
// you can obvious call the function and pay ether into that address
// address is a built in datatype in solidity
// paylabe keyword, can get ether when called. 
// send ether to payable function, you get something in return 
// 

pragma solidity ^0.8.0;

contract RestrictedAccessContract {
    address public owner;

    constructor() {
        owner = msg.sender; // The contract owner is set to the address deploying the contract
    }

    function restrictedFunction() public view {
        require(msg.sender == owner, "Unauthorized: Only the owner can call this function");
        // Add your function logic here
    }

    // function funcName() visibility, function modifier 
    // remember, visibility then modifer.
    function payMeBitch() public payable { }
    function getMoney() public payable {}
    function sendETH() public payable {}
    function senderETH() public payable {}
    
}
