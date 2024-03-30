// SPDX-License-Identifier: UNLICENSED
// date: MARCH 30 2024

pragma solidity ^0.8.25;

contract HelloWorld {
   
   // creating a struct 
   // I would like to think of the struct as a blueprint
   // like it's a blueprint of users for this solidity program I'm creating 
   struct idolGroup { 
    uint256 groupNumber;
    string name;
    bool isCool; 
   }

   // here I am creating an instance of the struct idolGroup 
   // I think of it as a new user in the database, and her name is lisa 
   idolGroup public lisa; 

   // now I'm giving the new instance lisa value, and I'm pass arguments into the parameter
   // such as the groupNumber, the name and the bool value 
   // seems like in solidity the person needs to give values inside the constructor for 
   // the public struct
   constructor() { 
   lisa = idolGroup(5, "lisa", true);
   }


}
