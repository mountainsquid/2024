//SPDX-License-Identifier: UNLICENSED
// Programming session: 102
// Date: MARCH 01 2024
// Session: 30 minutes

// internal function calling a function from within the contract
// external function, calling a function from another contract 

pragma solidity ^0.8.0;

contract hello { 
    uint256 public lisaAge = 25; 
    uint public minnieAge = 23;
    bool public loveKpop = true; 
    bool public hateKpop = false;
    string public kpopGroup = "New Jeans!";
    
    function sing() public view {     }
    function dance() public pure {}
    function yell() private view {}
    function yell(uint a) public view returns (uint) {}
    function seeMe(string memory b) internal view { }
    function hey(string storage c) internal view {}
    function bye(string memory d) public pure {}
    function play(uint e, string calldata f) private pure {}
    function ree(bool see, string calldata eww) private pure {}
    function arrayMe(bool pee, bool poo, uint256 mee) public pure {}
    function shit(uint g) public view returns (uint) {}
    function cry(bool p) public view returns (bool) {}
    function stomp(string memory i) internal view {}
    function payMeBitch(uint256 myBankAccount) public view returns (uint256) {}
    function sexo() public view {}
    function spread() internal pure {}
    function hurt(string memory ah) public returns (string memory) {}
    function autism(string memory hero) public returns (string memory) {}
    function payMe(int256) public returns (int256) {}
    function keyboard(bool poo) public returns (bool) {}
 

}
