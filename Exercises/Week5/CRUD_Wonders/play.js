let string = "abbacb"
const CountMaxLetter = function (str) {
    let letters = {}
    let max = 0
    let maxletter=""
    for (let letter of str) {
        if (letters[letter] == undefined){
            letters[letter] = 1
        }
        else
            letters[letter]++
    }
    for (const key in letters) {
        if (letters[key] > max){
            maxletter = key
            max = letters[key]
        }
    }
    return maxletter
} 


console.log(Counts(string))