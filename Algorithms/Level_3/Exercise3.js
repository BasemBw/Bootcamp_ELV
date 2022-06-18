//Write a function that receive a string and decode it to a code that counts how many times each char appears

function countEachChar(str) {
    let newStr = ""
    let count = 1 
    for (let i=0;i<str.length;i++) {
        if(str[i] === str[i+1]){
            count++
        }else{
            newStr+=`${str[i]}${count}`
            count = 1
        }
    }
    return newStr
}

console.log(countEachChar("aaabbcbbb"))