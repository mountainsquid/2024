//SPDX-License-Identifier: UNLICENSE
// Programming session: 126
// Date: March 08 2024
// Session: 30 minutes

pragma solidity ^0.8.0;



contract a {
    
    uint[] loopy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    string[] public members = ["Minji", "Hanni", "Danielle", "Haerin", "Hyein"];

    function count10() public pure returns (uint) {
        uint count = 0;
        // the reason the return is 20 is because 
        // the condition says do something while its true
        // so the 0 increments by 1 until its 20
        // then it stops, the returns the total into count
        // that is why return is outside of the {} scope
        // I went through a tutorial and it doesn't explain nuanced like that
        // coding isn't hard, what's hard is getting someone to explain it properly

        for(uint i = 0; i < 20; i++) {
            count += 1; 
        }
        return count; 
    } 

    function countBy2() public pure returns (uint) {
        uint count = 0;
       
        for(uint i = 0; i < 20; i += 2) {
            count += 1; 
        }
        return count; 
    }

    function countUpToN(uint n) public pure returns (uint) {
        uint count = 0;

        // Count from 1 to n
        uint i = 1;
        while (i <= n) {
            count += i;
            i++;
        }

        return count;
    }

    function simpleWhileLoop(uint n) public pure returns (uint) {
    uint i = 0;

    while (i < n) {
        i += 3;
    }

    return i;
    }

       
    
}
