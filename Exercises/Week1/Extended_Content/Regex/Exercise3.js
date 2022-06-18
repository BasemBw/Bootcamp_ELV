const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function(str){
    let letters = /^[A-Za-z]+@/;
    if(str.slice(str.length - 4)===".com"&&str.match(letters))
      return true
    return false
}
console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true
console.log(emailValidator(email3)) //return false