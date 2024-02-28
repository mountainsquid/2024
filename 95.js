// Programming session: 94
// Date: Feb 28 2024
// Session: 30 minutes

// what is a constructor? it's a special function that gets called when creating a class 

class MinnieAss {
    constructor(buttSize) {
      this.buttSize = buttSize; // Initialize 'buttSize' property
    }
  
    hello() {
      return `her butt size is ${this.buttSize}`;
    }
  }
  
  class ShuhuaAss extends MinnieAss {
    constructor(_buttSize, _panty) {
      // Call the parent class constructor with the correct argument (`_buttSize`)
      super(_buttSize);
      this.panty = _panty;
      this.buttSize = _buttSize
    }
  
    showPanty() {
      return `panty color is ${this._panty}`;
    }
  }
  
  let showTimeShuhua = new ShuhuaAss(40, "pink");
  console.log(showTimeShuhua.showPanty());
  console.log(showTimeShuhua._buttSize)
  
  let showTime = new MinnieAss(35);
  console.log(showTime.hello());
  


