const str = "the fat cat hit the rat with a bat"
const str1 ="bob yelled hello"
const str2 = "it's fleece was white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "9542212222";

const checkIfContainsA = function (str){
    for(const letter of str)
         if(letter === "a")
            return true
    return false
}

const checkIfEndsWithAt = function(str){
    if(str[str.length-1]==="t"&&str[str.length-2]==="a")
        return true
    return false
}

const checkIfStartsWithNum = function(str){
    if(str.length==10&&str.substring(0, 3)==="054"){
        for(const letter of str)
          if(isNaN(letter))
            return false
    }
    else
      return false
    return true
}

console.log(checkIfContainsA(str)) //returns true
console.log(checkIfContainsA(str1)) //returns false

console.log(checkIfEndsWithAt(str)) //returns true
console.log(checkIfEndsWithAt(str1)) //returns false
console.log(checkIfEndsWithAt(str2)) //returns false

console.log(checkIfStartsWithNum(str)) //returns false
console.log(checkIfStartsWithNum(str3)) //return true
console.log(checkIfStartsWithNum(str4)) //return false
console.log(checkIfStartsWithNum(str5)) //return false

