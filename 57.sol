//SPDX-License-Identifier: UNLICENSED

// creating your own variable datatype with struct
// but what is struct and what is the syntax behind it? 
// okay, so you can only declare 1 contract per file
// but you can have multiple contracts in a project, with different files 
// event keyword = boardcasting that a event could happen in the contract!
// the event sytnax kinda looks like a function tbh, it has parameters too 
// seems to be event keyword is like "LISTEN HERE, THERE'S SHIT GOING ON IN THE CONTRACT
// and emit is like "THE EVENT HAPPENED, HERE'S WHAT HAPPENED, IT TRIGGERED
// maybe I can get a better example visualized in solidity
// event keyword to push smart contract data into into the front end (web app) etc
// declare the event, but that doesn't do anything
// have to use the emit  keyword also 

pragma solidity ^0.8.0;

contract helloWorld {
    event sayHello(string message);

    function lisaHello() public {
        emit sayHello("hello this is lisa");
    }
}
