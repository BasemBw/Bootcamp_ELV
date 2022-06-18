//Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it’s position in the alphabet: a = 1, b = 2, c = 3 etc.

function highestScoringWord(string) {
    let words = string.split(" ");
    let highestWord = ""
    let correctWord = 0
    let maxWord = 0
    for (let word of words) {
        for (let letter of word) {
            correctWord += letter.charCodeAt()
        }
        if (correctWord > maxWord) {
            maxWord = correctWord
            highestWord = word
        }
        correctWord = 0
    }
    return highestWord
}

console.log(highestScoringWord("basem winner ahmed"))