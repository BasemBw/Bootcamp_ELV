//How do you count the number of vowels (a,e,i,o,u) in a given string?

function getCountVowels(str){
    let vowelsLetters = new Set(["a","e","i","o","u"])
    let vowelsCount = 0
    for(let letter of str){
        if(vowelsLetters.has(letter.toLowerCase())){
               vowelsCount++
        }
    }
    return vowelsCount
}

console.log(getCountVowels("aabcde"))