// Programming session: 93
// Date: Feb 27 2024
// Session: 30 minutes

// coding class until I can get the syntax and knowing what's happening
// it's like a drill

class IveButt { 
    constructor(bigAss) {
        this.bigAss = bigAss 
    } // don't forget to declare the method outside of the constructor brah 
 
    eatAss() { // creating a method in the class because why the f*ck not 
        console.log("I am totally not eating ass")
    } // let's create another function because WTFN (why the f*ck not)

    getBigAss = () => {
        return `this.bigAss`
    }

} 

// now if you want to use this F*CKING class you better create an instance of it bruh 
// need to pass some argument into that fucking parameter because why the f*ck not 
let liz = new IveButt("liz has a nasty big butt") 
console.log(liz) // this shows off the bigAss key, but it has a new value being passed 
liz.eatAss()
liz.getBigAss()
// I wrote this code without a debugging error feels good man 
// but the question is, how the f*ck do I chain together the methods? 

// create class, create constructor, create method, create instance, access instance 

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

let myBank = new BankAccount("Bob", "Bank accountID: 111-555-1111")
console.log(`your name is bitch a$$ ${myBank.name}`)
myBank.addMoney() 
myBank.simpMoney()

// now I know the basic it's time to learn about encapsulation and other shit okay thanks svv
