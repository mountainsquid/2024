// Programming session: 94
// Date: Feb 28 2024
// Session: 30 minutes

// need to create parent class
// then subclass feels good man

class BankAccount { 
    constructor(name, accountID) {
        this.name = name
        this.accountID = accountID 
    }
    addMoney() { 
        console.log("$10,000 added into your bank account here you go bro")
    }
    simpMoney() {
        console.log("-$10K out of your bank account you gave it, simp")
    }
}

// this line of code is about creating the subclass, feels good man 
// class subclass extends superclass, feels good man
// always DRY - don't repeat yourself 

class LisaBank extends BankAccount { 
    constructor(_name, _accountID) { 
        super(_name, _accountID)
    }
}

let myBank = new BankAccount("Bob", "Bank accountID: 111-555-1111")

let lisaMyLove = new LisaBank("LISABANK NAME", "LISA BANK ACCOUNT ID")
console.log(lisaMyLove)
lisaMyLove.simpMoney()

class bigCucumber { 
    constructor(inches) {
        this.inches = inches 
    }

    hello() { 
        return `hello ${this.inches}`
    }
}    


class smallCucumber extends bigCucumber { 
}

var superCucumber = new smallCucumber("dick")
superCucumber.hello()






