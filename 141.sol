// SPDX-License-Identifier: UNLICENSED MIT


// DATE: APRIL 01 2024
// SESSION: 142  
// TIME STUDIED: 20 MINUTES 

pragma solidity ^0.8.19;

// this code creates a contract called simplestorage 

contract SimpleStorage {
    uint256 myFavoriteNumber; // this declares a uint256 variable but without any value 

    // this creates a struct, a custom datatype 
    // like a blueprint 
    // in this struct there is the uint256 and string variables 
    // seems like the custom datatype is favoritenumber and name
    // I'm guesing the struct is the person, and his name and favorite number 
    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    // in this code the person is creating an instance of the struct 
    // the instance is listofPeople from the Person struct 
    // but I thought that when you create an instance it has to be within a constructor
    // the person is creating an instance outside of a constructor thats interesting 
    Person[] public listOfPeople;

    // in this code the person is creating a mapping
    // I'm guessing because the person wants to assign name and favorite number for easier searching
    // this mapping is string to uint, so it links a string to a number 
    mapping(string => uint256) public nameToFavoriteNumber;

    // this function it stores a favorite number on the blockchain 
    // interesting how ther person is using the variable _favoriteNumber
    // I'm assuming its local scope only huh when its the parameter _favoriteNumber
    function store(uint256 _favoriteNumber) public {
        myFavoriteNumber = _favoriteNumber;
    }

    // this function gets the number of the myFavoriteNumber, it views it from the blockchain
    // I am assuming 
    function retrieve() public view returns (uint256) {
        return myFavoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}


