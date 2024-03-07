//SPDX-License-Identifier: UNLICENSE
// Programming session: 120 
// Date: March 07 2024
// Session: 30 minutes

pragma solidity ^0.8.0;

// so let me get this straight
// enum is a custom data type where there is pre-defined value
// supposedly this makes the code less bug 
// enunm = Enumerable
// think of enum as having 1 defined type of value 
// value being const and can't be changed
// huh that's interesting 
// enum has defined integer but you call them with a defined label
// that's interesting, that's kinda like an array 
// the first thing I should learn about a concept is to learn about the keyword, what its used for
// before even attempting to code said keyword I would reckon 
// use <keyword> <enum variable name> { name1, name2, name4 } interesting no semi-colon 

contract LemonadeStand {
  // Define an enum for lemonade sizes
    enum Size { Small, Medium, Large }
    enum penSize { small, medium, large}
    enum braSize { a, b, c }
    enum weight { skinny, med, large }
    enum height { short, tall, veryTall}

// now that I have declare a enum, now what? 
// how do I access it? 
// declare it, assign it value, then use it in a function 
// 


  // Declare a variable to store the current size
  Size public size;
  penSize public LisapenSize; 
  braSize public lisabraSize; 
  weight public  lisaWeight;
  height public  lisaHeight;

  // Function to set the size of the lemonade
  function setSize(Size _size) public {
    size = _size;
  }

  // Function to get the current size of the lemonade (optional)
  function getSize() public view returns (Size) {
    return size;
  }
}
