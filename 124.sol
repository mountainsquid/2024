//SPDX-License-Identifier: UNLICENSE
// Programming session: 123
// Date: March 07 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

contract a {

    uint[] counting = [1, 2, 3, 4, 5]; 
    string girlfriend = "lisa"; 
    bool trueLove = true; 
    uint myNumber = 3;
    string[] bandName = ["lisa", "minnie"]; 
    string[] password = ["god", "123"]; 
    string[] IP = ["168.0.0.1", "111.111.111.111"];
    string[] greet = ["fack you", "go away"]; 

    function sayWut() public view { }
    function sayNo(uint no) public view returns (uint) { }
    function calc(string[] memory yehyehyeh) public view returns (string[] memory) {}
    function add(string[] memory fook) public returns (string[] memory) { }
    function addMoar(uint[] memory inputArray) public returns (uint[] memory) { }
    // memory is used for complex datatype like array, struct, or string in an argument
    // seems like you don't need to use memory for bool or uint, int 
    // function functionName(datatype memorytype variblename) visibility returns (datatype storagetype) 

    function addstuff(uint _add) public pure returns (uint) { 
        uint result; 
        for (uint i = 1; i < 5; i++) {
            // do something 
        }
         return result;    
    }

    function loopAgain() public pure {
	for(int y = 0; y < 3; y++) {
	}
}



}
