//SPDX-License-Identifier: UNLICENSED
// Programming session: 66
// Date: Feb 17 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

contract helloWorld {

    uint256[] favNums; 
    uint256[] myNumbs; // uint256 array, don't forget 
    uint256[] myArray; 
    uint256[] bankAccounts; 

    bool evenNumber = false; 
    bool oddNumber = true; 
    bool isGay = true;
    bool isStraight = false;

    string lisaName = "Lisa";
    string myName = "BOB SAGGOT";
    string helloDear = "good morning dear";
    string goodMorning = "show bobs and vaganes!";

    uint256[] blackPink = [1, 2, 3];
    string[] gIdle = ["miyeon", "minnie", "yuqi", "Shuhua"];

    // public, private, internal, external 
    // using external to save on gas fees

    function singShuhua() public view returns (string memory){
        return "Shuhua is singing Lion";
    }
}

// there's read function, which just reads the function 
// and there's write function which costs gas me thinks 
// read function, free
// write function costs gas
// writing variables to warm up 

// and some more code:

//SPDX-License-Identifier: UNLICENSED
// Programming session: 66
// Date: Feb 17 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

contract twitter { 
    mapping(address => string) public tweets; 

    function createTweet(string memory _tweet) public { 
        tweets[msg.sender] = _tweet; //msg.sender sends info directly from blockchain? 
    }

    function getTweet(address _owner) public returns(string memory){
        return tweets[_owner];
    }

}

// mapping is key:pair value, like a dictionary or phone book
// this sounds really similar in javascript ... 
// remember "key value pair" and you should be okay 
// practical example of key value pair? Mapping an 0x address to a name 
// using mapping to find the key:value pair fast!
// => arrow function, think it as "to" something. At least that's what the youtuber said 
// no, => is a mapping operator ... that's interesting 


