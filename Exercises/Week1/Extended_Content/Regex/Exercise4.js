const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"


const urlValidator = function(str){   
 if(str.slice(str.length - 4)===".com"&&firstURL.substring(0, 4)==="www.")
     return true
    return false
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return true
console.log(urlValidator(thirdURL)) //return false

