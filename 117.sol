//SPDX-License-Identifier: UNLICENS

// Programming session: 116
// Date: March 06 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 

contract niceContract {

    // this part is only declaring the struct
    // think of it like a blueprint of the struct 
    // at some point download the truffle extension for vs code and sign up for Infuria 
    // I'm going to set up visual studio and deploy contracts on ETH test net feels good man 
    
    struct myGirlfriend { 
        string name;
        int age;
        bool isNice; 
    }

    // this part I'm going to "initialize" (create) an instance (copy) of the struct myGirlfriend 
    // supposedly this part myGirlfriend("lisa", 23, true) is a constructor 
    myGirlfriend lisa = myGirlfriend("lisa", 23, true);

}
