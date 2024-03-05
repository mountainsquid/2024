//SPDX-License-Identifier: UNLICENSED

// Programming session: 114
// Date: March 05 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 

contract a { 

    // supposedly a dynamic array that can keep growing 
    // kinda makes sense I think using the pop and push method it can keep growing right? 
    // you have to declare the variables inside a contract right? 
    // yes its true because of scope, thanks ChatGPT 
    uint256[]  lisaPartners = [1, 2, 3, 4, 5];
    uint256[3] minniePartners = [1, 2, 3]; 
    string[] blackPink = ["jennie", "lisa", "jiso"];
    uint256[] arr = [1, 2, 3, 4, 5];
    uint[] girlFriends = [18, 19, 20];
    uint[] boyFriends = [18, 19, 20];
    string[] kPop = ["gidle", "blackpink", "aespa"];

    // for this view function I can see all the values inside the uint array lisaPartners
    function letMeSee() public view returns (uint[] memory) {
        return lisaPartners;
    }

    // for this view function I can see all the values inside string array blackPink
    function bangParnters() public view returns (string[] memory) {
        return blackPink;
    }

    // working with string it seems that I have to declare memory after string[] (storage type) 
    // after returns I want to return an array so I use string[] because its a string array 
    function viewPop() public view returns (string[] memory) {
        return kPop;
    }

}
