//SPDX-License-Identifier: UNLICENSED

// Programming session: 111
// Date: March 04 2024
// Session: 30 minutes

pragma solidity ^0.8.0; 

contract a {
    int public lisaAge = 25;
    int internal minnieAge = 25;

    // this function simply reads the value using view modifer 
    function viewLisa() public view returns (int) {
        return lisaAge;
    }

    // okay let's write it again
    function viewMinnie() public view returns (int) {
        return minnieAge;
    }

    // okay let's write a function that changes a state variable
    // when I deploy this contract, changeAgeLisa will ask me input for age
    // I put "35"
    // now lisaAge has changed to 35 instead of the default 25 
    // this function is mean to change the state variable lisaAge into something new
    // since lisaAge is a public variable, therefore its a state variable 
    // this function takes an argument _age (user input) and then assigns ..
    // _age to lisaAge
    // therefore we see an update on lisaAge 
    // I will learn about error handling later, thanks 

    function changeAgeLisa(int _age) public { 
        lisaAge = _age;
    }

    // local variable, local scope
    // what is a scope in programming, it's just within that {}
    // once the function is done running, the variable eased to exist 
    // that is really f*cking interesting ... 
    // state variable exists on the blockchain 
    // local function variable dies once the function is run 
    // hmmMMMMmmm

    function helloword() public  returns (int) {
        int pizzaSlices = 5;
        return pizzaSlices; 
    }
}
    

contract b { 
}
  
