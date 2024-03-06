//SPDX-License-Identifier: UNLICENS

// Programming session: 118
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

    // let's do some mapping shall we 
    mapping(uint => string) herNames;   // no {} scope right now for this line seems like we're just declaring 
    constructor() public { 
        herNames[0] = "lisa";
        herNames[1] = "jenny";
        herNames[2] = "jisoo"; 
        }
        mapping(uint => uint) myNumbers;
        mapping(bool => uint) isThisTrue;
        mapping(string => int) fackchu;
        mapping(string => string) whyNot;
        mapping(bool => string) okThere;
        mapping(bool => bool) trueOrNot;
        mapping(uint256 => uint8) numberBruh;
        mapping(uint8 => uint8) yeah;
        mapping(string => uint8) thanksDaddy;
        mapping(bool => uint8) helloThere;
    }
    

 // mapping(uint => string) for this line of code
 // the mapping uint is the key, string is the value 
 // thus key value pair 
 // when you're thinking of mapping just think key value pair
 // and when you're thinking of struct just think custom data
 // now that I think about it, IF statements being a logic gate 
 // if something is true, then run this block of block
 // if something isn't true, then run into the next conditional 
 // if that is NOT true, skip the block of code and go into the next code
 // this is useful if there is a few things that you want the user to experience 
 // mapping 


