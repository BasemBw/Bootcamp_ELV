import validator from 'validator';
import faker from '@faker-js/faker';


//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan'))

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone('786-329-9958' , 'en-US'))



//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(blacklist.join(''))
console.log(validator.blacklist(text,blacklist))

const makeHuman = function(number){
     while(number){
         console.log(faker.name.findName(),faker.internet.avatar(),faker.name.jobTitle())
         number--
     }
}
makeHuman(2)