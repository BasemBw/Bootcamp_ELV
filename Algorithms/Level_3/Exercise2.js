// /Implement an algorithm to determine if a string has all unique characters.

function checkUnique(str){ 
    let chars = new Set()
    for(let char of str){ 
       if(chars.has(char)){
         return false 
       }else {
         chars.add(char)
       }
    }
    return true
}    

console.log(checkUnique("cat")) 