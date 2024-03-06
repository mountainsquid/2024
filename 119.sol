//SPDX-License-Identifier: UNLICENSE
// Programming session: 119
// Date: March 06 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 

contract a {

// code variables, 3 times 
uint[] public hello = [1, 2, 3, 4, 5]; 
uint[2] public no = [124, 1234]; 
uint[10] public yes = [1239, 1248, 12489]; 
string[] public names = ["jenny", "minnie"];
bool public s3x = true; 
bool tip = false; 
bool noTip = true; 

// code a function, 3 times 
// this function is public but it's only viewable with no change to the state variable 
function sayBye() public view {}

// this function is internal, that means only variables within the contract can interact and its pure 
function sayNo() internal pure {}

// this fucntion is external and pure, I will figure out and refresh myself what it does later 
function sayOk() external pure {} 

// this function is going to take an argument and then return an unit because why the f*ck not 
function s3xTime(uint hi) public view returns (uint) {}

// code for loop, 3 times 
function loop() public pure {
    for(uint i = 0; i < 5; i++) { 
    }
}

function loopMe() public pure { 
    for(int z = 0; z < 5; z++) { 
        // do something holy shit 
    }
}

// I kinda like the formatting of this code because it's aesthetic 
function sserafim() public pure { 
    for (int s; s < 5; s++) { }
}

function gidle() public pure { 
    for (int m; m < 5; m++) {}
}

function blackPink() public pure { 
    for(int b; b < 5; b++) {}
}



// funny I forgot about being static type that I have to declare int y in the function 
function loopAgain() public pure { 
    for(int y = 0; y < 3; y++) { 

    }
}

// code data structure, 3 times 
mapping(address => uint) public balances;
// here comes the mapping because why not 
mapping(int => int) public numbersNshit;
mapping(bool => int) public truths; 
mapping(bool => bool) public whyNot;
// the bool => bool part, bool is the key, bool is the value 
// don't forget that the mapping is like a dictionary
// and struct is the custom data type 
// never forget that ever 

// with that said it's time to write some struct because why not 

// there's something I forgot about programming 
// that it always begin with a keyword
// that's something that I sometimes forget funny enough 
// there's something autistic about solidity is that it's case sensitive
// and you always have to end it with a ; at the end of the code 

struct girlfriend { 
	string name;
	int age; 
	bool goodgirl; 
}

struct dog { 
    string name; 
    int age; 
    bool goodDog;
}

struct mouse { 
    string color;
    int weight;
    bool holesInMouse; 
}

// now that I'm writing the map and struct it took this whole day to learn
// next up I have to figure out how to write enum
// enum, array, struct and map, get good at coding those 
// tomorrow I'm going to learn about enums because why not 

// this is weird, solidity giving me a error when I type in calldata 
// but why is that? 
function wat(string memory _wat) public view returns (string memory) {}
function see(string memory _puss) public view returns (string memory) {}
function sendMoney() public pure {}
function getMOney() public pure {}

// seems like everything in a function
// tomorrow I'm going to learn about enum
// then refresh on class
// every day is grind day don't you know 

}

