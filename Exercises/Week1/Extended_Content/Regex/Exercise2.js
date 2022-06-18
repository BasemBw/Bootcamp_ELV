const regexArr = [/a/, /b/, /^d/, /e$/]
const str = "Bike"
const str1 = "the room is on fire"
const str2 = "Fergalicious"
const str3 = "Fox in sheep clothing"



const searchMatchingRegex = function (str) {
    for(let i=0;i<regexArr.length;i++)
       if(regexArr[i].test(str))
          return true
    return false
}

console.log(searchMatchingRegex(str))
console.log(searchMatchingRegex(str1))
console.log(searchMatchingRegex(str2))
console.log(searchMatchingRegex(str3))