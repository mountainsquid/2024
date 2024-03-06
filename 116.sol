//SPDX-License-Identifier: UNLICENS

// Programming session: 116
// Date: March 06 2024
// Session: 30 minutes

// so it goes from solidity => opcode => bytecode => EVM
// mapping seems to be like a object literal in javascript
// there is a key value pair, think of like a phone book
// the key would be the person name and the value would be the phone number 

pragma solidity ^0.8.0; 

contract a { 

    string[] kPop = ["jennie", "lisa", "jiso", "rosa"];
  
    function viewPop() public view returns (string[] memory) {
        return kPop;
    }

    // => arrow as in mapping relationship 
    mapping(address => uint) public users; 
    mapping(uint => bool) public truth; 
    mapping(bytes => uint) public biteMe;
    mapping(uint => bool) public ree;

    uint ass = 25;
    uint boobs = 50; 

    bool public c = (ass > boobs); // is 25 greater than 50? 
    bool public d = (boobs > ass); // is 50 greater than 25?
    bool public e = (ass >= boobs); // is 25 greater or euqla to 50? 
    bool public g = (boobs >= ass); // is 50 greater or equal to 25?  
    bool public f = (boobs == ass); // is it equal to each other? no

    // writing a struct, always creating a a struct feels good man 
    // I am a code monkey writing out the code 

    struct person { 
        string name;
        int age; 
        bool hasID; 
    }

    struct kpopGroup { 
        string groupName; 
        int members;
        bool isGood; 
    }

    kpopGroup blackPink = kpopGroup("BlackPink", 6, true);

    struct lisaP { 
        int age;
        string name; 
        bool bigBoobs; 
    }

    lisaP lisaPee = lisaP(19, "lisa", true);

    struct myLaptop { 
        int laptopAge; 
        string laptopName;
        bool expensive; 
    }

    myLaptop thinkpad = myLaptop(5, "thinkpad", false);

    struct myGirlfriend {
        string herName; 
        int herAge; 
        bool personalityGood; 
    }

    myGirlfriend Agnes = myGirlfriend("anges", 23, true);

}

