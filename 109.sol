//SPDX-License-Identifier: UNLICENSED

// Programming session: 107
// Date: March 04 2024
// Session: 30 minutes

// contract b can access public members of contract a
// what is a member? it's functions and variables in a contract 
// contract b cannot access private or internal members of contract a 
// this is done using visibility modifer keywords 
// encapsulation = hiding data using keywords like private and internal
// pure keyword is for function isolation 
// why constructor? it's a once and done function that when creating an instance
// ABI (Application Binary Interface)  

pragma solidity ^0.8.0; 

contract a { 

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

contract b is a { 

}

contract c is b { 

}

contract d is a {

}
