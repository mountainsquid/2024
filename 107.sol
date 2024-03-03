//SPDX-License-Identifier: UNLICENSED

// Programming session: 107
// Date: March 03 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 

contract c { 

    // ok now that I have figured on how to write enum 
    // what is next? how do I access the key value pair?
    // there is visibility keywords for both functions and variables.
    // I did not ... know that 

    uint256 public pubicHair = 25;
    int private  hisHair = 119; 
    int internal  herHair = 200;
    string public lisaName = "lisa";
    string private lisaName = "not Lisa"; 
    string internal minnieHair = "yes its her hair"

    pizza public myPizza;
    enum pizza { 
        small,
        med,
        big
    }

    function makePizza(pizza _size) public {
        myPizza = _size;
    }

    function cookPizza() public view returns (string memory) {
        if (myPizza == pizza.small) { return '10 minutes'; }
        if (myPizza == pizza.med) { return '15 minutes'; }
        
    } 




}


