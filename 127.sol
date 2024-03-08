//SPDX-License-Identifier: UNLICENSE
// Programming session: 127
// Date: March 08 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// little things you don't pick up on 
// for one, solidity does not allow assigning values to state variables outside of functions
// In Solidity, all state-modifying operations must be performed inside functions
// I asked pi.ai "but why the following code must be declared inside the constructor instead of outside of it?"

contract NewJeansMembers {
    // Define a struct called NewJeansMember with two fields: name (a string) and age (an unsigned 8-bit integer).
    struct NewJeansMember {
        string name;
        uint8 age;
        string hobby;
    }

    // Declare a public variable called firstMember of type NewJeansMember. This variable will store information about a member of the NewJeans band.
    NewJeansMember public firstMember;

    // The constructor is a special function that is called when the contract is deployed.
    constructor() {
        // Inside the constructor, assign the value "Haerin" to the name field of the firstMember struct.
        firstMember.name = "Haerin";
        firstMember.age = 19;
        firstMember.hobby = "yes";
    }
}
